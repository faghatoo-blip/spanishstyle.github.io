// Admin.js - Admin Panel Logic

// Admin credentials
const ADMIN_CREDENTIALS = {
    username: "admin",
    password: "admin123"
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadState();
    checkAdminLogin();
});

// Check if admin is logged in
function checkAdminLogin() {
    const isLoggedIn = sessionStorage.getItem('adminLoggedIn');
    if (isLoggedIn === 'true') {
        showDashboard();
        loadDashboardData();
    } else {
        showLoginPage();
    }
}

// Show login page
function showLoginPage() {
    document.getElementById('loginPage').style.display = 'flex';
    document.getElementById('adminDashboard').style.display = 'none';
}

// Show dashboard
function showDashboard() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'flex';
}

// Handle login
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
        sessionStorage.setItem('adminLoggedIn', 'true');
        document.getElementById('adminUsername').textContent = username;
        showDashboard();
        loadDashboardData();
        showNotification('خوش آمدید!');
    } else {
        showNotification('نام کاربری یا رمز عبور اشتباه است', 'error');
    }
}

// Handle logout
function handleLogout() {
    if (confirm('آیا مطمئن هستید که می‌خواهید خارج شوید؟')) {
        sessionStorage.setItem('adminLoggedIn', 'false');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        showLoginPage();
        showNotification('خروج موفق');
    }
}

// Switch tabs
function switchTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.for

