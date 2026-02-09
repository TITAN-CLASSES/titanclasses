# Titan Classes - Premium Website

## 🎨 Design Overview

This is a complete redesign of the Titan Classes website with a **premium, modern, and trustworthy** aesthetic. 

### Design Highlights:
- **Dark Premium Theme**: Sophisticated color palette with accent gradients
- **Distinctive Typography**: Playfair Display (headings) + DM Sans (body) for elegance
- **Interactive Role Switching**: Smooth transitions between Parent/Teacher/Student content
- **Chronological Founder Journey**: Timeline-based storytelling with mindmap format
- **Trust-Building Elements**: Stats, testimonials, and transparent business model
- **Responsive Design**: Mobile-first approach with perfect scaling

---

## 📁 Files Included

1. **index.html** - Main homepage with role-based content
2. **founder.html** - Dedicated founder page with Ishaan's journey
3. **styles.css** - Complete design system with premium aesthetics
4. **script.js** - Interactive functionality for role switching
5. **founder.jpg** - Your profile photo
6. **logo.png** - Titan Classes logo

---

## 🚀 Installation Instructions

### Option 1: GitHub Pages (Recommended)

1. **Create a new repository** on GitHub named `titanclasses`
2. **Upload all files** to the repository
3. Go to **Settings** → **Pages**
4. Under "Source", select **main branch**
5. Your site will be live at: `https://yourusername.github.io/titanclasses`

### Option 2: Hostinger (Current Setup)

1. **Login to Hostinger** control panel
2. Go to **File Manager**
3. Navigate to `public_html` folder
4. **Delete all existing files**
5. **Upload all new files** from this package
6. Your site will update at: `www.titanclasses.com`

### Option 3: Quick Test Locally

1. Download all files to a folder
2. Open `index.html` in any browser
3. Test all functionality before uploading

---

## 🎯 Key Features

### Homepage (index.html)
✅ **Coming Soon Banner** - Subtle notification about AI platform
✅ **Interactive Role Selector** - Three buttons: Parent/Teacher/Student
✅ **Dynamic Content Switching** - Each role shows different content
✅ **Trust Indicators** - Stats bar with 6,000+ screened, 400+ teachers
✅ **Clear CTAs** - WhatsApp demo booking & teacher applications
✅ **Premium Imagery** - High-quality stock photos (will auto-load from URLs)

### Founder Page (founder.html)
✅ **Hero Section** - Your photo with founder credentials
✅ **5-Phase Timeline** - Chronological journey from struggle to success:
   1. The Struggle (Middle-class reality)
   2. The Social Impact (First students)
   3. The Innovation (Breaking bureau model)
   4. The Business Model (Trust engine system)
   5. Today (Scaling the vision)
✅ **Visual Mindmap** - Each phase shows progression with icons & cards
✅ **Business Model Breakdown** - Old vs. New comparison
✅ **Revenue Innovation Explanation** - Interest on float + recurring commission
✅ **Philosophy Quote** - "Turn Constraints into Opportunities"

---

## 🎨 Design Customization

### Changing Colors

Open `styles.css` and modify the CSS variables at the top:

```css
:root {
    --primary: #0A0E27;        /* Main background */
    --accent: #4F46E5;         /* Primary accent color */
    --gold: #F59E0B;           /* Secondary accent */
}
```

### Changing Fonts

Replace the Google Fonts link in both HTML files:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR-FONT&display=swap" rel="stylesheet">
```

Then update CSS:
```css
--font-display: 'Your Display Font', serif;
--font-body: 'Your Body Font', sans-serif;
```

### Updating Logo

Replace `logo.png` with your updated logo. For best results:
- **Format**: PNG with transparent background
- **Size**: 200x200px minimum
- **White/Light colored** logo works best on dark theme

---

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (Full grid layout)
- **Tablet**: 768px - 1199px (2-column layout)
- **Mobile**: Below 768px (Single column, stacked)

---

## 🔗 Important Links to Update

### In index.html:
- Line 23: WhatsApp number link
- Line 107: WhatsApp demo booking link
- Line 108: WhatsApp channel link
- Line 142: Teacher application form
- Line 161: Teacher application form

### In founder.html:
- Similar WhatsApp links throughout

**Current Number**: +91 8595592991  
**Update all instances** if you change phone numbers.

---

## ✨ Advanced Features

### Add Analytics
Add Google Analytics tracking code before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

### Add Chatbot (Optional)
Add this before `</body>`:

```html
<!-- Chatbot Widget -->
<script>
  // Your chatbot integration code
</script>
```

---

## 🐛 Troubleshooting

### Logo Not Showing
- Check file is named exactly `logo.png`
- Ensure it's in the same folder as `index.html`
- Try clearing browser cache (Ctrl+Shift+R)

### Fonts Not Loading
- Check internet connection (fonts load from Google)
- Try using different browser
- Can download fonts and host locally if needed

### Role Switching Not Working
- Check `script.js` is loading
- Open browser console (F12) for errors
- Ensure JavaScript is enabled

---

## 📊 SEO Optimization

### Add to `<head>` of both HTML files:

```html
<!-- SEO Meta Tags -->
<meta name="description" content="Titan Classes - India's most trusted home tuition network. 1-on-1 mentorship from 400+ verified teachers. Book free demo today!">
<meta name="keywords" content="home tuition, Delhi tuition, online tuition, personal mentor, Titan Classes">
<meta name="author" content="Ishaan Adarsh">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.titanclasses.com/">
<meta property="og:title" content="Titan Classes - Next-Gen Elite EdTech">
<meta property="og:description" content="Elite 1-on-1 mentorship. Verified educators. Transparent pricing.">
<meta property="og:image" content="https://www.titanclasses.com/logo.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://www.titanclasses.com/">
<meta property="twitter:title" content="Titan Classes - Next-Gen Elite EdTech">
<meta property="twitter:description" content="Elite 1-on-1 mentorship. Verified educators. Transparent pricing.">
<meta property="twitter:image" content="https://www.titanclasses.com/logo.png">
```

---

## 🎯 Future Enhancements

### Suggested Additions:
1. **Testimonials Section** - Add parent/student reviews
2. **Teacher Profiles** - Showcase top teachers
3. **Blog Section** - Educational content for SEO
4. **Live Chat Widget** - Instant parent support
5. **Booking Calendar** - Demo slot selection
6. **Payment Gateway** - Direct online payments

---

## 📞 Support

For customization help or questions:
- **Email**: titanclasses24@gmail.com
- **WhatsApp**: +91 8595592991

---

## 🏆 Credits

**Design & Development**: Claude (Anthropic)  
**Founded by**: Ishaan Adarsh  
**Established**: 2024

---

## 📝 License

© 2024-2026 Titan Classes. All rights reserved.

---

**Built with care for India's education revolution! 🚀**
