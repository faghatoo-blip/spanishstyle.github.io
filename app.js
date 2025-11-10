// ===== DATA STRUCTURES =====

// Translation data
const translations = {
  fa: {
    home: 'خانه',
    clothes: 'لباس',
    shoes: 'کفش',
    perfumes: 'عطر',
    promotions: 'پیشنهادات ویژه',
    login: 'ورود',
    register: 'ثبت‌نام',
    logout: 'خروج',
    cart: 'سبد خرید',
    checkout: 'تکمیل خرید',
    myOrders: 'سفارش‌های من',
    profile: 'پروفایل',
    welcome: 'به فروشگاه اسپانیش استایل خوش آمدید',
    subtitle: 'بهترین برندهای اسپانیایی را تجربه کنید',
    shopNow: 'خرید کنید',
    categories: 'دسته‌بندی‌ها',
    featuredProducts: 'محصولات ویژه',
    addToCart: 'افزودن به سبد',
    viewDetails: 'مشاهده جزئیات',
    price: 'قیمت',
    quantity: 'تعداد',
    total: 'مجموع',
    proceedToCheckout: 'ادامه خرید',
    continueShopping: 'ادامه خرید',
    emptyCart: 'سبد خرید شما خالی است',
    email: 'ایمیل',
    password: 'رمز عبور',
    fullName: 'نام و نام خانوادگی',
    phone: 'شماره تلفن',
    address: 'آدرس',
    loginToCheckout: 'لطفا برای خرید وارد شوید یا ثبت‌نام کنید',
    shippingAddress: 'آدرس ارسال',
    paymentReceipt: 'رسید پرداخت',
    uploadReceipt: 'بارگذاری رسید',
    transactionId: 'شناسه تراکنش',
    paymentDate: 'تاریخ پرداخت',
    amountPaid: 'مبلغ پرداختی',
    submitOrder: 'ثبت سفارش',
    orderNumber: 'شماره سفارش',
    orderDate: 'تاریخ سفارش',
    orderStatus: 'وضعیت سفارش',
    orderTotal: 'مجموع سفارش',
    noOrders: 'شما هنوز سفارشی ندارید',
    adminPanel: 'پنل مدیریت',
    dashboard: 'داشبورد',
    products: 'محصولات',
    orders: 'سفارشات',
    customers: 'مشتریان',
    receipts: 'رسیدهای پرداخت',
    statistics: 'آمار',
    totalOrders: 'کل سفارشات',
    pendingOrders: 'سفارشات در انتظار',
    totalRevenue: 'کل درآمد',
    totalProducts: 'کل محصولات',
    totalCustomers: 'کل مشتریان',
    addProduct: 'افزودن محصول',
    editProduct: 'ویرایش محصول',
    deleteProduct: 'حذف محصول',
    productName: 'نام محصول',
    description: 'توضیحات',
    category: 'دسته‌بندی',
    stock: 'موجودی',
    isPromotion: 'تخفیف دارد',
    discount: 'درصد تخفیف',
    save: 'ذخیره',
    cancel: 'لغو',
    delete: 'حذف',
    edit: 'ویرایش',
    view: 'مشاهده',
    approve: 'تایید',
    reject: 'رد',
    actions: 'عملیات',
    search: 'جستجو',
    filter: 'فیلتر',
    sort: 'مرتب‌سازی',
    all: 'همه',
    mensWear: 'پوشاک مردانه',
    womensWear: 'پوشاک زنانه',
    kidsWear: 'پوشاک بچه‌گانه',
    mensShoes: 'کفش مردانه',
    womensShoes: 'کفش زنانه',
    kidsShoes: 'کفش بچه‌گانه',
    mensPerfumes: 'عطر مردانه',
    womensPerfumes: 'عطر زنانه',
    unisexPerfumes: 'عطر یونیسکس',
    pending_payment: 'در انتظار پرداخت',
    payment_received: 'پرداخت دریافت شده',
    processing: 'در حال پردازش',
    shipped: 'ارسال شده',
    delivered: 'تحویل داده شده',
    cancelled: 'لغو شده',
    priceLowToHigh: 'قیمت: کم به زیاد',
    priceHighToLow: 'قیمت: زیاد به کم',
    haveAccount: 'حساب کاربری دارید?',
    noAccount: 'حساب کاربری ندارید?',
    clickLogin: 'وارد شوید',
    clickRegister: 'ثبت‌نام کنید'
  },
  en: {
    home: 'Home',
    clothes: 'Clothes',
    shoes: 'Shoes',
    perfumes: 'Perfumes',
    promotions: 'Promotions',
    login: 'Login',
    register: 'Register',
    logout: 'Logout',
    cart: 'Cart',
    checkout: 'Checkout',
    myOrders: 'My Orders',
    profile: 'Profile',
    welcome: 'Welcome to Spanish Style',
    subtitle: 'Experience the best Spanish brands',
    shopNow: 'Shop Now',
    categories: 'Categories',
    featuredProducts: 'Featured Products',
    addToCart: 'Add to Cart',
    viewDetails: 'View Details',
    price: 'Price',
    quantity: 'Quantity',
    total: 'Total',
    proceedToCheckout: 'Proceed to Checkout',
    continueShopping: 'Continue Shopping',
    emptyCart: 'Your cart is empty',
    email: 'Email',
    password: 'Password',
    fullName: 'Full Name',
    phone: 'Phone Number',
    address: 'Address',
    loginToCheckout: 'Please login or register to checkout',
    shippingAddress: 'Shipping Address',
    paymentReceipt: 'Payment Receipt',
    uploadReceipt: 'Upload Receipt',
    transactionId: 'Transaction ID',
    paymentDate: 'Payment Date',
    amountPaid: 'Amount Paid',
    submitOrder: 'Submit Order',
    orderNumber: 'Order Number',
    orderDate: 'Order Date',
    orderStatus: 'Order Status',
    orderTotal: 'Order Total',
    noOrders: 'You have no orders yet',
    adminPanel: 'Admin Panel',
    dashboard: 'Dashboard',
    products: 'Products',
    orders: 'Orders',
    customers: 'Customers',
    receipts: 'Payment Receipts',
    statistics: 'Statistics',
    totalOrders: 'Total Orders',
    pendingOrders: 'Pending Orders',
    totalRevenue: 'Total Revenue',
    totalProducts: 'Total Products',
    totalCustomers: 'Total Customers',
    addProduct: 'Add Product',
    editProduct: 'Edit Product',
    deleteProduct: 'Delete Product',
    productName: 'Product Name',
    description: 'Description',
    category: 'Category',
    stock: 'Stock',
    isPromotion: 'Is Promotion',
    discount: 'Discount %',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    view: 'View',
    approve: 'Approve',
    reject: 'Reject',
    actions: 'Actions',
    search: 'Search',
    filter: 'Filter',
    sort: 'Sort',
    all: 'All',
    mensWear: "Men's Wear",
    womensWear: "Women's Wear",
    kidsWear: "Kids' Wear",
    mensShoes: "Men's Shoes",
    womensShoes: "Women's Shoes",
    kidsShoes: "Kids' Shoes",
    mensPerfumes: "Men's Perfumes",
    womensPerfumes: "Women's Perfumes",
    unisexPerfumes: 'Unisex Perfumes',
    pending_payment: 'Pending Payment',
    payment_received: 'Payment Received',
    processing: 'Processing',
    shipped: 'Shipped',
    delivered: 'Delivered',
    cancelled: 'Cancelled',
    priceLowToHigh: 'Price: Low to High',
    priceHighToLow: 'Price: High to Low',
    haveAccount: 'Have an account?',
    noAccount: "Don't have an account?",
    clickLogin: 'Login',
    clickRegister: 'Register'
  },
  es: {
    home: 'Inicio',
    clothes: 'Ropa',
    shoes: 'Zapatos',
    perfumes: 'Perfumes',
    promotions: 'Promociones',
    login: 'Iniciar Sesión',
    register: 'Registrarse',
    logout: 'Cerrar Sesión',
    cart: 'Carrito',
    checkout: 'Finalizar Compra',
    myOrders: 'Mis Pedidos',
    profile: 'Perfil',
    welcome: 'Bienvenido a Spanish Style',
    subtitle: 'Experimenta las mejores marcas españolas',
    shopNow: 'Comprar Ahora',
    categories: 'Categorías',
    featuredProducts: 'Productos Destacados',
    addToCart: 'Añadir al Carrito',
    viewDetails: 'Ver Detalles',
    price: 'Precio',
    quantity: 'Cantidad',
    total: 'Total',
    proceedToCheckout: 'Proceder al Pago',
    continueShopping: 'Continuar Comprando',
    emptyCart: 'Tu carrito está vacío',
    email: 'Correo Electrónico',
    password: 'Contraseña',
    fullName: 'Nombre Completo',
    phone: 'Número de Teléfono',
    address: 'Dirección',
    loginToCheckout: 'Por favor inicia sesión o regístrate para finalizar la compra',
    shippingAddress: 'Dirección de Envío',
    paymentReceipt: 'Recibo de Pago',
    uploadReceipt: 'Subir Recibo',
    transactionId: 'ID de Transacción',
    paymentDate: 'Fecha de Pago',
    amountPaid: 'Monto Pagado',
    submitOrder: 'Enviar Pedido',
    orderNumber: 'Número de Pedido',
    orderDate: 'Fecha del Pedido',
    orderStatus: 'Estado del Pedido',
    orderTotal: 'Total del Pedido',
    noOrders: 'Aún no tienes pedidos',
    adminPanel: 'Panel de Administración',
    dashboard: 'Tablero',
    products: 'Productos',
    orders: 'Pedidos',
    customers: 'Clientes',
    receipts: 'Recibos de Pago',
    statistics: 'Estadísticas',
    totalOrders: 'Total de Pedidos',
    pendingOrders: 'Pedidos Pendientes',
    totalRevenue: 'Ingresos Totales',
    totalProducts: 'Total de Productos',
    totalCustomers: 'Total de Clientes',
    addProduct: 'Añadir Producto',
    editProduct: 'Editar Producto',
    deleteProduct: 'Eliminar Producto',
    productName: 'Nombre del Producto',
    description: 'Descripción',
    category: 'Categoría',
    stock: 'Stock',
    isPromotion: 'Es Promoción',
    discount: 'Descuento %',
    save: 'Guardar',
    cancel: 'Cancelar',
    delete: 'Eliminar',
    edit: 'Editar',
    view: 'Ver',
    approve: 'Aprobar',
    reject: 'Rechazar',
    actions: 'Acciones',
    search: 'Buscar',
    filter: 'Filtrar',
    sort: 'Ordenar',
    all: 'Todos',
    mensWear: 'Ropa de Hombre',
    womensWear: 'Ropa de Mujer',
    kidsWear: 'Ropa de Niños',
    mensShoes: 'Zapatos de Hombre',
    womensShoes: 'Zapatos de Mujer',
    kidsShoes: 'Zapatos de Niños',
    mensPerfumes: 'Perfumes de Hombre',
    womensPerfumes: 'Perfumes de Mujer',
    unisexPerfumes: 'Perfumes Unisex',
    pending_payment: 'Pago Pendiente',
    payment_received: 'Pago Recibido',
    processing: 'Procesando',
    shipped: 'Enviado',
    delivered: 'Entregado',
    cancelled: 'Cancelado',
    priceLowToHigh: 'Precio: Bajo a Alto',
    priceHighToLow: 'Precio: Alto a Bajo',
    haveAccount: '¿Tienes una cuenta?',
    noAccount: '¿No tienes una cuenta?',
    clickLogin: 'Iniciar Sesión',
    clickRegister: 'Registrarse'
  }
};

// Global State
let currentLang = 'fa';
let currentUser = null;
let currentPage = 'home';
let currentCategory = null;
let selectedProduct = null;
let uploadedReceipt = null;

// Sample Data
const users = [
  {
    id: 'admin1',
    email: 'admin@spanishstyle.com',
    password: 'admin123',
    name: 'Admin',
    role: 'admin'
  },
  {
    id: 'user1',
    email: 'user1@test.com',
    password: 'user123',
    name: 'علی احمدی',
    phone: '09123456789',
    address: 'تهران، خیابان ولیعصر',
    role: 'user'
  },
  {
    id: 'user2',
    email: 'user2@test.com',
    password: 'user123',
    name: 'سارا محمدی',
    phone: '09123456780',
    address: 'تهران، خیابان آزادی',
    role: 'user'
  },
  {
    id: 'user3',
    email: 'user3@test.com',
    password: 'user123',
    name: 'رضا کریمی',
    phone: '09123456781',
    address: 'تهران، خیابان انقلاب',
    role: 'user'
  }
];

const products = [
  {
    id: 'prod_001',
    category: 'clothes',
    subcategory: 'womens_wear',
    name: { fa: 'پیراهن زنانه زارا', en: "Zara Women's Dress", es: 'Vestido de Mujer Zara' },
    description: { fa: 'پیراهن شیک و مدرن به سبک اسپانیایی', en: 'Stylish and modern Spanish-style dress', es: 'Vestido elegante y moderno de estilo español' },
    price: 89.99,
    stock: 15,
    is_promotion: false,
    icon: '👗'
  },
  {
    id: 'prod_002',
    category: 'shoes',
    subcategory: 'mens_shoes',
    name: { fa: 'کفش مردانه چرمی', en: "Men's Leather Shoes", es: 'Zapatos de Cuero para Hombre' },
    description: { fa: 'کفش چرمی باکیفیت ساخت اسپانیا', en: 'Quality leather shoes made in Spain', es: 'Zapatos de cuero de calidad hechos en España' },
    price: 129.99,
    stock: 20,
    is_promotion: false,
    icon: '👞'
  },
  {
    id: 'prod_003',
    category: 'perfumes',
    subcategory: 'womens_perfumes',
    name: { fa: 'ادوپرفیوم زنانه لوکس', en: "Luxury Women's Eau de Parfum", es: 'Eau de Parfum de Lujo para Mujer' },
    description: { fa: 'عطر لوکس با رایحه‌های مدیترانه‌ای', en: 'Luxury perfume with Mediterranean scents', es: 'Perfume de lujo con aromas mediterráneos' },
    price: 79.99,
    stock: 30,
    is_promotion: true,
    discount: 20,
    icon: '🌸'
  },
  {
    id: 'prod_004',
    category: 'clothes',
    subcategory: 'mens_wear',
    name: { fa: 'پیراهن مردانه', en: "Men's Shirt", es: 'Camisa de Hombre' },
    description: { fa: 'پیراهن کلاسیک مردانه', en: 'Classic men\'s shirt', es: 'Camisa clásica para hombre' },
    price: 59.99,
    stock: 25,
    is_promotion: false,
    icon: '👔'
  },
  {
    id: 'prod_005',
    category: 'shoes',
    subcategory: 'womens_shoes',
    name: { fa: 'کفش پاشنه بلند', en: 'High Heels', es: 'Tacones Altos' },
    description: { fa: 'کفش پاشنه بلند مجلسی', en: 'Elegant high heels', es: 'Tacones elegantes' },
    price: 99.99,
    stock: 18,
    is_promotion: true,
    discount: 15,
    icon: '👠'
  },
  {
    id: 'prod_006',
    category: 'perfumes',
    subcategory: 'mens_perfumes',
    name: { fa: 'ادکلن مردانه', en: "Men's Cologne", es: 'Colonia para Hombre' },
    description: { fa: 'ادکلن با عطر چوبی', en: 'Cologne with woody scent', es: 'Colonia con aroma amaderado' },
    price: 69.99,
    stock: 22,
    is_promotion: false,
    icon: '🧴'
  },
  {
    id: 'prod_007',
    category: 'clothes',
    subcategory: 'kids_wear',
    name: { fa: 'لباس بچگانه', en: "Kids' Outfit", es: 'Conjunto Infantil' },
    description: { fa: 'لباس راحت و شیک برای کودکان', en: 'Comfortable and stylish kids outfit', es: 'Conjunto cómodo y elegante para niños' },
    price: 45.99,
    stock: 30,
    is_promotion: false,
    icon: '👶'
  },
  {
    id: 'prod_008',
    category: 'shoes',
    subcategory: 'kids_shoes',
    name: { fa: 'کفش ورزشی بچگانه', en: "Kids' Sneakers", es: 'Zapatillas Infantiles' },
    description: { fa: 'کفش ورزشی راحت برای کودکان', en: 'Comfortable sneakers for kids', es: 'Zapatillas cómodas para niños' },
    price: 39.99,
    stock: 35,
    is_promotion: true,
    discount: 10,
    icon: '👟'
  },
  {
    id: 'prod_009',
    category: 'perfumes',
    subcategory: 'unisex_perfumes',
    name: { fa: 'عطر یونیسکس', en: 'Unisex Perfume', es: 'Perfume Unisex' },
    description: { fa: 'عطر مناسب برای همه', en: 'Perfume suitable for everyone', es: 'Perfume adecuado para todos' },
    price: 74.99,
    stock: 28,
    is_promotion: false,
    icon: '💐'
  },
  {
    id: 'prod_010',
    category: 'clothes',
    subcategory: 'womens_wear',
    name: { fa: 'مانتو زنانه', en: "Women's Coat", es: 'Abrigo de Mujer' },
    description: { fa: 'مانتو شیک و گرم', en: 'Stylish and warm coat', es: 'Abrigo elegante y cálido' },
    price: 119.99,
    stock: 12,
    is_promotion: false,
    icon: '🧥'
  }
];

const orders = [
  {
    id: 'order_001',
    userId: 'user1',
    date: '2025-11-01',
    total: 259.97,
    status: 'delivered',
    items: [
      { productId: 'prod_001', quantity: 2, price: 89.99 },
      { productId: 'prod_003', quantity: 1, price: 79.99 }
    ],
    receipt: 'receipt_001.jpg',
    address: 'تهران، خیابان ولیعصر'
  },
  {
    id: 'order_002',
    userId: 'user2',
    date: '2025-11-05',
    total: 129.99,
    status: 'shipped',
    items: [
      { productId: 'prod_002', quantity: 1, price: 129.99 }
    ],
    receipt: 'receipt_002.jpg',
    address: 'تهران، خیابان آزادی'
  },
  {
    id: 'order_003',
    userId: 'user3',
    date: '2025-11-08',
    total: 149.98,
    status: 'pending_payment',
    items: [
      { productId: 'prod_005', quantity: 1, price: 99.99 },
      { productId: 'prod_006', quantity: 1, price: 69.99 }
    ],
    receipt: null,
    address: 'تهران، خیابان انقلاب'
  }
];

const cart = {};

// ===== UTILITY FUNCTIONS =====

function t(key) {
  return translations[currentLang][key] || key;
}

function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast ${type} active`;
  setTimeout(() => {
    toast.classList.remove('active');
  }, 3000);
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  const userId = currentUser?.id || 'guest';
  const userCart = cart[userId] || [];
  const totalItems = userCart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalItems;
}

function getProduct(id) {
  return products.find(p => p.id === id);
}

function getUserOrders() {
  if (!currentUser) return [];
  return orders.filter(o => o.userId === currentUser.id);
}

// ===== LANGUAGE SWITCHING =====

function switchLanguage(lang) {
  currentLang = lang;
  const html = document.documentElement;
  const dir = lang === 'fa' ? 'rtl' : 'ltr';
  html.setAttribute('lang', lang);
  html.setAttribute('dir', dir);
  
  // Update active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  
  // Update all translatable content
  updateTranslations();
  
  // Refresh current page
  const page = currentPage;
  currentPage = null;
  navigateToPage(page);
}

function updateTranslations() {
  // Update navigation
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const page = link.dataset.page;
    link.textContent = t(page);
  });
  
  // Update search placeholder
  document.getElementById('searchInput').placeholder = t('search') + '...';
  
  // Update hero
  document.querySelector('.hero-title').textContent = t('welcome');
  document.querySelector('.hero-subtitle').textContent = t('subtitle');
  document.querySelector('.hero .btn-primary').textContent = t('shopNow');
  
  // Update section titles
  const sectionTitles = document.querySelectorAll('.section-title');
  if (sectionTitles[0]) sectionTitles[0].textContent = t('categories');
  if (sectionTitles[1]) sectionTitles[1].textContent = t('featuredProducts');
}

// ===== NAVIGATION =====

function navigateToPage(page) {
  if (currentPage === page) return;
  
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  
  // Update navigation active state
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === page);
  });
  
  currentPage = page;
  
  // Show appropriate page
  switch(page) {
    case 'home':
      document.getElementById('homePage').classList.add('active');
      renderFeaturedProducts();
      break;
    case 'clothes':
    case 'shoes':
    case 'perfumes':
      currentCategory = page;
      showProductsPage(page);
      break;
    case 'promotions':
      showPromotionsPage();
      break;
    case 'cart':
      showCartPage();
      break;
    case 'checkout':
      showCheckoutPage();
      break;
    case 'login':
      document.getElementById('loginPage').classList.add('active');
      break;
    case 'register':
      document.getElementById('registerPage').classList.add('active');
      break;
    case 'dashboard':
      showDashboard();
      break;
    case 'admin-login':
      document.getElementById('adminLoginPage').classList.add('active');
      break;
    case 'admin-dashboard':
      showAdminDashboard();
      break;
  }
  
  // Close mobile menu if open
  document.getElementById('navList').classList.remove('active');
}

// ===== PRODUCT RENDERING =====

function renderFeaturedProducts() {
  const container = document.getElementById('featuredProducts');
  const featured = products.filter(p => p.is_promotion).slice(0, 6);
  
  container.innerHTML = featured.map(product => `
    <div class="product-card" onclick="viewProductDetail('${product.id}')">
      <div class="product-image">
        ${product.icon}
        ${product.is_promotion ? `<span class="product-badge">-${product.discount}%</span>` : ''}
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name[currentLang]}</h3>
        <p class="product-description">${product.description[currentLang]}</p>
        <div class="product-price ${product.is_promotion ? 'has-discount' : ''}">
          ${product.is_promotion ? `
            <span class="original-price">${formatPrice(product.price)}</span>
            <span>${formatPrice(product.price * (1 - product.discount / 100))}</span>
          ` : formatPrice(product.price)}
        </div>
        <div class="product-actions">
          <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart('${product.id}')">${t('addToCart')}</button>
        </div>
      </div>
    </div>
  `).join('');
}

function showProductsPage(category) {
  document.getElementById('productsPage').classList.add('active');
  document.getElementById('productsPageTitle').textContent = t(category);
  
  // Setup category filter
  const categoryFilter = document.getElementById('categoryFilter');
  const subcategories = products
    .filter(p => p.category === category)
    .map(p => p.subcategory)
    .filter((v, i, a) => a.indexOf(v) === i);
  
  categoryFilter.innerHTML = `
    <option value="">${t('all')}</option>
    ${subcategories.map(sub => `
      <option value="${sub}">${t(sub.replace('_', ''))}</option>
    `).join('')}
  `;
  
  renderProducts(category);
}

function renderProducts(category) {
  const container = document.getElementById('productsGrid');
  const categoryFilter = document.getElementById('categoryFilter').value;
  const sortFilter = document.getElementById('sortFilter').value;
  
  let filtered = products.filter(p => p.category === category);
  
  if (categoryFilter) {
    filtered = filtered.filter(p => p.subcategory === categoryFilter);
  }
  
  // Sort products
  if (sortFilter === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortFilter === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  }
  
  container.innerHTML = filtered.map(product => `
    <div class="product-card" onclick="viewProductDetail('${product.id}')">
      <div class="product-image">
        ${product.icon}
        ${product.is_promotion ? `<span class="product-badge">-${product.discount}%</span>` : ''}
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name[currentLang]}</h3>
        <p class="product-description">${product.description[currentLang]}</p>
        <div class="product-price ${product.is_promotion ? 'has-discount' : ''}">
          ${product.is_promotion ? `
            <span class="original-price">${formatPrice(product.price)}</span>
            <span>${formatPrice(product.price * (1 - product.discount / 100))}</span>
          ` : formatPrice(product.price)}
        </div>
        <div class="product-actions">
          <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart('${product.id}')">${t('addToCart')}</button>
        </div>
      </div>
    </div>
  `).join('');
}

function viewProductDetail(productId) {
  const product = getProduct(productId);
  if (!product) return;
  
  selectedProduct = product;
  const container = document.getElementById('productDetail');
  const finalPrice = product.is_promotion 
    ? product.price * (1 - product.discount / 100) 
    : product.price;
  
  container.innerHTML = `
    <div class="product-detail-image">${product.icon}</div>
    <div class="product-detail-info">
      <h1>${product.name[currentLang]}</h1>
      ${product.is_promotion ? `<span class="product-badge">-${product.discount}%</span>` : ''}
      <div class="product-detail-price">
        ${product.is_promotion ? `
          <span class="original-price" style="font-size: 20px; margin-left: 10px;">${formatPrice(product.price)}</span>
        ` : ''}
        ${formatPrice(finalPrice)}
      </div>
      <p class="product-detail-description">${product.description[currentLang]}</p>
      <div class="quantity-selector">
        <button class="quantity-btn" onclick="changeDetailQuantity(-1)">-</button>
        <span class="quantity-value" id="detailQuantity">1</span>
        <button class="quantity-btn" onclick="changeDetailQuantity(1)">+</button>
      </div>
      <button class="btn btn-primary" style="width: 100%; padding: 15px; font-size: 18px;" onclick="addToCartFromDetail()">${t('addToCart')}</button>
      <button class="btn btn-secondary" style="width: 100%; padding: 15px; font-size: 18px; margin-top: 10px;" onclick="navigateToPage('${product.category}')">${t('continueShopping')}</button>
    </div>
  `;
  
  document.getElementById('productDetailPage').classList.add('active');
}

function changeDetailQuantity(delta) {
  const quantityEl = document.getElementById('detailQuantity');
  let quantity = parseInt(quantityEl.textContent);
  quantity = Math.max(1, quantity + delta);
  quantityEl.textContent = quantity;
}

function addToCartFromDetail() {
  const quantity = parseInt(document.getElementById('detailQuantity').textContent);
  addToCart(selectedProduct.id, quantity);
}

// ===== CART FUNCTIONS =====

function addToCart(productId, quantity = 1) {
  const userId = currentUser?.id || 'guest';
  if (!cart[userId]) cart[userId] = [];
  
  const existing = cart[userId].find(item => item.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart[userId].push({ productId, quantity });
  }
  
  updateCartBadge();
  showToast(t('addToCart') + ' ✓');
}

function removeFromCart(productId) {
  const userId = currentUser?.id || 'guest';
  if (!cart[userId]) return;
  
  cart[userId] = cart[userId].filter(item => item.productId !== productId);
  updateCartBadge();
  showCartPage();
  showToast('حذف شد', 'info');
}

function updateCartQuantity(productId, delta) {
  const userId = currentUser?.id || 'guest';
  if (!cart[userId]) return;
  
  const item = cart[userId].find(i => i.productId === productId);
  if (item) {
    item.quantity = Math.max(1, item.quantity + delta);
    updateCartBadge();
    showCartPage();
  }
}

function showCartPage() {
  document.getElementById('cartPage').classList.add('active');
  const container = document.getElementById('cartContent');
  const userId = currentUser?.id || 'guest';
  const userCart = cart[userId] || [];
  
  if (userCart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <p>${t('emptyCart')}</p>
        <button class="btn btn-primary" onclick="navigateToPage('home')">${t('continueShopping')}</button>
      </div>
    `;
    return;
  }
  
  let subtotal = 0;
  const itemsHtml = userCart.map(item => {
    const product = getProduct(item.productId);
    if (!product) return '';
    
    const price = product.is_promotion 
      ? product.price * (1 - product.discount / 100) 
      : product.price;
    const itemTotal = price * item.quantity;
    subtotal += itemTotal;
    
    return `
      <div class="cart-item">
        <div class="cart-item-image">${product.icon}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${product.name[currentLang]}</div>
          <div class="cart-item-price">${formatPrice(price)}</div>
          <div class="cart-item-quantity">
            <button class="quantity-btn" onclick="updateCartQuantity('${product.id}', -1)">-</button>
            <span class="quantity-value">${item.quantity}</span>
            <button class="quantity-btn" onclick="updateCartQuantity('${product.id}', 1)">+</button>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart('${product.id}')">🗑️</button>
      </div>
    `;
  }).join('');
  
  container.innerHTML = `
    <div class="cart-items">${itemsHtml}</div>
    <div class="cart-summary">
      <div class="cart-summary-row">
        <span>${t('total')}</span>
        <span>${formatPrice(subtotal)}</span>
      </div>
      <button class="btn btn-primary btn-full-width" onclick="navigateToPage('checkout')" style="margin-top: 20px;">${t('proceedToCheckout')}</button>
      <button class="btn btn-secondary btn-full-width" onclick="navigateToPage('home')" style="margin-top: 10px;">${t('continueShopping')}</button>
    </div>
  `;
}

// ===== CHECKOUT =====

function showCheckoutPage() {
  document.getElementById('checkoutPage').classList.add('active');
  const container = document.getElementById('checkoutContent');
  
  if (!currentUser) {
    container.innerHTML = `
      <div style="text-align: center; padding: 60px 20px;">
        <p style="font-size: 18px; margin-bottom: 30px;">${t('loginToCheckout')}</p>
        <button class="btn btn-primary" onclick="navigateToPage('login')">${t('login')}</button>
        <button class="btn btn-secondary" style="margin-left: 15px;" onclick="navigateToPage('register')">${t('register')}</button>
      </div>
    `;
    return;
  }
  
  container.innerHTML = `
    <form class="checkout-form" onsubmit="submitOrder(event)">
      <h3>${t('shippingAddress')}</h3>
      <div class="form-group">
        <label>${t('address')}</label>
        <textarea id="checkoutAddress" class="form-control" required>${currentUser.address || ''}</textarea>
      </div>
      
      <h3 style="margin-top: 30px;">${t('paymentReceipt')}</h3>
      <div class="form-group">
        <label>${t('uploadReceipt')}</label>
        <div class="file-upload" onclick="document.getElementById('receiptFile').click()">
          <input type="file" id="receiptFile" accept="image/*" onchange="handleReceiptUpload(event)">
          <p>📄 ${t('uploadReceipt')}</p>
          <img id="receiptPreview" class="receipt-preview" style="display: none;">
        </div>
      </div>
      
      <div class="form-group">
        <label>${t('transactionId')}</label>
        <input type="text" id="transactionId" class="form-control" required>
      </div>
      
      <div class="form-group">
        <label>${t('paymentDate')}</label>
        <input type="date" id="paymentDate" class="form-control" required>
      </div>
      
      <div class="form-group">
        <label>${t('amountPaid')}</label>
        <input type="number" id="amountPaid" class="form-control" step="0.01" required>
      </div>
      
      <button type="submit" class="btn btn-primary btn-full-width" style="margin-top: 20px;">${t('submitOrder')}</button>
    </form>
  `;
}

function handleReceiptUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      uploadedReceipt = e.target.result;
      const preview = document.getElementById('receiptPreview');
      preview.src = e.target.result;
      preview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
}

function submitOrder(event) {
  event.preventDefault();
  
  const userId = currentUser.id;
  const userCart = cart[userId] || [];
  
  if (userCart.length === 0) {
    showToast('سبد خرید خالی است', 'error');
    return;
  }
  
  // Calculate total
  let total = 0;
  const items = userCart.map(item => {
    const product = getProduct(item.productId);
    const price = product.is_promotion 
      ? product.price * (1 - product.discount / 100) 
      : product.price;
    total += price * item.quantity;
    return {
      productId: item.productId,
      quantity: item.quantity,
      price
    };
  });
  
  // Create order
  const order = {
    id: 'order_' + Date.now(),
    userId,
    date: new Date().toISOString().split('T')[0],
    total,
    status: 'pending_payment',
    items,
    receipt: uploadedReceipt,
    address: document.getElementById('checkoutAddress').value,
    transactionId: document.getElementById('transactionId').value,
    paymentDate: document.getElementById('paymentDate').value
  };
  
  orders.push(order);
  cart[userId] = [];
  updateCartBadge();
  uploadedReceipt = null;
  
  showToast('سفارش شما ثبت شد!', 'success');
  navigateToPage('dashboard');
}

// ===== AUTHENTICATION =====

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  const user = users.find(u => u.email === email && u.password === password && u.role === 'user');
  if (user) {
    currentUser = user;
    showToast('خوش آمدید!', 'success');
    navigateToPage('home');
  } else {
    showToast('ایمیل یا رمز عبور اشتباه است', 'error');
  }
}

function handleRegister(event) {
  event.preventDefault();
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  const phone = document.getElementById('regPhone').value;
  const address = document.getElementById('regAddress').value;
  
  if (users.find(u => u.email === email)) {
    showToast('این ایمیل قبلا ثبت شده است', 'error');
    return;
  }
  
  const newUser = {
    id: 'user_' + Date.now(),
    email,
    password,
    name,
    phone,
    address,
    role: 'user'
  };
  
  users.push(newUser);
  currentUser = newUser;
  showToast('ثبت‌نام موفق!', 'success');
  navigateToPage('home');
}

function handleAdminLogin(event) {
  event.preventDefault();
  const email = document.getElementById('adminEmail').value;
  const password = document.getElementById('adminPassword').value;
  
  const admin = users.find(u => u.email === email && u.password === password && u.role === 'admin');
  if (admin) {
    currentUser = admin;
    showToast('خوش آمدید مدیر!', 'success');
    navigateToPage('admin-dashboard');
  } else {
    showToast('اطلاعات ورود نادرست است', 'error');
  }
}

function logout() {
  currentUser = null;
  showToast('خارج شدید', 'info');
  navigateToPage('home');
}

// ===== USER DASHBOARD =====

function showDashboard() {
  if (!currentUser || currentUser.role !== 'user') {
    navigateToPage('login');
    return;
  }
  
  document.getElementById('dashboardPage').classList.add('active');
  document.getElementById('dashboardUserName').textContent = currentUser.name;
  
  showDashboardSection('orders');
}

function showDashboardSection(section) {
  const container = document.getElementById('dashboardSection');
  
  // Update active nav link
  document.querySelectorAll('.dashboard-nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.section === section);
  });
  
  if (section === 'orders') {
    const userOrders = getUserOrders();
    if (userOrders.length === 0) {
      container.innerHTML = `<p>${t('noOrders')}</p>`;
      return;
    }
    
    container.innerHTML = `
      <h2>${t('myOrders')}</h2>
      <table class="orders-table">
        <thead>
          <tr>
            <th>${t('orderNumber')}</th>
            <th>${t('orderDate')}</th>
            <th>${t('orderTotal')}</th>
            <th>${t('orderStatus')}</th>
            <th>${t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          ${userOrders.map(order => `
            <tr>
              <td>${order.id}</td>
              <td>${order.date}</td>
              <td>${formatPrice(order.total)}</td>
              <td><span class="status-badge status-${order.status}">${t(order.status)}</span></td>
              <td><button class="btn btn-secondary" onclick="viewOrderDetails('${order.id}')">${t('view')}</button></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  } else if (section === 'profile') {
    container.innerHTML = `
      <h2>${t('profile')}</h2>
      <div class="form-group">
        <label>${t('fullName')}</label>
        <input type="text" class="form-control" value="${currentUser.name}" readonly>
      </div>
      <div class="form-group">
        <label>${t('email')}</label>
        <input type="email" class="form-control" value="${currentUser.email}" readonly>
      </div>
      <div class="form-group">
        <label>${t('phone')}</label>
        <input type="text" class="form-control" value="${currentUser.phone}" readonly>
      </div>
      <div class="form-group">
        <label>${t('address')}</label>
        <textarea class="form-control" readonly>${currentUser.address}</textarea>
      </div>
    `;
  }
}

function viewOrderDetails(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (!order) return;
  
  const itemsHtml = order.items.map(item => {
    const product = getProduct(item.productId);
    return `
      <tr>
        <td>${product.name[currentLang]}</td>
        <td>${item.quantity}</td>
        <td>${formatPrice(item.price)}</td>
        <td>${formatPrice(item.price * item.quantity)}</td>
      </tr>
    `;
  }).join('');
  
  showModal(`
    <h2>${t('orderNumber')}: ${order.id}</h2>
    <p><strong>${t('orderDate')}:</strong> ${order.date}</p>
    <p><strong>${t('orderStatus')}:</strong> <span class="status-badge status-${order.status}">${t(order.status)}</span></p>
    <p><strong>${t('shippingAddress')}:</strong> ${order.address}</p>
    <h3 style="margin-top: 20px;">${t('products')}</h3>
    <table class="orders-table">
      <thead>
        <tr>
          <th>${t('productName')}</th>
          <th>${t('quantity')}</th>
          <th>${t('price')}</th>
          <th>${t('total')}</th>
        </tr>
      </thead>
      <tbody>
        ${itemsHtml}
      </tbody>
    </table>
    <p style="margin-top: 20px; font-size: 20px; font-weight: bold;">${t('total')}: ${formatPrice(order.total)}</p>
    ${order.receipt ? `<p><strong>${t('paymentReceipt')}:</strong> <img src="${order.receipt}" style="max-width: 200px; display: block; margin-top: 10px; border-radius: 8px;"></p>` : ''}
  `);
}

// ===== ADMIN DASHBOARD =====

function showAdminDashboard() {
  if (!currentUser || currentUser.role !== 'admin') {
    navigateToPage('admin-login');
    return;
  }
  
  document.getElementById('adminDashboardPage').classList.add('active');
  showAdminSection('stats');
}

function showAdminSection(section) {
  const container = document.getElementById('adminSection');
  
  // Update active nav link
  document.querySelectorAll('.admin-nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.adminSection === section);
  });
  
  if (section === 'stats') {
    const totalOrders = orders.length;
    const pendingOrders = orders.filter(o => o.status === 'pending_payment').length;
    const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
    const totalProducts = products.length;
    const totalCustomers = users.filter(u => u.role === 'user').length;
    
    container.innerHTML = `
      <h2>${t('statistics')}</h2>
      <div class="stats-grid">
        <div class="stat-card">
          <h3>${t('totalOrders')}</h3>
          <div class="stat-value">${totalOrders}</div>
        </div>
        <div class="stat-card">
          <h3>${t('pendingOrders')}</h3>
          <div class="stat-value">${pendingOrders}</div>
        </div>
        <div class="stat-card">
          <h3>${t('totalRevenue')}</h3>
          <div class="stat-value">${formatPrice(totalRevenue)}</div>
        </div>
        <div class="stat-card">
          <h3>${t('totalProducts')}</h3>
          <div class="stat-value">${totalProducts}</div>
        </div>
        <div class="stat-card">
          <h3>${t('totalCustomers')}</h3>
          <div class="stat-value">${totalCustomers}</div>
        </div>
      </div>
    `;
  } else if (section === 'products') {
    showAdminProducts();
  } else if (section === 'orders') {
    showAdminOrders();
  } else if (section === 'customers') {
    showAdminCustomers();
  } else if (section === 'receipts') {
    showAdminReceipts();
  }
}

function showAdminProducts() {
  const container = document.getElementById('adminSection');
  
  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
      <h2>${t('products')}</h2>
      <button class="btn btn-primary" onclick="showAddProductForm()">${t('addProduct')}</button>
    </div>
    <div class="admin-table">
      <table>
        <thead>
          <tr>
            <th>${t('productName')}</th>
            <th>${t('category')}</th>
            <th>${t('price')}</th>
            <th>${t('stock')}</th>
            <th>${t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          ${products.map(p => `
            <tr>
              <td>${p.name[currentLang]}</td>
              <td>${t(p.category)}</td>
              <td>${formatPrice(p.price)}</td>
              <td>${p.stock}</td>
              <td>
                <div class="admin-actions">
                  <button class="btn btn-secondary" onclick="editProduct('${p.id}')">${t('edit')}</button>
                  <button class="btn btn-outline" onclick="deleteProduct('${p.id}')">${t('delete')}</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function showAdminOrders() {
  const container = document.getElementById('adminSection');
  
  container.innerHTML = `
    <h2>${t('orders')}</h2>
    <div class="admin-table">
      <table>
        <thead>
          <tr>
            <th>${t('orderNumber')}</th>
            <th>${t('customers')}</th>
            <th>${t('orderDate')}</th>
            <th>${t('total')}</th>
            <th>${t('orderStatus')}</th>
            <th>${t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          ${orders.map(order => {
            const user = users.find(u => u.id === order.userId);
            return `
              <tr>
                <td>${order.id}</td>
                <td>${user?.name || 'Unknown'}</td>
                <td>${order.date}</td>
                <td>${formatPrice(order.total)}</td>
                <td><span class="status-badge status-${order.status}">${t(order.status)}</span></td>
                <td>
                  <div class="admin-actions">
                    <button class="btn btn-secondary" onclick="viewAdminOrderDetails('${order.id}')">${t('view')}</button>
                    <button class="btn btn-primary" onclick="changeOrderStatus('${order.id}')">${t('edit')}</button>
                  </div>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function showAdminCustomers() {
  const container = document.getElementById('adminSection');
  const customers = users.filter(u => u.role === 'user');
  
  container.innerHTML = `
    <h2>${t('customers')}</h2>
    <div class="admin-table">
      <table>
        <thead>
          <tr>
            <th>${t('fullName')}</th>
            <th>${t('email')}</th>
            <th>${t('phone')}</th>
            <th>${t('totalOrders')}</th>
          </tr>
        </thead>
        <tbody>
          ${customers.map(customer => {
            const customerOrders = orders.filter(o => o.userId === customer.id).length;
            return `
              <tr>
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>${customer.phone}</td>
                <td>${customerOrders}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function showAdminReceipts() {
  const container = document.getElementById('adminSection');
  const receipts = orders.filter(o => o.receipt);
  
  container.innerHTML = `
    <h2>${t('receipts')}</h2>
    <div class="admin-table">
      <table>
        <thead>
          <tr>
            <th>${t('orderNumber')}</th>
            <th>${t('customers')}</th>
            <th>${t('orderStatus')}</th>
            <th>${t('paymentReceipt')}</th>
            <th>${t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          ${receipts.map(order => {
            const user = users.find(u => u.id === order.userId);
            return `
              <tr>
                <td>${order.id}</td>
                <td>${user?.name || 'Unknown'}</td>
                <td><span class="status-badge status-${order.status}">${t(order.status)}</span></td>
                <td><img src="${order.receipt}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 6px; cursor: pointer;" onclick="viewReceiptImage('${order.receipt}')"></td>
                <td>
                  <div class="admin-actions">
                    ${order.status === 'pending_payment' ? `
                      <button class="btn btn-primary" onclick="approveReceipt('${order.id}')">${t('approve')}</button>
                      <button class="btn btn-outline" onclick="rejectReceipt('${order.id}')">${t('reject')}</button>
                    ` : ''}
                  </div>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function viewReceiptImage(receiptUrl) {
  showModal(`<img src="${receiptUrl}" style="max-width: 100%; border-radius: 8px;">`);
}

function approveReceipt(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = 'payment_received';
    showToast('رسید تایید شد', 'success');
    showAdminReceipts();
  }
}

function rejectReceipt(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (order) {
    order.status = 'cancelled';
    showToast('رسید رد شد', 'info');
    showAdminReceipts();
  }
}

function viewAdminOrderDetails(orderId) {
  viewOrderDetails(orderId);
}

function changeOrderStatus(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (!order) return;
  
  const statuses = ['pending_payment', 'payment_received', 'processing', 'shipped', 'delivered', 'cancelled'];
  
  showModal(`
    <h2>تغییر وضعیت سفارش</h2>
    <p><strong>${t('orderNumber')}:</strong> ${order.id}</p>
    <div class="form-group">
      <label>${t('orderStatus')}</label>
      <select id="newStatus" class="form-control">
        ${statuses.map(s => `<option value="${s}" ${s === order.status ? 'selected' : ''}>${t(s)}</option>`).join('')}
      </select>
    </div>
    <button class="btn btn-primary btn-full-width" onclick="updateOrderStatus('${orderId}')">${t('save')}</button>
  `);
}

function updateOrderStatus(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (order) {
    const newStatus = document.getElementById('newStatus').value;
    order.status = newStatus;
    showToast('وضعیت سفارش به‌روز شد', 'success');
    closeModal();
    showAdminOrders();
  }
}

function showAddProductForm() {
  showModal(`
    <h2>${t('addProduct')}</h2>
    <form onsubmit="saveNewProduct(event)">
      <div class="form-group">
        <label>${t('productName')} (${t('fa')})</label>
        <input type="text" id="productNameFa" class="form-control" required>
      </div>
      <div class="form-group">
        <label>${t('productName')} (${t('en')})</label>
        <input type="text" id="productNameEn" class="form-control" required>
      </div>
      <div class="form-group">
        <label>${t('productName')} (${t('es')})</label>
        <input type="text" id="productNameEs" class="form-control" required>
      </div>
      <div class="form-group">
        <label>${t('category')}</label>
        <select id="productCategory" class="form-control" required>
          <option value="clothes">${t('clothes')}</option>
          <option value="shoes">${t('shoes')}</option>
          <option value="perfumes">${t('perfumes')}</option>
        </select>
      </div>
      <div class="form-group">
        <label>${t('price')}</label>
        <input type="number" id="productPrice" class="form-control" step="0.01" required>
      </div>
      <div class="form-group">
        <label>${t('stock')}</label>
        <input type="number" id="productStock" class="form-control" required>
      </div>
      <button type="submit" class="btn btn-primary btn-full-width">${t('save')}</button>
    </form>
  `);
}

function saveNewProduct(event) {
  event.preventDefault();
  
  const newProduct = {
    id: 'prod_' + Date.now(),
    category: document.getElementById('productCategory').value,
    subcategory: document.getElementById('productCategory').value === 'clothes' ? 'mens_wear' : 
                  document.getElementById('productCategory').value === 'shoes' ? 'mens_shoes' : 'mens_perfumes',
    name: {
      fa: document.getElementById('productNameFa').value,
      en: document.getElementById('productNameEn').value,
      es: document.getElementById('productNameEs').value
    },
    description: {
      fa: 'توضیحات محصول',
      en: 'Product description',
      es: 'Descripción del producto'
    },
    price: parseFloat(document.getElementById('productPrice').value),
    stock: parseInt(document.getElementById('productStock').value),
    is_promotion: false,
    icon: '📦'
  };
  
  products.push(newProduct);
  showToast('محصول جدید اضافه شد', 'success');
  closeModal();
  showAdminProducts();
}

function deleteProduct(productId) {
  if (confirm('آیا مطمئن هستید که می‌خواهید این محصول را حذف کنید?')) {
    const index = products.findIndex(p => p.id === productId);
    if (index > -1) {
      products.splice(index, 1);
      showToast('محصول حذف شد', 'info');
      showAdminProducts();
    }
  }
}

function editProduct(productId) {
  const product = getProduct(productId);
  if (!product) return;
  
  showModal(`
    <h2>${t('editProduct')}</h2>
    <form onsubmit="updateProduct(event, '${productId}')">
      <div class="form-group">
        <label>${t('price')}</label>
        <input type="number" id="editPrice" class="form-control" step="0.01" value="${product.price}" required>
      </div>
      <div class="form-group">
        <label>${t('stock')}</label>
        <input type="number" id="editStock" class="form-control" value="${product.stock}" required>
      </div>
      <button type="submit" class="btn btn-primary btn-full-width">${t('save')}</button>
    </form>
  `);
}

function updateProduct(event, productId) {
  event.preventDefault();
  
  const product = getProduct(productId);
  if (product) {
    product.price = parseFloat(document.getElementById('editPrice').value);
    product.stock = parseInt(document.getElementById('editStock').value);
    showToast('محصول به‌روز شد', 'success');
    closeModal();
    showAdminProducts();
  }
}

// ===== PROMOTIONS PAGE =====

function showPromotionsPage() {
  document.getElementById('promotionsPage').classList.add('active');
  const container = document.getElementById('promotionsGrid');
  const promoProducts = products.filter(p => p.is_promotion);
  
  container.innerHTML = promoProducts.map(product => `
    <div class="product-card" onclick="viewProductDetail('${product.id}')">
      <div class="product-image">
        ${product.icon}
        <span class="product-badge">-${product.discount}%</span>
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name[currentLang]}</h3>
        <p class="product-description">${product.description[currentLang]}</p>
        <div class="product-price has-discount">
          <span class="original-price">${formatPrice(product.price)}</span>
          <span>${formatPrice(product.price * (1 - product.discount / 100))}</span>
        </div>
        <div class="product-actions">
          <button class="btn btn-primary" onclick="event.stopPropagation(); addToCart('${product.id}')">${t('addToCart')}</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ===== MODAL =====

function showModal(content) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modalBody');
  modalBody.innerHTML = content;
  modal.classList.add('active');
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
}

// ===== INITIALIZATION =====

document.addEventListener('DOMContentLoaded', function() {
  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => switchLanguage(btn.dataset.lang));
  });
  
  // Mobile menu toggle
  document.getElementById('mobileMenuToggle').addEventListener('click', () => {
    document.getElementById('navList').classList.toggle('active');
  });
  
  // Navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navigateToPage(link.dataset.page);
    });
  });
  
  // User button
  document.getElementById('userBtn').addEventListener('click', () => {
    if (currentUser && currentUser.role === 'user') {
      navigateToPage('dashboard');
    } else if (currentUser && currentUser.role === 'admin') {
      navigateToPage('admin-dashboard');
    } else {
      navigateToPage('login');
    }
  });
  
  // Cart button
  document.getElementById('cartBtn').addEventListener('click', () => {
    navigateToPage('cart');
  });
  
  // Login form
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
  
  // Register form
  document.getElementById('registerForm').addEventListener('submit', handleRegister);
  
  // Admin login form
  document.getElementById('adminLoginForm').addEventListener('submit', handleAdminLogin);
  
  // Logout buttons
  document.getElementById('logoutBtn')?.addEventListener('click', logout);
  document.getElementById('adminLogoutBtn')?.addEventListener('click', logout);
  
  // Dashboard nav
  document.querySelectorAll('.dashboard-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.dataset.section;
      if (section) showDashboardSection(section);
    });
  });
  
  // Admin nav
  document.querySelectorAll('.admin-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = link.dataset.adminSection;
      if (section) showAdminSection(section);
    });
  });
  
  // Modal close
  document.querySelector('.modal-close').addEventListener('click', closeModal);
  document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') closeModal();
  });
  
  // Product filters
  document.getElementById('categoryFilter').addEventListener('change', () => {
    if (currentCategory) renderProducts(currentCategory);
  });
  
  document.getElementById('sortFilter').addEventListener('change', () => {
    if (currentCategory) renderProducts(currentCategory);
  });
  
  // Initialize
  updateTranslations();
  navigateToPage('home');
  updateCartBadge();
});