# Spanish Style - Web Design Setup Guide

## Modifications Completed

Your MultiShop website has been successfully updated with the following changes:

### 1. **Language & Font**
- ✓ Set to **Persian (Farsi)** as default language
- ✓ Applied **Dana font** for all text elements
- ✓ Enabled **RTL (Right-to-Left)** text direction throughout all pages
- ✓ Font family stack: Dana → Roboto → sans-serif

### 2. **Color Scheme**
- ✓ Primary Color: **Red (#DC143C)** - Crimson Red
- ✓ Secondary Color: **Yellow (#FFD700)** - Gold
- Updated all buttons, badges, navigation, and accent colors
- Maintains professional Spanish style with warm colors

### 3. **Header & Branding**
- ✓ Main header updated to: **"Spanish Style"**
- ✓ Original tagline updated with Persian/English bilingual text
- ✓ Applied to all pages for consistent branding

### 4. **Gran Via Street Store Images**

The carousel on the homepage now references Gran Via store images. You need to replace these placeholder image names with actual photos:

**Location to update:** `img/` folder in your project

**Files to replace:**
1. `img/carousel-1.jpg` → H&M Store on Gran Via (or similar flagship store)
2. `img/carousel-2.jpg` → Zara Store on Gran Via (or similar luxury brand)
3. `img/carousel-3.jpg` → Gran Via Street General View (multiple brand stores)

**Recommended image sources:**
- H&M Flagship Store on Gran Via (famous for classical architecture)
- Zara Store on Gran Via 
- Primark on Gran Via
- OYSHO Store on Gran Via
- General Gran Via shopping street view showing multiple stores

### 5. **Updated Files**
All the following files have been modified and are ready to use:
- ✓ `index.html` - Homepage with "Spanish Style" header
- ✓ `shop.html` - Shop page with new styling
- ✓ `cart.html` - Shopping cart page
- ✓ `checkout.html` - Checkout page
- ✓ `contact.html` - Contact page

## Next Steps

### To Complete Your Site:

1. **Add Gran Via Images**
   - Download or obtain high-quality photos of Gran Via street brand stores
   - Save them as:
     - `carousel-1.jpg` (H&M or flagship store)
     - `carousel-2.jpg` (Zara or luxury store)
     - `carousel-3.jpg` (Street view with multiple stores)
   - Place them in the `img/` folder of your project

2. **Font Installation (Optional)**
   - The Dana font is loaded from CDN (https://fonts.rastikhane.ir/fonts/dana/dana.css)
   - If you want to host it locally, download from: https://www.rastikhane.ir/
   - Store in your project and update the link in the HTML head

3. **Deploy to Netlify**
   - Upload all files to your Netlify site
   - The site will automatically serve with the new Persian/Red&Yellow styling
   - Your domain (spanishstyle.org) will display the updated website

## Technical Details

### RTL Implementation
```html
<body dir="rtl">
    <!-- Content flows right-to-left -->
</body>
```

### Dana Font Integration
```css
@import url('https://fonts.rastikhane.ir/fonts/dana/dana.css');
* {
    font-family: "Dana", "Roboto", sans-serif;
}
```

### Color Codes Used
- **Primary Red**: `#DC143C` (Crimson)
- **Secondary Gold**: `#FFD700` (Gold/Yellow)
- **Hover Red**: `#B22222` (Darker Red)
- **Light Cream**: `#FFF8DC` (Floral White)

## Support

If you need to modify:
- **Colors**: Search for `#DC143C` and `#FFD700` in the HTML files
- **Language**: All text is now in Persian. For bilingual content, edit the specific page
- **Font**: Change "Dana" to another Persian font in the CSS (try: Vazir, Shabnam, or IRANSans)

---

**Project Name:** Spanish Style E-Shop
**Language:** Persian (RTL)
**Theme Colors:** Red & Yellow
**Last Updated:** November 7, 2025
