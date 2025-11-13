
import json

# Create Astra Customizer Settings export template
astra_settings = {
    "astra-settings": {
        "header-builder-type": "elementor",
        "footer-builder-type": "elementor",
        "site-logo-width": 120,
        "site-title-color": "#34495e",
        "site-tagline-color": "#bdc3c7",
        "site-tagline-font-size": 13,
        "header-main-colors": {
            "background-color": "#ffffff"
        },
        "menu-item-color": "#2c3e50",
        "menu-item-hover-color": "#e74c3c",
        "menu-item-active-color": "#e74c3c",
        "woocommerce-product-grid-columns": 4,
        "woocommerce-product-grid-gap": 20,
        "woocommerce-product-grid-hover-effect": "lift",
        "product-title-color": "#2c3e50",
        "product-title-font-size": 16,
        "product-price-color": "#e74c3c",
        "product-price-font-size": 18,
        "shop-notice-background": "#f39c12",
        "shop-notice-color": "#ffffff",
        "button-color": "#e74c3c",
        "button-hover-color": "#c0150f",
        "button-text-color": "#ffffff",
        "button-border-radius": 5,
        "button-padding": "12px 28px",
        "checkout-button-color": "#27ae60",
        "checkout-button-hover-color": "#1e8449",
        "checkout-step-background": "#f8f9fa",
        "checkout-step-color": "#2c3e50",
        "checkout-step-active-background": "#e74c3c",
        "checkout-step-active-color": "#ffffff",
        "footer-builder-type": "elementor",
        "footer-background-color": "#34495e",
        "footer-text-color": "#ecf0f1",
        "footer-link-color": "#e74c3c",
        "footer-widget-title-color": "#ffffff",
        "body-font-family": "'Poppins', sans-serif",
        "heading-font-family": "'Playfair Display', serif",
        "body-text-color": "#2c3e50",
        "body-text-size": 14,
        "body-line-height": 1.6,
        "border-radius": 8,
        "primary-color": "#e74c3c",
        "secondary-color": "#34495e",
        "accent-color": "#f39c12",
        "success-color": "#27ae60",
        "danger-color": "#e74c3c",
        "warning-color": "#f39c12",
        "info-color": "#3498db"
    },
    "woocommerce_modules": {
        "general": {
            "container_layout": "default",
            "sidebar_layout": "right",
            "single_product_layout": "default"
        },
        "colors": {
            "button_color": "#e74c3c",
            "button_text_color": "#ffffff",
            "product_title_color": "#2c3e50",
            "product_price_color": "#e74c3c"
        }
    }
}

# Create WooCommerce Settings
woocommerce_settings = {
    "general": {
        "store_name": "Your Clothing Store",
        "store_address": "123 Fashion Street",
        "store_city": "New York",
        "store_postcode": "10001",
        "store_country": "US:NY",
        "store_currency": "USD",
        "enable_tax": True,
        "prices_include_tax": False,
        "tax_calc_method": "shipping",
        "enable_coupons": True
    },
    "products": {
        "weight_unit": "lbs",
        "dimension_unit": "in",
        "shop_page_display": "subcategories",
        "default_product_sorting": "menu_order",
        "catalog_columns": 4,
        "catalog_rows": 12,
        "default_image_size": [500, 500],
        "thumbnail_image_size": [250, 250],
        "single_image_size": [1000, 1000],
        "enable_reviews": True,
        "show_verified_owner": True,
        "reviews_require_login": False
    },
    "inventory": {
        "manage_stock": True,
        "hold_stock_minutes": 60,
        "notify_low_stock": True,
        "notify_out_stock": True,
        "hide_out_of_stock": False,
        "stock_status_threshold": 2
    },
    "checkout": {
        "enable_guest_checkout": True,
        "require_login": False,
        "force_secure_checkout": True,
        "checkout_coupons": True,
        "checkout_login_reminder": True,
        "terms_page_id": 0,
        "privacy_page_id": 0
    },
    "shipping": {
        "enable_shipping": True,
        "shipping_method": "multiple",
        "free_shipping_minimum": 100,
        "free_shipping_requires_coupon": False,
        "local_pickup_available": False,
        "international_shipping": False
    },
    "payment_gateways": {
        "stripe_enabled": True,
        "paypal_enabled": True,
        "bank_transfer_enabled": False,
        "cod_enabled": False
    },
    "emails": {
        "enable_email_notifications": True,
        "from_name": "Your Clothing Store",
        "from_email": "noreply@yourstore.com",
        "notification_recipients": ["admin@yourstore.com"],
        "enable_order_email": True,
        "enable_customer_email": True,
        "enable_invoice_email": False
    },
    "analytics": {
        "enable_google_analytics": True,
        "google_analytics_id": "UA-XXXXXXXXX-X",
        "enable_facebook_pixel": True,
        "facebook_pixel_id": "000000000000000"
    }
}

# Write Astra settings to file
with open('astra-settings.json', 'w') as f:
    json.dump(astra_settings, f, indent=2)

# Write WooCommerce settings to file
with open('woocommerce-settings.json', 'w') as f:
    json.dump(woocommerce_settings, f, indent=2)

print("✓ Astra customizer settings exported to: astra-settings.json")
print("✓ WooCommerce settings template created: woocommerce-settings.json")
print("\nJSON Configuration Files Created Successfully!")
print("\nThese files should be placed in the 'config/' directory of your GitHub repository.")
