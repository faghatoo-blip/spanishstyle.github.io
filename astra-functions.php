<?php
/**
 * Astra Clothing Store Child Theme Functions
 * 
 * This file contains all custom functions for the Astra Clothing Store child theme.
 * It demonstrates best practices for WordPress and WooCommerce customization.
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

/**
 * Enqueue child theme stylesheet and parent stylesheet
 */
function astra_clothing_enqueue_styles() {
    // Get parent theme stylesheet
    $parent_style = 'parent-style';
    
    // Enqueue parent theme stylesheet
    wp_enqueue_style( 
        $parent_style, 
        get_template_directory_uri() . '/style.css' 
    );
    
    // Enqueue child theme stylesheet
    wp_enqueue_style(
        'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style ),
        '1.0.0'
    );
    
    // Enqueue custom styles
    wp_enqueue_style(
        'custom-styles',
        get_stylesheet_directory_uri() . '/assets/css/custom.css',
        array( 'child-style' ),
        '1.0.0'
    );
    
    // Enqueue responsive styles
    wp_enqueue_style(
        'responsive-styles',
        get_stylesheet_directory_uri() . '/assets/css/responsive.css',
        array( 'custom-styles' ),
        '1.0.0'
    );
}
add_action( 'wp_enqueue_scripts', 'astra_clothing_enqueue_styles' );

/**
 * Enqueue custom JavaScript files
 */
function astra_clothing_enqueue_scripts() {
    // Enqueue custom JavaScript
    wp_enqueue_script(
        'custom-js',
        get_stylesheet_directory_uri() . '/assets/js/custom.js',
        array( 'jquery', 'woocommerce' ),
        '1.0.0',
        true
    );
    
    // Localize script for AJAX
    wp_localize_script(
        'custom-js',
        'astraClothing',
        array(
            'ajaxUrl' => admin_url( 'admin-ajax.php' ),
            'nonce'   => wp_create_nonce( 'astra_clothing_nonce' ),
        )
    );
}
add_action( 'wp_enqueue_scripts', 'astra_clothing_enqueue_scripts' );

/**
 * Register custom menus
 */
function astra_clothing_register_menus() {
    register_nav_menus( array(
        'primary'   => esc_html__( 'Primary Menu', 'astra-clothing-child' ),
        'secondary' => esc_html__( 'Secondary Menu', 'astra-clothing-child' ),
        'footer'    => esc_html__( 'Footer Menu', 'astra-clothing-child' ),
    ) );
}
add_action( 'after_setup_theme', 'astra_clothing_register_menus' );

/**
 * Add support for post thumbnails
 */
function astra_clothing_setup() {
    add_theme_support( 'post-thumbnails' );
    add_image_size( 'clothing-product-thumbnail', 250, 250, true );
    add_image_size( 'clothing-product-medium', 500, 500, true );
    add_image_size( 'clothing-product-large', 1000, 1000, true );
}
add_action( 'after_setup_theme', 'astra_clothing_setup' );

/**
 * WooCommerce Customization - Hooks and Filters
 */

/**
 * Customize product loop columns
 */
function astra_clothing_loop_columns() {
    return 4; // Display 4 products per row
}
add_filter( 'loop_shop_columns', 'astra_clothing_loop_columns' );

/**
 * Add product sale badge
 */
function astra_clothing_show_product_sale_badge() {
    global $product;
    
    if ( $product->is_on_sale() ) {
        echo '<span class="product-badge sale">' . esc_html__( 'Sale', 'astra-clothing-child' ) . '</span>';
    }
}
add_action( 'woocommerce_product_loop_start', 'astra_clothing_show_product_sale_badge', 5 );

/**
 * Add product rating to loop
 */
function astra_clothing_show_product_rating() {
    global $product;
    
    if ( wc_review_ratings_enabled() && $product->get_rating_count() > 0 ) {
        echo wc_get_rating_html( $product->get_average_rating() );
    }
}
add_action( 'woocommerce_after_shop_loop_item_title', 'astra_clothing_show_product_rating', 5 );

/**
 * Customize Add to Cart Button Text
 */
function astra_clothing_add_to_cart_text() {
    return esc_html__( 'Add to Bag', 'astra-clothing-child' );
}
add_filter( 'woocommerce_product_add_to_cart_text', 'astra_clothing_add_to_cart_text' );
add_filter( 'woocommerce_product_single_add_to_cart_text', 'astra_clothing_add_to_cart_text' );

/**
 * Add product size guide link
 */
function astra_clothing_product_size_guide() {
    echo '<div class="product-size-guide">';
    echo '<a href="' . esc_url( home_url( '/size-guide/' ) ) . '" class="button secondary">';
    echo esc_html__( 'View Size Guide', 'astra-clothing-child' );
    echo '</a>';
    echo '</div>';
}
add_action( 'woocommerce_single_product_summary', 'astra_clothing_product_size_guide', 25 );

/**
 * Customize product metadata
 */
function astra_clothing_single_product_meta() {
    global $product;
    
    echo '<div class="product-meta">';
    
    // SKU
    if ( $product->get_sku() ) {
        echo '<p class="product-sku">';
        echo '<strong>' . esc_html__( 'SKU:', 'astra-clothing-child' ) . '</strong> ';
        echo esc_html( $product->get_sku() );
        echo '</p>';
    }
    
    // Categories
    echo '<p class="product-categories">';
    echo '<strong>' . esc_html__( 'Category:', 'astra-clothing-child' ) . '</strong> ';
    echo wc_get_product_category_list( $product->get_id() );
    echo '</p>';
    
    echo '</div>';
}
add_action( 'woocommerce_single_product_summary', 'astra_clothing_single_product_meta', 20 );

/**
 * Display related products
 */
function astra_clothing_related_products() {
    woocommerce_related_products( array(
        'posts_per_page' => 4,
        'columns'        => 4,
    ) );
}

/**
 * Add shipping method description
 */
function astra_clothing_shipping_description() {
    echo '<div class="shipping-info">';
    echo '<p>' . esc_html__( 'Free shipping on orders over $100. Standard shipping takes 5-7 business days.', 'astra-clothing-child' ) . '</p>';
    echo '</div>';
}
add_action( 'woocommerce_after_shipping_rate', 'astra_clothing_shipping_description' );

/**
 * Customize checkout fields
 */
function astra_clothing_override_checkout_fields( $fields ) {
    // Add custom field for delivery notes
    $fields['billing']['billing_delivery_notes'] = array(
        'type'        => 'textarea',
        'class'       => array( 'form-row-wide' ),
        'label'       => esc_html__( 'Delivery Instructions', 'astra-clothing-child' ),
        'placeholder' => esc_html__( 'Leave special delivery instructions (e.g., ring doorbell)', 'astra-clothing-child' ),
        'required'    => false,
    );
    
    return $fields;
}
add_filter( 'woocommerce_checkout_fields', 'astra_clothing_override_checkout_fields' );

/**
 * Save custom checkout field
 */
function astra_clothing_save_extra_checkout_fields( $order, $posted ) {
    if ( isset( $_POST['post_data'] ) ) {
        parse_str( $_POST['post_data'], $post_data );
    } else {
        $post_data = $_POST;
    }
    
    if ( isset( $post_data['billing_delivery_notes'] ) ) {
        $order->update_meta_data( 'delivery_instructions', sanitize_textarea_field( $post_data['billing_delivery_notes'] ) );
    }
}
add_action( 'woocommerce_checkout_create_order', 'astra_clothing_save_extra_checkout_fields', 10, 2 );

/**
 * Add product tabs
 */
function astra_clothing_product_tabs( $tabs ) {
    // Add size guide tab
    $tabs['size_guide'] = array(
        'title'    => esc_html__( 'Size Guide', 'astra-clothing-child' ),
        'priority' => 50,
        'callback' => 'astra_clothing_size_guide_tab_content',
    );
    
    // Add care instructions tab
    $tabs['care'] = array(
        'title'    => esc_html__( 'Care Instructions', 'astra-clothing-child' ),
        'priority' => 60,
        'callback' => 'astra_clothing_care_tab_content',
    );
    
    return $tabs;
}
add_filter( 'woocommerce_product_tabs', 'astra_clothing_product_tabs' );

/**
 * Size guide tab content
 */
function astra_clothing_size_guide_tab_content() {
    echo '<h2>' . esc_html__( 'Size Guide', 'astra-clothing-child' ) . '</h2>';
    echo '<p>' . esc_html__( 'Please refer to our size guide to ensure the perfect fit. All measurements are in inches.', 'astra-clothing-child' ) . '</p>';
    echo '<table class="size-guide-table"><tr><th>Size</th><th>Chest</th><th>Length</th></tr>';
    echo '<tr><td>XS</td><td>32-34</td><td>28</td></tr>';
    echo '<tr><td>S</td><td>34-36</td><td>29</td></tr>';
    echo '<tr><td>M</td><td>38-40</td><td>30</td></tr>';
    echo '<tr><td>L</td><td>42-44</td><td>31</td></tr>';
    echo '<tr><td>XL</td><td>46-48</td><td>32</td></tr>';
    echo '</table>';
}

/**
 * Care instructions tab content
 */
function astra_clothing_care_tab_content() {
    echo '<h2>' . esc_html__( 'Care Instructions', 'astra-clothing-child' ) . '</h2>';
    echo '<ul>';
    echo '<li>' . esc_html__( 'Machine wash cold with like colors', 'astra-clothing-child' ) . '</li>';
    echo '<li>' . esc_html__( 'Use mild detergent', 'astra-clothing-child' ) . '</li>';
    echo '<li>' . esc_html__( 'Remove promptly from washer', 'astra-clothing-child' ) . '</li>';
    echo '<li>' . esc_html__( 'Tumble dry low or hang dry', 'astra-clothing-child' ) . '</li>';
    echo '<li>' . esc_html__( 'Warm iron if needed', 'astra-clothing-child' ) . '</li>';
    echo '</ul>';
}

/**
 * Add to cart redirect to checkout
 */
function astra_clothing_add_to_cart_redirect() {
    // Uncomment to redirect to checkout after adding to cart
    // return wc_get_checkout_url();
}
// add_filter( 'woocommerce_add_to_cart_redirect', 'astra_clothing_add_to_cart_redirect' );

/**
 * Customize email notifications
 */
function astra_clothing_customer_email_footer_text( $footer_text ) {
    return $footer_text . '<p style="margin-top: 20px; font-size: 12px; color: #999;">' . 
           esc_html__( 'Thank you for your order! For any questions, contact us at support@yourstore.com', 'astra-clothing-child' ) . 
           '</p>';
}
add_filter( 'woocommerce_email_footer_text', 'astra_clothing_customer_email_footer_text' );

/**
 * Add custom widget areas
 */
function astra_clothing_widgets_init() {
    register_sidebar( array(
        'name'          => esc_html__( 'Primary Sidebar', 'astra-clothing-child' ),
        'id'            => 'primary-sidebar',
        'description'   => esc_html__( 'Main sidebar for blog and pages', 'astra-clothing-child' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
    
    register_sidebar( array(
        'name'          => esc_html__( 'Shop Sidebar', 'astra-clothing-child' ),
        'id'            => 'shop-sidebar',
        'description'   => esc_html__( 'Sidebar for shop pages', 'astra-clothing-child' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
    
    register_sidebar( array(
        'name'          => esc_html__( 'Footer Widget Area', 'astra-clothing-child' ),
        'id'            => 'footer-widgets',
        'description'   => esc_html__( 'Widgets in footer', 'astra-clothing-child' ),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ) );
}
add_action( 'widgets_init', 'astra_clothing_widgets_init' );

/**
 * Disable default WooCommerce styles if using custom CSS
 */
function astra_clothing_disable_default_woo_styles() {
    // Uncomment if you want to load only custom WooCommerce styles
    // add_filter( 'woocommerce_enqueue_styles', '__return_empty_array' );
}

/**
 * Custom product loop item template
 */
function astra_clothing_product_loop_item() {
    global $product;
    
    if ( ! $product ) {
        return;
    }
    
    // This is an example hook point for customization
    do_action( 'astra_clothing_before_product_loop_item' );
}

/**
 * Sanitize phone number
 */
function astra_clothing_sanitize_phone( $phone ) {
    return preg_replace( '/[^0-9+\-\s().]/', '', $phone );
}

/**
 * Get store contact information
 */
function astra_clothing_get_contact_info() {
    return array(
        'email'   => get_option( 'admin_email' ),
        'phone'   => get_option( 'bloginfo', '(555) 123-4567' ),
        'address' => get_option( 'bloginfo', '123 Fashion Street, City, ST 12345' ),
    );
}

/**
 * Add review verification
 */
function astra_clothing_verify_customer_comment() {
    // Verify customer purchased product before leaving review
    if ( ! current_user_can( 'edit_posts' ) && is_singular( 'product' ) ) {
        global $product;
        
        if ( ! wc_customer_bought_product( '', get_current_user_id(), $product->get_id() ) ) {
            return false;
        }
    }
}

/**
 * Customizer sanitization callbacks
 */
function astra_clothing_sanitize_hex_color( $color ) {
    return ( '#' === $color[0] ) ? sanitize_hex_color( $color ) : sanitize_hex_color_no_hash( $color );
}

function astra_clothing_sanitize_text( $text ) {
    return sanitize_text_field( $text );
}

function astra_clothing_sanitize_select( $input, $setting ) {
    $input = sanitize_key( $input );
    $choices = $setting->manager->get_control( $setting->id )->choices;
    return ( array_key_exists( $input, $choices ) ? $input : $setting->default );
}

/**
 * Enqueue block editor styles
 */
function astra_clothing_enqueue_block_editor_styles() {
    wp_enqueue_style(
        'astra-clothing-block-editor',
        get_stylesheet_directory_uri() . '/assets/css/block-editor.css',
        array( 'wp-edit-blocks' ),
        '1.0.0'
    );
}
add_action( 'enqueue_block_editor_assets', 'astra_clothing_enqueue_block_editor_styles' );

/**
 * Custom hooks for developers
 */

/**
 * Hook: astra_clothing_before_product_loop_item
 * Called before each product in the loop
 */
do_action( 'astra_clothing_before_product_loop_item' );

/**
 * Hook: astra_clothing_after_product_loop_item
 * Called after each product in the loop
 */
do_action( 'astra_clothing_after_product_loop_item' );

/**
 * Hook: astra_clothing_before_product_summary
 * Called before product summary on single product page
 */
do_action( 'astra_clothing_before_product_summary' );

/**
 * Hook: astra_clothing_after_product_summary
 * Called after product summary on single product page
 */
do_action( 'astra_clothing_after_product_summary' );

/**
 * Text domain for translation
 */
load_child_theme_textdomain( 'astra-clothing-child', get_stylesheet_directory() . '/languages' );

?>