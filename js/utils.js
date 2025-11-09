// Utils.js - Utility Functions

// Formatting functions
function formatPersianDate(date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Intl.DateTimeFormat('fa-IR').format(new Date(date));
}

function formatPrice(price) {
    return new Intl.NumberFormat('fa-IR', {
        style: 'currency',
        currency: 'EUR'
    }).format(price);
}

function formatPersianNumber(num) {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return String(num).replace(/\d/g, x => persianDigits[x]);
}

// Generate unique ID
function generateOrderId() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(4, '0');
    return `ORD-${year}-${random}`;
}

// Validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Validate phone
function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.length >= 10;
}

// Calculate order total
function calculateOrderTotal(items, products) {
    let subtotal = 0;
    
    items.forEach(item => {
        subtotal += item.quantity * item.price;
    });
    
    const shipping = 5.00;
    const tax = subtotal * 0.10;
    const total = subtotal + shipping + tax;
    
    return { subtotal, shipping, tax, total };
}

// Local storage simulation (for data persistence)
let appState = {
    cart: [],
    currentProduct: null,
    adminUser: null,
    products: [...productsData],
    customers: [...customersData],
    orders: [...ordersData]
};

// Save state to local storage
function saveState() {
    try {
        localStorage.setItem('appState', JSON.stringify(appState));
    } catch (e) {
        console.log('localStorage not available, using memory storage');
    }
}

// Load state from local storage
function loadState() {
    try {
        const saved = localStorage.getItem('appState');
        if (saved) {
            appState = JSON.parse(saved);
        }
    } catch (e) {
        console.log('Could not load from localStorage');
    }
}

// Add to cart
function addToCart(productId, quantity) {
    const product = appState.products.find(p => p.id === productId);
    if (!product) return false;
    
    const cartItem = appState.cart.find(item => item.productId === productId);
    
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        appState.cart.push({
            productId: product.id,
            productName: product.name,
            price: product.price,
            quantity: quantity
        });
    }
    
    saveState();
    updateCartDisplay();
    return true;
}

// Remove from cart
function removeFromCart(productId) {
    appState.cart = appState.cart.filter(item => item.productId !== productId);
    saveState();
    updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const count = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = formatPersianNumber(count);
    }
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        background-color: ${type === 'success' ? '#27AE60' : '#E74C3C'};
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 9999;
        animation: slideIn 0.3s ease-in;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Load initial state
loadState();
