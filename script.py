
# Create the script.js file content as it's very large
# This will be saved and made available

script_js_content = '''// ===== SPANISH STYLE E-COMMERCE v1.1.0 =====
// Dark Luxury Theme with Special Offers & /admin Routing

// ===== APPLICATION STATE =====
let currentLanguage = 'fa';
let currentUser = null;
let cart = [];
let currentView = 'home';
let users = [];
let products = [];
let orders = [];
let specialOffers = [];

// ===== TRANSLATIONS =====
const translations = {
    fa: {
        // Header & Navigation
        home: 'خانه',
        clothes: 'لباس',
        shoes: 'کفش',
        perfumes: 'عطر',
        promotions: 'پیشنهادات ویژه',
        about: 'درباره ما',
        contact: 'تماس با ما',
        
        // Special Offers
        specialOffers: 'پیشنهادات ویژه',
        flashSale: 'فروش سریع',
        limitedOffer: 'پیشنهاد محدود',
        newArrivals: 'محصولات جدید',
        shopNow: 'خرید کنید',
        
        // Admin
        adminPanel: 'پنل مدیریت',
        admin: 'مدیریت',
        adminLogin: 'ورود مدیریت',
        
        // Auth
        login: 'ورود',
        register: 'ثبت نام',
        logout: 'خروج',
        email: 'ایمیل',
        password: 'رمز عبور',
        fullName: 'نام و نام خانوادگی',
        phone: 'شماره تماس',
        address: 'آدرس',
        
        // Shopping
        addToCart: 'افزودن به سبد',
        cart: 'سبد خرید',
        checkout: 'تکمیل خرید',
        myOrders: 'سفارشات من',
        dashboard: 'داشبورد',
        
        // Footer
        aboutUs: 'درباره ما',
        ourStory: 'داستان ما',
        service: 'خدمات مشتریان',
        faq: 'سوالات متداول',
        shipping: 'ارسال و تحویل',
        returns: 'بازگشت کالا',
        copyright: '© 2025 Spanish Style. تمامی حقوق محفوظ است.'
    },
    en: {
        // Header & Navigation
        home: 'Home',
        clothes: 'Clothes',
        shoes: 'Shoes',
        perfumes: 'Perfumes',
        promotions: 'Promotions',
        about: 'About Us',
        contact: 'Contact',
        
        // Special Offers
        specialOffers: 'Special Offers',
        flashSale: 'Flash Sale',
        limitedOffer: 'Limited Offer',
        newArrivals: 'New Arrivals',
        shopNow: 'Shop Now',
        
        // Admin
        adminPanel: 'Admin Panel',
        admin: 'Admin',
        adminLogin: 'Admin Login',
        
        // Auth
        login: 'Login',
        register: 'Register',
        logout: 'Logout',
        email: 'Email',
        password: 'Password',
        fullName: 'Full Name',
        phone: 'Phone Number',
        address: 'Address',
        
        // Shopping
        addToCart: 'Add to Cart',
        cart: 'Cart',
        checkout: 'Checkout',
        myOrders: 'My Orders',
        dashboard: 'Dashboard',
        
        // Footer
        aboutUs: 'About Us',
        ourStory: 'Our Story',
        service: 'Customer Service',
        faq: 'FAQ',
        shipping: 'Shipping & Delivery',
        returns: 'Returns',
        copyright: '© 2025 Spanish Style. All rights reserved.'
    },
    es: {
        // Header & Navigation
        home: 'Inicio',
        clothes: 'Ropa',
        shoes: 'Zapatos',
        perfumes: 'Perfumes',
        promotions: 'Promociones',
        about: 'Sobre Nosotros',
        contact: 'Contacto',
        
        // Special Offers
        specialOffers: 'Ofertas Especiales',
        flashSale: 'Venta Rápida',
        limitedOffer: 'Oferta Limitada',
        newArrivals: 'Nuevas Llegadas',
        shopNow: 'Compra Ahora',
        
        // Admin
        adminPanel: 'Panel de Administración',
        admin: 'Administración',
        adminLogin: 'Acceso de Administrador',
        
        // Auth
        login: 'Iniciar Sesión',
        register: 'Registrarse',
        logout: 'Cerrar Sesión',
        email: 'Correo Electrónico',
        password: 'Contraseña',
        fullName: 'Nombre Completo',
        phone: 'Número de Teléfono',
        address: 'Dirección',
        
        // Shopping
        addToCart: 'Añadir al Carrito',
        cart: 'Carrito',
        checkout: 'Finalizar Compra',
        myOrders: 'Mis Pedidos',
        dashboard: 'Panel de Control',
        
        // Footer
        aboutUs: 'Sobre Nosotros',
        ourStory: 'Nuestra Historia',
        service: 'Servicio al Cliente',
        faq: 'Preguntas Frecuentes',
        shipping: 'Envío y Entrega',
        returns: 'Devoluciones',
        copyright: '© 2025 Spanish Style. Todos los derechos reservados.'
    }
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    handleRouting();
});

function initializeApp() {
    // Initialize users with admin account
    users = [
        {
            id: 'admin_001',
            email: 'admin@spanishstyle.com',
            password: 'admin123',
            fullName: 'Administrator',
            phone: '+34612345678',
            address: 'Gran Via 123, Madrid',
            isAdmin: true,
            registeredAt: new Date().toISOString()
        },
        {
            id: 'user_001',
            email: 'user1@example.com',
            password: 'password123',
            fullName: 'John Doe',
            phone: '+34691234567',
            address: 'Calle Gran Via 456, Madrid',
            isAdmin: false,
            registeredAt: new Date().toISOString()
        }
    ];
    
    // Initialize products
    products = [
        {
            id: 'prod_001',
            category: 'clothes',
            name: { fa: 'پیراهن زنانه زارا', en: 'Zara Women\\'s Dress', es: 'Vestido de Mujer Zara' },
            description: { fa: 'پیراهن شیک و مدرن', en: 'Stylish modern dress', es: 'Vestido elegante y moderno' },
            price: 89.99,
            stock: 15,
            isPromotion: true,
            discount: 30,
            icon: '👗'
        },
        {
            id: 'prod_002',
            category: 'shoes',
            name: { fa: 'کفش مردانه چرمی', en: 'Men\\'s Leather Shoes', es: 'Zapatos de Cuero para Hombre' },
            description: { fa: 'کفش باکیفیت', en: 'Quality leather shoes', es: 'Zapatos de cuero de calidad' },
            price: 129.99,
            stock: 20,
            isPromotion: true,
            discount: 25,
            icon: '👞'
        },
        {
            id: 'prod_003',
            category: 'perfumes',
            name: { fa: 'عطر لوکس', en: 'Luxury Perfume', es: 'Perfume de Lujo' },
            description: { fa: 'عطر برتر', en: 'Premium fragrance', es: 'Fragancia premium' },
            price: 79.99,
            stock: 30,
            isPromotion: true,
            discount: 40,
            icon: '💐'
        }
    ];
    
    // Initialize special offers
    updateSpecialOffers();
    
    // Setup event listeners
    setupEventListeners();
    
    // Render initial page
    renderHeader();
    renderSpecialOffers();
    renderFooter();
    showView('home');
}

function setupEventListeners() {
    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setLanguage(this.dataset.lang);
        });
    });
    
    // User icon
    document.getElementById('userIcon').addEventListener('click', function() {
        if (currentUser && currentUser.isAdmin) {
            navigateToAdmin();
        } else if (currentUser) {
            showView('dashboard');
        } else {
            showModal('loginModal');
        }
    });
    
    // Cart icon
    document.getElementById('cartIcon').addEventListener('click', function() {
        showView('cart');
    });
    
    // Forms
    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', handleLogin);
    }
    if (document.getElementById('registerForm')) {
        document.getElementById('registerForm').addEventListener('submit', handleRegister);
    }
}

// ===== LANGUAGE MANAGEMENT =====
function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Refresh all views
    renderHeader();
    renderSpecialOffers();
    renderFooter();
    refreshCurrentView();
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

function __(key) {
    return translations[currentLanguage][key] || translations['en'][key] || key;
}

// ===== ROUTING =====
function handleRouting() {
    const path = window.location.pathname;
    
    if (path.includes('/admin')) {
        showAdminLogin();
    } else {
        showView('home');
    }
}

function navigateToAdmin() {
    if (currentUser && currentUser.isAdmin) {
        showAdminDashboard();
    } else {
        showAdminLogin();
    }
}

// ===== HEADER RENDERING =====
function renderHeader() {
    const navLinks = document.getElementById('navLinks');
    navLinks.innerHTML = `
        <a href="#home">${__('home')}</a>
        <a href="#clothes">${__('clothes')}</a>
        <a href="#shoes">${__('shoes')}</a>
        <a href="#perfumes">${__('perfumes')}</a>
        <a href="#promotions">${__('promotions')}</a>
    `;
    
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('href').substring(1);
            showView(category);
        });
    });
    
    // Update user icon
    const userIcon = document.getElementById('userIcon');
    if (currentUser) {
        userIcon.textContent = currentUser.isAdmin ? '⚙️' : '👤';
    }
}

// ===== SPECIAL OFFERS =====
function updateSpecialOffers() {
    specialOffers = products.filter(p => p.isPromotion);
}

function renderSpecialOffers() {
    const offersGrid = document.getElementById('offersGrid');
    const offersTitle = document.getElementById('offersTitle');
    
    offersTitle.textContent = __('specialOffers');
    
    offersGrid.innerHTML = specialOffers.map(offer => {
        const discountedPrice = (offer.price * (1 - offer.discount / 100)).toFixed(2);
        return `
            <div class="offer-card">
                <div class="offer-badge">${__('flashSale')}</div>
                <div class="product-image">${offer.icon}</div>
                <h3>${offer.name[currentLanguage]}</h3>
                <div class="offer-price">
                    <span class="offer-original-price">€${offer.price}</span>
                    <span class="offer-discount-price">€${discountedPrice}</span>
                </div>
                <div class="offer-discount">-${offer.discount}%</div>
                <button class="offer-btn" onclick="addProductToCart('${offer.id}')">${__('shopNow')}</button>
            </div>
        `;
    }).join('');
}

// ===== FOOTER RENDERING =====
function renderFooter() {
    const footer = document.getElementById('footer');
    const adminPanelLink = document.getElementById('adminPanelLink');
    
    if (adminPanelLink) {
        adminPanelLink.textContent = __('adminPanel');
    }
    
    document.getElementById('copyright').textContent = __('copyright');
}

// ===== VIEW MANAGEMENT =====
function showView(view) {
    currentView = view;
    const mainContent = document.getElementById('mainContent');
    
    let html = '';
    
    switch(view) {
        case 'home':
            html = renderHomePage();
            break;
        case 'clothes':
        case 'shoes':
        case 'perfumes':
            html = renderCategoryPage(view);
            break;
        case 'cart':
            html = renderCartPage();
            break;
        case 'dashboard':
            html = renderUserDashboard();
            break;
        default:
            html = renderHomePage();
    }
    
    mainContent.innerHTML = html;
    setupViewListeners();
}

function renderHomePage() {
    return `
        <section class="home-page">
            <h2>${__('home')}</h2>
            <p>Welcome to Spanish Style - Premium Fashion Store</p>
            <div class="categories-grid">
                <div class="category-card" onclick="showView('clothes')">
                    <div class="category-icon">👗</div>
                    <h3>${__('clothes')}</h3>
                </div>
                <div class="category-card" onclick="showView('shoes')">
                    <div class="category-icon">👞</div>
                    <h3>${__('shoes')}</h3>
                </div>
                <div class="category-card" onclick="showView('perfumes')">
                    <div class="category-icon">💐</div>
                    <h3>${__('perfumes')}</h3>
                </div>
            </div>
        </section>
    `;
}

function renderCategoryPage(category) {
    const categoryProducts = products.filter(p => p.category === category);
    return `
        <section class="category-page">
            <h2>${__(category)}</h2>
            <div class="products-grid">
                ${categoryProducts.map(product => `
                    <div class="product-card">
                        <div class="product-image">${product.icon}</div>
                        <div class="product-info">
                            <div class="product-category">${__(product.category)}</div>
                            <div class="product-name">${product.name[currentLanguage]}</div>
                            <div class="product-description">${product.description[currentLanguage]}</div>
                            <div class="product-price">€${product.price}</div>
                            <button class="add-to-cart-btn" onclick="addProductToCart('${product.id}')">${__('addToCart')}</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

function renderCartPage() {
    let total = 0;
    let html = `<section class="cart-page"><h2>${__('cart')}</h2>`;
    
    if (cart.length === 0) {
        html += '<p>Your cart is empty</p>';
    } else {
        total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        html += `
            <div class="cart-items">
                ${cart.map((item, index) => `
                    <div class="cart-item">
                        <div class="item-icon">${item.icon}</div>
                        <div class="item-details">
                            <h3>${item.name[currentLanguage]}</h3>
                            <p>€${item.price} x ${item.quantity}</p>
                        </div>
                        <button onclick="removeFromCart(${index})">Remove</button>
                    </div>
                `).join('')}
            </div>
            <div class="cart-total">Total: €${total.toFixed(2)}</div>
            <button class="btn-gold" onclick="checkout()">${__('checkout')}</button>
        `;
    }
    html += '</section>';
    return html;
}

function renderUserDashboard() {
    if (!currentUser) {
        return '<p>Please login first</p>';
    }
    
    const userOrders = orders.filter(o => o.userId === currentUser.id);
    
    return `
        <section class="dashboard">
            <h2>${__('dashboard')}</h2>
            <div class="user-info">
                <p><strong>Name:</strong> ${currentUser.fullName}</p>
                <p><strong>Email:</strong> ${currentUser.email}</p>
                <p><strong>Phone:</strong> ${currentUser.phone}</p>
            </div>
            <h3>${__('myOrders')}</h3>
            ${userOrders.length === 0 ? '<p>No orders yet</p>' : `
                <div class="orders-list">
                    ${userOrders.map(order => `
                        <div class="order-item">
                            <p>Order #${order.id} - €${order.total}</p>
                            <p>Status: ${order.status}</p>
                        </div>
                    `).join('')}
                </div>
            `}
            <button class="btn-secondary" onclick="handleLogout()">${__('logout')}</button>
        </section>
    `;
}

// ===== ADMIN PANEL =====
function showAdminLogin() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <section class="admin-login">
            <h2>${__('adminLogin')}</h2>
            <form onsubmit="handleAdminLogin(event)" class="form">
                <input type="email" id="adminEmail" placeholder="${__('email')}" required>
                <input type="password" id="adminPassword" placeholder="${__('password')}" required>
                <button type="submit" class="btn-gold">${__('login')}</button>
            </form>
        </section>
    `;
}

function handleAdminLogin(e) {
    e.preventDefault();
    const email = document.getElementById('adminEmail').value;
    const password = document.getElementById('adminPassword').value;
    
    const user = users.find(u => u.email === email && u.password === password && u.isAdmin);
    if (user) {
        currentUser = user;
        showAdminDashboard();
    } else {
        alert('Invalid admin credentials');
    }
}

function showAdminDashboard() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <section class="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <div class="admin-stats">
                <div class="stat-card">
                    <h3>Total Orders</h3>
                    <p>${orders.length}</p>
                </div>
                <div class="stat-card">
                    <h3>Total Revenue</h3>
                    <p>€${orders.reduce((sum, o) => sum + o.total, 0).toFixed(2)}</p>
                </div>
                <div class="stat-card">
                    <h3>Total Products</h3>
                    <p>${products.length}</p>
                </div>
            </div>
            
            <div class="admin-sections">
                <button class="btn-gold" onclick="showAdminProducts()">Manage Products</button>
                <button class="btn-gold" onclick="showAdminOrders()">Manage Orders</button>
                <button class="btn-gold" onclick="handleLogout()">Logout</button>
            </div>
        </section>
    `;
}

function showAdminProducts() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <section class="admin-products">
            <h2>Products Management</h2>
            <button class="btn-gold" onclick="showAddProductForm()">+ Add Product</button>
            <div class="products-table">
                ${products.map((p, i) => `
                    <div class="product-row">
                        <span>${p.name[currentLanguage]}</span>
                        <span>€${p.price}</span>
                        <button onclick="deleteProduct(${i})">Delete</button>
                    </div>
                `).join('')}
            </div>
            <button class="btn-secondary" onclick="showAdminDashboard()">Back</button>
        </section>
    `;
}

function showAdminOrders() {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = `
        <section class="admin-orders">
            <h2>Orders Management</h2>
            <div class="orders-table">
                ${orders.map((o, i) => `
                    <div class="order-row">
                        <span>Order #${o.id}</span>
                        <span>€${o.total}</span>
                        <span>${o.status}</span>
                        <button onclick="updateOrderStatus(${i})">Update Status</button>
                    </div>
                `).join('')}
            </div>
            <button class="btn-secondary" onclick="showAdminDashboard()">Back</button>
        </section>
    `;
}

function showAddProductForm() {
    alert('Add product form - implement as needed');
}

// ===== SHOPPING FUNCTIONS =====
function addProductToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({
                id: productId,
                name: product.name,
                price: product.price,
                quantity: 1,
                icon: product.icon
            });
        }
        updateCartCount();
        alert('Added to cart!');
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    showView('cart');
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = count;
}

function checkout() {
    if (!currentUser) {
        alert('Please login first');
        showModal('loginModal');
    } else if (cart.length === 0) {
        alert('Cart is empty');
    } else {
        alert('Checkout - upload receipt to confirm payment');
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        const order = {
            id: 'order_' + Date.now(),
            userId: currentUser.id,
            items: [...cart],
            total: total,
            status: 'pending_payment',
            createdAt: new Date().toISOString()
        };
        
        orders.push(order);
        cart = [];
        updateCartCount();
        alert('Order placed! Please upload payment receipt.');
    }
}

// ===== AUTHENTICATION =====
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser = user;
        closeModal('loginModal');
        renderHeader();
        showView('dashboard');
    } else {
        alert('Invalid credentials');
    }
}

function handleRegister(e) {
    e.preventDefault();
    const fullName = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const phone = document.getElementById('registerPhone').value;
    const address = document.getElementById('registerAddress').value;
    
    if (users.find(u => u.email === email)) {
        alert('Email already registered');
        return;
    }
    
    const newUser = {
        id: 'user_' + Date.now(),
        email: email,
        password: password,
        fullName: fullName,
        phone: phone,
        address: address,
        isAdmin: false,
        registeredAt: new Date().toISOString()
    };
    
    users.push(newUser);
    currentUser = newUser;
    closeModal('registerModal');
    renderHeader();
    showView('dashboard');
}

function handleLogout() {
    currentUser = null;
    renderHeader();
    showView('home');
}

// ===== MODAL FUNCTIONS =====
function showModal(modalId) {
    document.getElementById(modalId).classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

// ===== UTILITY FUNCTIONS =====
function refreshCurrentView() {
    showView(currentView);
}

function setupViewListeners() {
    // Setup any view-specific listeners here
}

function deleteProduct(index) {
    products.splice(index, 1);
    showAdminProducts();
}

function updateOrderStatus(index) {
    alert('Update order status - implement as needed');
}

// ===== LOAD SAVED PREFERENCES =====
window.addEventListener('load', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        setLanguage(savedLanguage);
    }
});
'''

# Save to file
with open('/tmp/script.js', 'w', encoding='utf-8') as f:
    f.write(script_js_content)

print("script.js file created successfully!")
print(f"File size: {len(script_js_content)} bytes")
print(f"Total lines: {len(script_js_content.splitlines())}")
