// App.js - Main Application Logic for Customer Store

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadState();
    displayProducts();
    updateCartDisplay();
});

// Display products
function displayProducts(category = 'همه') {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    let filtered = appState.products;
    if (category !== 'همه') {
        filtered = appState.products.filter(p => p.category === category);
    }
    
    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => openProductModal(product);
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.imageUrl}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/250?text=${encodeURIComponent(product.name)}'">
            </div>
            <div class="product-content">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <span class="product-stock">${product.stock > 0 ? 'موجود' : 'تمام شده'}</span>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Filter products by category
function filterProducts(category) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    displayProducts(category);
}

// Open product modal
function openProductModal(product) {
    const modal = document.getElementById('productModal');
    document.getElementById('modalProductImage').src = product.imageUrl;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductDescription').textContent = product.description;
    document.getElementById('modalProductPrice').textContent = formatPrice(product.price);
    document.getElementById('modalProductStock').textContent = product.stock > 0 ? 'موجود' : 'تمام شده';
    document.getElementById('quantityInput').value = 1;
    document.getElementById('quantityInput').max = product.stock;
    
    appState.currentProduct = product;
    modal.style.display = 'block';
}

// Close product modal
function closeProductModal() {
    document.getElementById('productModal').style.display = 'none';
    appState.currentProduct = null;
}

// Add to cart from modal
function addToCartFromModal() {
    const quantity = parseInt(document.getElementById('quantityInput').value);
    const product = appState.currentProduct;
    
    if (quantity > 0 && quantity <= product.stock) {
        addToCart(product.id, quantity);
        showNotification(`${product.name} به سبد خریدتان اضافه شد`);
        closeProductModal();
    } else {
        showNotification('تعداد انتخابی نامعتبر است', 'error');
    }
}

// Toggle cart
function toggleCart() {
    const modal = document.getElementById('cartModal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        displayCart();
        modal.style.display = 'block';
    }
}

// Display cart
function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = '';
    
    if (appState.cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666;">سبد خریدتان خالی است</p>';
        cartTotal.textContent = formatPrice(0);
        return;
    }
    
    let total = 0;
    
    appState.cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.productName}</div>
                <div class="cart-item-price">${formatPrice(item.price)} × ${item.quantity}</div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.productId})">حذف</button>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = formatPrice(total);
}

// Go to checkout
function goToCheckout() {
    if (appState.cart.length === 0) {
        showNotification('سبد خریدتان خالی است', 'error');
        return;
    }
    
    toggleCart();
    displayCheckout();
    document.getElementById('checkoutModal').style.display = 'block';
}

// Display checkout
function displayCheckout() {
    const summary = document.getElementById('orderSummary');
    summary.innerHTML = '';
    
    let subtotal = 0;
    
    appState.cart.forEach(item => {
        subtotal += item.price * item.quantity;
        const summaryItem = document.createElement('div');
        summaryItem.innerHTML = `
            <div style="display: flex; justify-content: space-between; margin: 10px 0; flex-direction: row-reverse;">
                <span>${item.productName} × ${item.quantity}</span>
                <span>${formatPrice(item.price * item.quantity)}</span>
            </div>
        `;
        summary.appendChild(summaryItem);
    });
    
    const totals = calculateOrderTotal(appState.cart, appState.products);
    
    const totalsDiv = document.createElement('div');
    totalsDiv.innerHTML = `
        <div style="border-top: 1px solid #ddd; margin-top: 15px; padding-top: 15px;">
            <div style="display: flex; justify-content: space-between; flex-direction: row-reverse;">
                <span>جمع کل:</span>
                <span>${formatPrice(totals.subtotal)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; flex-direction: row-reverse;">
                <span>حمل و نقل:</span>
                <span>${formatPrice(totals.shipping)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; flex-direction: row-reverse;">
                <span>مالیات:</span>
                <span>${formatPrice(totals.tax)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; flex-direction: row-reverse; font-weight: bold; font-size: 18px; margin-top: 10px;">
                <span>مجموع:</span>
                <span>${formatPrice(totals.total)}</span>
            </div>
        </div>
    `;
    
    summary.appendChild(totalsDiv);
}

// Confirm order
function confirmOrder(event) {
    event.preventDefault();
    
    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('customerAddress').value;
    
    if (!isValidEmail(email)) {
        showNotification('ایمیل نامعتبر است', 'error');
        return;
    }
    
    if (!isValidPhone(phone)) {
        showNotification('تلفن نامعتبر است', 'error');
        return;
    }
    
    const totals = calculateOrderTotal(appState.cart, appState.products);
    const orderId = generateOrderId();
    
    const newOrder = {
        id: appState.orders.length + 1,
        orderId: orderId,
        customerId: 0,
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        customerAddress: address,
        items: [...appState.cart],
        subtotal: totals.subtotal,
        shipping: totals.shipping,
        tax: totals.tax,
        total: totals.total,
        paymentStatus: 'در انتظار',
        paymentMethod: document.querySelector('input[name="payment"]:checked').value,
        orderStatus: 'در انتظار',
        orderDate: new Date().toISOString().split('T')[0],
        notes: ''
    };
    
    appState.orders.push(newOrder);
    appState.cart = [];
    saveState();
    
    closeCheckout();
    showOrderConfirmation(orderId, totals.total);
}

// Show order confirmation
function showOrderConfirmation(orderId, total) {
    document.getElementById('confirmationOrderId').textContent = orderId;
    document.getElementById('confirmationDate').textContent = formatPersianDate(new Date());
    document.getElementById('confirmationTotal').textContent = formatPrice(total);
    
    document.getElementById('confirmationModal').style.display = 'block';
    showNotification('سفارش شما با موفقیت ثبت شد');
}

// Close checkout
function closeCheckout() {
    document.getElementById('checkoutModal').style.display = 'none';
}

// Go home
function goHome() {
    document.getElementById('confirmationModal').style.display = 'none';
    updateCartDisplay();
    window.scrollTo(0, 0);
}

// Scroll to products
function scrollToProducts() {
    const element = document.getElementById('products');
    element.scrollIntoView({ behavior: 'smooth' });
}

// Close modals when clicking outside
window.onclick = function(event) {
    let modal = document.getElementById('cartModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
    
    modal = document.getElementById('productModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
    
    modal = document.getElementById('checkoutModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
    
    modal = document.getElementById('confirmationModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
