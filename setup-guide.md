# 📦 Estilo Español - Complete Package Guide

## 📥 بسته کامل پروژه | Complete Project Package

این بسته شامل کل فایل‌های لازم برای استقرار فروشگاه آنلاین استیلو اسپانیول است.

This package contains all necessary files for deploying the Estilo Español e-commerce store.

---

## 📋 فهرست فایل‌ها | File Checklist

### ✅ فایل‌های HTML
- [ ] `index.html` - صفحه اصلی فروشگاه | Customer storefront
- [ ] `admin.html` - پنل مدیریت | Admin panel
- [ ] `admin-login.html` - صفحه ورود مدیریت | Admin login page

### ✅ فایل‌های CSS
- [ ] `css/variables.css` - متغیرهای CSS و رنگ‌ها | CSS variables and colors
- [ ] `css/rtl.css` - استایل‌های RTL | RTL styles
- [ ] `css/style.css` - استایل اصلی | Main styles
- [ ] `css/admin-style.css` - استایل پنل مدیریت | Admin panel styles

### ✅ فایل‌های JavaScript
- [ ] `js/data.js` - داده‌های نمونه | Sample data
- [ ] `js/utils.js` - توابع کمکی | Utility functions
- [ ] `js/app.js` - منطق برنامه اصلی | Main app logic
- [ ] `js/admin.js` - منطق پنل مدیریت | Admin panel logic

### ✅ تصاویر | Images
- [ ] `images/logo.png` - لوگو استیلو اسپانیول | Logo
- [ ] `images/hero-banner.jpg` - بنر صفحه اصلی | Hero banner
- [ ] `images/ceramic_plate.png` - بشقاب سرامیکی | Ceramic plate
- [ ] `images/manton_madrid.png` - مانتیلا | Mantón
- [ ] `images/azulejo_decorativo.png` - کاشی تزیینی | Azulejo tile

### ✅ مستندات | Documentation
- [ ] `README.md` - مستندات اصلی | Main documentation
- [ ] `README-FARSI.md` - مستندات فارسی | Farsi documentation
- [ ] `INSTALLATION.md` - راهنمای نصب | Installation guide
- [ ] `LICENSE` - مجوز MIT | MIT License
- [ ] `SETUP-GUIDE.md` - این فایل

---

## 🚀 راهنمای نصب و راه‌اندازی | Installation & Setup Guide

### مرحله 1: آماده‌سازی | Preparation

```bash
# پوشه پروژه را بسازید
mkdir estilo-espanol-farsi
cd estilo-espanol-farsi

# ساختار دایرکتوری‌ها را بسازید
mkdir -p css js images images/products images/categories images/icons
```

### مرحله 2: کپی کردن فایل‌ها | Copy Files

```bash
# فایل‌های HTML را کپی کنید
cp index.html .
cp admin.html .
cp admin-login.html .

# فایل‌های CSS را کپی کنید
cp css/*.css css/

# فایل‌های JavaScript را کپی کنید
cp js/*.js js/

# تصاویر را کپی کنید
cp images/* images/

# مستندات را کپی کنید
cp README.md .
cp README-FARSI.md .
cp LICENSE .
```

### مرحله 3: آپلود به GitHub | Upload to GitHub

```bash
# مخزن Git را مقداردهی کنید
git init

# تمام فایل‌ها را اضافه کنید
git add .

# تغییرات را Commit کنید
git commit -m "Initial commit: Estilo Español e-commerce store with Persian UI"

# به GitHub اضافه کنید
git remote add origin https://github.com/yourusername/estilo-espanol-farsi.git
git branch -M main
git push -u origin main
```

### مرحله 4: راه‌اندازی محلی | Local Setup

#### گزینه الف: Direct File Open
```bash
# فایل index.html را در مرورگر باز کنید
# (درست کار می‌کند برای کاربری ساده)
open index.html
```

#### گزینه ب: Live Server (VS Code)
```bash
# 1. VS Code را باز کنید
code .

# 2. افزونه "Live Server" را نصب کنید

# 3. روی index.html کلیک راست کنید
# "Open with Live Server" را انتخاب کنید
```

#### گزینه ج: Python HTTP Server
```bash
# Python 3 را استفاده کنید
python -m http.server 8000

# سپس به آدرس زیر بروید
# http://localhost:8000
```

#### گزینه د: Node.js HTTP Server
```bash
# http-server را نصب کنید
npm install -g http-server

# سرور را شروع کنید
http-server

# به آدرس زیر بروید
# http://localhost:8080
```

---

## 🔑 آزمایش سریع | Quick Test

### 1. صفحه اصلی | Homepage
```
URL: http://localhost:8000 یا فایل index.html
✓ باید محصولات نمایش داده شود
✓ باید فونت Dana دیده شود
✓ باید نص فارسی صحیح نمایش داده شود
```

### 2. سبد خریدتان | Shopping Cart
```
✓ کلیک بر روی محصول → باید modal باز شود
✓ اضافه کردن به سبد → counter تغییر کند
✓ سبد → لیست محصولات نمایش داده شود
```

### 3. پرداخت | Checkout
```
✓ کلیک "رفتن به پرداخت"
✓ فرم را پر کنید
✓ تایید → تایید سفارش نمایش داده شود
```

### 4. پنل مدیریت | Admin Panel
```
URL: http://localhost:8000/admin.html
Username: admin
Password: admin123

✓ ورود درست کار کند
✓ داشبورد نمایش داده شود
✓ بخش‌های مختلف قابل دسترسی باشد
```

---

## 📊 ساختار داده‌ها | Data Structure

### محصولات | Products
```javascript
{
  id: 1,
  name: "بشقاب سرامیکی اندلسی",
  category: "سرامیک",
  price: 35.00,
  stock: 15,
  imageUrl: "images/ceramic_plate.png"
}
```

### مشتریان | Customers
```javascript
{
  id: 1,
  name: "مریم گارسیا لوپز",
  email: "email@example.com",
  phone: "+98 912 3456789",
  address: "آدرس"
}
```

### سفارشات | Orders
```javascript
{
  id: 1,
  orderId: "ORD-2025-0001",
  customerName: "نام مشتری",
  items: [...],
  total: 82.00,
  orderStatus: "در انتظار"
}
```

---

## 🎨 شخصی‌سازی | Customization

### تغییر رنگ‌ها | Change Colors
```css
/* css/variables.css میں تغییر دیں */

--primary-color: #E07856;      /* رنگ اصلی */
--secondary-color: #C1292E;    /* رنگ ثانویه */
--accent-color: #F4C430;       /* رنگ تاکید */
```

### تغییر متن | Change Text
```javascript
/* js/data.js میں تغییر دیں */

const productsData = [
  {
    name: "نام محصول جدید",
    description: "توضیحات"
  }
]
```

### تغییر تصاویر | Change Images
```html
<!-- index.html میں تغییر دیں -->

<img src="path/to/your/image.jpg" alt="توضیح">
```

---

## 🔒 امنیت | Security

### ورود مدیریت | Admin Login
- فعلی: `admin` / `admin123`
- **⚠️ توجه:** در محیط تولیدی رمز را تغییر دهید

### بهبود امنیت | Security Improvements
```javascript
// 1. رمز را hash کنید (مثال با bcrypt)
// 2. HTTPS استفاده کنید
// 3. Rate limiting بگذارید
// 4. Input validation افزایش دهید
// 5. CSRF protection اضافه کنید
```

---

## 🚀 استقرار | Deployment

### Netlify
```bash
# درایو نشانی
git push origin main

# یا manual
# 1. https://netlify.com میروید
# 2. مخزن GitHub را انتخاب می‌کنید
# 3. Deploy!
```

### Vercel
```bash
# نصب Vercel CLI
npm i -g vercel

# استقرار
vercel
```

### GitHub Pages
```bash
# Repo settings میروید
# Pages → Branch: main → Save

# URL: https://username.github.io/estilo-espanol-farsi
```

---

## 📱 اختبار در دستگاه‌های مختلف | Device Testing

```bash
# Responsive Design Testing
Chrome DevTools → Toggle device toolbar (F12)

# Test breakpoints:
✓ Mobile: 320px - 640px
✓ Tablet: 641px - 1024px
✓ Desktop: 1025px+

# Test browsers:
✓ Chrome 90+
✓ Firefox 88+
✓ Safari 14+
✓ Edge 90+
```

---

## 🆘 حل مشکلات | Troubleshooting

### مشکل: فایل‌ها لود نمی‌شوند
```
✓ Path فایل‌ها را بررسی کنید
✓ Case sensitivity را بررسی کنید (فایل‌های CSS/JS)
✓ کنسول مرورگر را برای خطا چک کنید (F12)
```

### مشکل: فونت Dana لود نمی‌شود
```
✓ اتصال اینترنت را بررسی کنید
✓ CDN قابل دسترسی است؟ 
✓ کش را پاک کنید (Ctrl + Shift + Del)
```

### مشکل: داده‌ها ذخیره نمی‌شود
```
✓ Local Storage فعال است؟
✓ حالت Private/Incognito را خاموش کنید
✓ کنسول را برای خطا چک کنید
```

### مشکل: RTL صحیح نیست
```
✓ dir="rtl" در HTML است؟
✓ CSS direction: rtl; دارد؟
✓ margin/padding به سمت درست هست؟
```

---

## 📚 منابع | Resources

### فونت Dana
- 🔗 [Font API IR](https://fontapi.ir)
- 📖 [Dana Font Documentation](https://noonfont.com/en/dana)

### طراحی RTL
- 📖 [W3C RTL Best Practices](https://www.w3.org/International/)
- 📖 [MDN - RTL CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/direction)

### توسعه
- 📖 [MDN - Web Docs](https://developer.mozilla.org)
- 📖 [W3Schools](https://www.w3schools.com)

---

## 📝 Checklist قبل از انتشار | Pre-Launch Checklist

- [ ] تمام فایل‌ها بارگذاری شدند
- [ ] تصاویر بارگذاری شدند
- [ ] فونت‌ها بارگذاری شدند
- [ ] لینک‌ها درست کار می‌کنند
- [ ] مرورگرهای مختلف اختبار شدند
- [ ] دستگاه‌های موبایل اختبار شدند
- [ ] داده‌های نمونه درست هستند
- [ ] رمز مدیریت تغییر یافت
- [ ] HTTPS فعال است
- [ ] SEO بهینه شده است

---

## 🎯 مراحل بعدی | Next Steps

1. **شخصی‌سازی:**
   - لوگو خود را اضافه کنید
   - متن را تغییر دهید
   - رنگ‌ها را تغییر دهید

2. **محصولات:**
   - محصولات واقعی اضافه کنید
   - تصاویر بهتر بارگذاری کنید
   - قیمت‌ها را تغییر دهید

3. **عملکرد:**
   - سیستم پرداخت واقعی اضافه کنید
   - ایمیل‌های خودکار فعال کنید
   - Analytics اضافه کنید

4. **امنیت:**
   - SSL/HTTPS فعال کنید
   - رمز مدیریت قوی‌تر کنید
   - Database حقیقی استفاده کنید

---

## 📞 پشتیبانی | Support

اگر سوال دارید:
1. README را مجدد بخوانید
2. Troubleshooting را چک کنید
3. Issue را در GitHub باز کنید
4. ایمیل ارسال کنید

---

**✨ آماده هستید؟ شروع کنید! | Ready? Let's go!**

**برای پشتیبانی: support@estilo-espanol.com**

---

**نسخه:** 1.0.0  
**آخرین به‌روزرسانی:** 1403/08/18  
**Status:** ✅ آماده برای تولید | Ready for Production
