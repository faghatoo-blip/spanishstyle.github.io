# استیلو اسپانیول - فروشگاه آنلاین (Estilo Español - E-commerce Store)

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Language](https://img.shields.io/badge/Language-Persian%20%2F%20Farsi-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34C26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

یک فروشگاه آنلاین حرفه‌ای برای فروش محصولات اسپانیایی با رابط کاربری فارسی و طراحی RTL

**An e-commerce platform for selling Spanish products with Persian UI and RTL design**

---

## 🌟 فیچرهای اصلی | Key Features

### 👥 برای مشتریان | For Customers
- ✅ مرور کاتالوگ محصولات
- ✅ فیلتر کردن براساس دسته‌بندی
- ✅ اضافه کردن به سبد خریدتان
- ✅ سیستم پرداخت ساده
- ✅ دریافت تایید سفارش
- ✅ طراحی زیبای اسپانیایی
- ✅ فونت Dana اصل
- ✅ رابط کاربری RTL

### 🔧 برای مدیریت | For Administration
- 📊 پنل مدیریت جامع
- 📦 مدیریت محصولات (افزودن، ویرایش، حذف)
- 👥 مدیریت مشتریان
- 📋 ردیابی سفارشات
- 💰 پیگیری وضعیت پرداخت
- 📈 گزارش‌ها و آمار
- 🔐 سیستم احراز هویت

---

## 📁 ساختار پروژه | Project Structure

```
estilo-espanol-farsi/
├── index.html                          # صفحه اصلی
├── admin.html                          # پنل مدیریت
├── css/
│   ├── variables.css                   # متغیرهای CSS و طرح رنگی
│   ├── rtl.css                         # استایل‌های RTL
│   ├── style.css                       # استایل‌های اصلی
│   └── admin-style.css                 # استایل‌های پنل مدیریت
├── js/
│   ├── data.js                         # داده‌های نمونه
│   ├── utils.js                        # توابع کمکی
│   ├── app.js                          # منطق برنامه اصلی
│   └── admin.js                        # منطق پنل مدیریت
├── images/
│   ├── logo.png                        # لوگو
│   ├── hero-banner.jpg                 # بنر صفحه اصلی
│   ├── ceramic_plate.png               # تصویر بشقاب سرامیکی
│   ├── manton_madrid.png               # تصویر مانتیلا
│   ├── azulejo_decorativo.png          # تصویر کاشی
│   ├── products/                       # تصاویر محصولات
│   ├── categories/                     # تصاویر دسته‌بندی‌ها
│   └── icons/                          # آیکون‌ها
├── fonts/
│   └── dana-font-references.txt        # منابع فونت Dana
├── README.md                           # مستندات پروژه
├── INSTALLATION.md                     # راهنمای نصب
└── LICENSE                             # مجوز MIT
```

---

## 🚀 نحوه شروع | Getting Started

### پیش‌نیازها | Prerequisites
- مرورگر وب مدرن (Modern Web Browser)
- اتصال به اینترنت برای بارگذاری فونت‌های CDN

### نصب و اجرا | Installation

#### گزینه 1: استفاده مستقیم | Direct Use
```bash
# کلون کردن مخزن
git clone https://github.com/yourusername/estilo-espanol-farsi.git

# ورود به دایرکتوری
cd estilo-espanol-farsi

# باز کردن در مرورگر
# فایل index.html را باز کنید یا از Live Server استفاده کنید
```

#### گزینه 2: استفاده Live Server (VS Code)
```bash
# نصب افزونه Live Server در VS Code
# سپس روی index.html کلیک راست کنید
# "Open with Live Server" را انتخاب کنید
```

#### گزینه 3: استفاده Python Server
```bash
# برای Python 3
python -m http.server 8000

# سپس به آدرس زیر بروید
# http://localhost:8000
```

---

## 👤 ورود مدیریت | Admin Login

**آدرس:** `/admin` یا `admin.html`

**اطلاعات ورود | Credentials:**
- 👤 نام کاربری | Username: `admin`
- 🔑 رمز عبور | Password: `admin123`

---

## 🎨 طراحی و فونت | Design & Font

### فونت Dana
- **نام:** Dana Font
- **نوع:** فونت هندسی برای فارسی
- **منبع:** [Font API IR](https://fontapi.ir)
- **وزن‌ها:** Regular (400)، Medium (500)، Bold (700)، Black (900)
- **مزایا:**
  - حرف‌نویسی هندسی مدرن
  - سازگاری کامل با فارسی
  - عملکرد بهتر در سایز‌های کوچک
  - پشتیبانی اعداد فارسی

### طرح رنگی | Color Scheme
```css
--primary-color: #E07856;      /* خاکی | Terracotta */
--secondary-color: #C1292E;    /* قرمز تیره | Deep Red */
--accent-color: #F4C430;       /* طلایی | Golden */
--dark-accent: #8B4513;        /* قهوه‌ای | Brown */
```

---

## 📋 مدیریت داده‌ها | Data Management

### ذخیره‌سازی
- **روش:** JavaScript Objects & Arrays (In-Memory)
- **پایداری:** Local Storage (اختیاری)
- **داده‌های نمونه:** محصولات، مشتریان، سفارشات

### ساختار داده‌ها

**محصول:**
```javascript
{
    id: number,
    name: string,
    description: string,
    category: string,
    price: number,
    stock: number,
    imageUrl: string,
    status: 'فعال' | 'غیرفعال'
}
```

**مشتری:**
```javascript
{
    id: number,
    name: string,
    email: string,
    phone: string,
    address: string,
    registrationDate: string,
    totalOrders: number,
    totalSpent: number
}
```

**سفارش:**
```javascript
{
    id: number,
    orderId: string,
    customerId: number,
    customerName: string,
    items: Array,
    total: number,
    paymentStatus: string,
    orderStatus: string,
    orderDate: string
}
```

---

## 🔄 جریان کار | Workflow

### جریان مشتری | Customer Flow
1. 🏠 ورود به صفحه اصلی
2. 🔍 مرور و جستجوی محصولات
3. 📦 اضافه کردن به سبد خریدتان
4. 🛒 بررسی سبد خریدتان
5. 💳 تکمیل فرم پرداخت
6. ✅ تایید سفارش
7. 🎉 دریافت شماره تایید

### جریان مدیریت | Admin Flow
1. 🔐 ورود به پنل مدیریت
2. 📊 مشاهده داشبورد
3. 📦 مدیریت محصولات
4. 👥 مدیریت مشتریان
5. 📋 پیگیری سفارشات
6. 📈 مشاهده گزارش‌ها

---

## 🛠️ توسعه | Development

### تکنولوژی‌های استفاده شده | Technologies
- **HTML5:** ساختار سمانتیک
- **CSS3:** طراحی RTL و Responsive
- **Vanilla JavaScript:** بدون dependency
- **Dana Font:** فونت اصل فارسی
- **Local Storage:** ذخیره‌سازی داده‌ها

### توسعه‌دهندگان مشهور | Contributing

اگر می‌خواهید کمک کنید:
1. Fork کنید
2. شاخه‌ای جدید بسازید: `git checkout -b feature/amazing-feature`
3. تغییرات را Commit کنید: `git commit -m 'Add amazing feature'`
4. Push کنید: `git push origin feature/amazing-feature`
5. Pull Request بسازید

---

## 📱 پشتیبانی دستگاه‌ها | Browser Support

| مرورگر | نسخه |
|--------|------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

---

## ⚙️ تنظیمات | Configuration

### فعال کردن Local Storage
```javascript
// در utils.js تغییر دهید:
const useLocalStorage = true;
```

### تغییر فونت
```css
/* در variables.css تغییر دهید: */
--font-primary: 'Dana', sans-serif;
```

### تغییر طرح رنگی
```css
/* در variables.css رنگ‌ها را تغییر دهید */
--primary-color: #YOUR_COLOR;
```

---

## 🐛 حل مشکلات | Troubleshooting

### مشکل: فونت نمایش نمی‌یابد
**راه حل:**
- اطمینان از اتصال اینترنت
- تصفیه کش مرورگر (Ctrl + Shift + Del)
- بررسی اتصال CDN

### مشکل: داده‌ها ذخیره نمی‌شود
**راه حل:**
- Local Storage فعال شود
- حالت Private/Incognito را خاموش کنید
- مرورگر را بازنشانی کنید

### مشکل: RTL صحیح نیست
**راه حل:**
- بررسی attribute `dir="rtl"` در HTML
- پاک‌سازی کش CSS

---

## 📚 مستندات بیشتر | More Documentation

- [نحوه نصب | Installation Guide](INSTALLATION.md)
- [راهنمای کاربر مشتری | Customer Guide](docs/customer-guide.md)
- [راهنمای مدیریت | Admin Guide](docs/admin-guide.md)
- [درباره Dana Font | About Dana Font](docs/dana-font.md)

---

## 📄 مجوز | License

این پروژه تحت مجوز MIT منتشر شده است. برای اطلاعات بیشتر [LICENSE](LICENSE) را ببینید.

```
MIT License

Copyright (c) 2025 Estilo Español

Permission is hereby granted, free of charge...
```

---

## 📞 تماس و پشتیبانی | Contact & Support

- 📧 **ایمیل:** support@estilo-espanol.com
- 💬 **مسائل:** [Issues](https://github.com/yourusername/estilo-espanol-farsi/issues)
- 📝 **درخواست‌ها:** [Pull Requests](https://github.com/yourusername/estilo-espanol-farsi/pulls)

---

## ⭐ نشان دهنده | Show Your Support

اگر این پروژه برای شما مفید بود، لطفا ⭐ بگذارید!

---

## 🙏 تشکر | Acknowledgments

- Dana Font برای فونت اصل فارسی
- [Font API IR](https://fontapi.ir) برای CDN
- تیم Tecnicas Reunidas
- تمام مشارکین

---

**ساخته شده با ❤️ برای ایرانی‌ها**  
*Built with ❤️ for Iranians*

---

**آخرین به‌روزرسانی:** `1403/08/18`  
**Last Updated:** `2025/11/09`
