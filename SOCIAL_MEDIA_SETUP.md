# Social Media Preview Setup - ISL Pharmacy College

## ✅ Meta Tags Added Successfully

I've added comprehensive meta tags to your website so that when you share the link, it will show:
- College logo
- Title: "ISL Pharmacy College - Premier Pharmaceutical Education"
- Description with college details
- Professional preview image

---

## What Was Added

### 1. Open Graph Tags (Facebook, LinkedIn, WhatsApp)
```html
<meta property="og:title" content="ISL Pharmacy College - Premier Pharmaceutical Education">
<meta property="og:description" content="ISL Pharmacy College (ISLPC) - Approved by PCI | Affiliated to Osmania University...">
<meta property="og:image" content="https://islpharmacy.in/logo.jpg">
<meta property="og:url" content="https://islpharmacy.in/">
```

### 2. Twitter Card Tags
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="ISL Pharmacy College...">
<meta name="twitter:image" content="https://islpharmacy.in/logo.jpg">
```

### 3. SEO Meta Tags
```html
<meta name="description" content="ISL Pharmacy College - Premier pharmaceutical education...">
<meta name="keywords" content="ISL Pharmacy College, ISLPC, Pharmacy College...">
```

---

## How It Will Look When Shared

### WhatsApp / Facebook / LinkedIn
```
┌─────────────────────────────────────────┐
│  [ISL Pharmacy College Logo]            │
│                                         │
│  ISL Pharmacy College                   │
│  Premier Pharmaceutical Education       │
│                                         │
│  ISL Pharmacy College (ISLPC) -         │
│  Approved by PCI | Affiliated to        │
│  Osmania University | Approved by       │
│  Telangana Government                   │
│                                         │
│  islpharmacy.in                         │
└─────────────────────────────────────────┘
```

---

## Testing Your Social Media Preview

### Facebook Debugger
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter: `https://islpharmacy.in`
3. Click "Debug"
4. Click "Scrape Again" to refresh

### LinkedIn Post Inspector
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter: `https://islpharmacy.in`
3. Click "Inspect"

### Twitter Card Validator
1. Go to: https://cards-dev.twitter.com/validator
2. Enter: `https://islpharmacy.in`
3. Click "Preview card"

### WhatsApp
1. Clear WhatsApp cache (Settings > Storage > Clear)
2. Share the link in a chat
3. Preview should appear automatically

---

## 📸 Creating an Optimized Social Media Image

For best results, create a custom social media preview image:

### Recommended Image Specifications

**Optimal Size:**
- Width: 1200px
- Height: 630px
- Format: JPG or PNG
- File size: Under 1MB
- Aspect ratio: 1.91:1

**Safe Zone:**
- Keep important content in center 1200×600px
- Avoid text near edges (may be cropped on mobile)

### What to Include in the Image

1. **ISL Pharmacy College Logo** (centered, prominent)
2. **College Name** in large, readable text
3. **Key Information:**
   - "Approved by PCI"
   - "Affiliated to Osmania University"
   - "Approved by Telangana Government"
4. **College Code:** ISLPC
5. **Background:** Use college green colors (#1e5631, #2d7a3e)
6. **Contact:** meetislpcollege@gmail.com

### Design Template
```
┌────────────────────────────────────────────────┐
│                                                │
│         [ISL PHARMACY COLLEGE LOGO]            │
│                                                │
│          ISL PHARMACY COLLEGE                  │
│              (Code: ISLPC)                     │
│                                                │
│    ✓ Approved by PCI                          │
│    ✓ Affiliated to OSMANIA UNIVERSITY         │
│    ✓ Approved by TELANGANA GOVT.              │
│                                                │
│         Excellence in Pharmaceutical           │
│              Education & Research              │
│                                                │
│         meetislpcollege@gmail.com              │
│           www.islpharmacy.in                   │
│                                                │
└────────────────────────────────────────────────┘
```

---

## Creating the Social Media Image

### Option 1: Using Canva (Recommended)
1. Go to canva.com
2. Select "Custom Size" → 1200 x 630 px
3. Design template:
   - Background: Green gradient (#1e5631 to #2d7a3e)
   - Add college logo
   - Add text with college info
   - Export as JPG

### Option 2: Using Photoshop/GIMP
1. Create new file: 1200 x 630 px
2. Add background gradient
3. Place logo.jpg (centered, scaled to 300-400px)
4. Add text layers with college information
5. Save as "social-preview.jpg"

### Option 3: Using PowerPoint
1. Set slide size: 1200 x 630 px (Custom)
2. Add green gradient background
3. Insert logo image
4. Add text boxes with information
5. Export as JPG (File > Save As > JPG)

---

## Updating to Use Custom Social Image

Once you create `social-preview.jpg`, upload it to your website and update the meta tags:

### In index.html, change:
```html
<!-- OLD -->
<meta property="og:image" content="https://islpharmacy.in/logo.jpg">

<!-- NEW -->
<meta property="og:image" content="https://islpharmacy.in/social-preview.jpg">
```

```html
<!-- OLD -->
<meta name="twitter:image" content="https://islpharmacy.in/logo.jpg">

<!-- NEW -->
<meta name="twitter:image" content="https://islpharmacy.in/social-preview.jpg">
```

---

## Current Setup

**Image being used:** `logo.jpg`

**Why it might not show perfectly:**
- May not be optimized for social media dimensions (1200x630)
- Might appear small or cropped on some platforms

**Solution:** Create a custom social media preview image as described above.

---

## Platform-Specific Requirements

### Facebook & LinkedIn
- Minimum: 600 x 315 px
- Recommended: 1200 x 630 px
- Max file size: 8MB
- Format: JPG, PNG

### Twitter
- Minimum: 300 x 157 px
- Recommended: 1200 x 628 px
- Max file size: 5MB
- Format: JPG, PNG, WEBP, GIF

### WhatsApp
- Uses Open Graph tags (same as Facebook)
- Recommended: 1200 x 630 px
- Format: JPG, PNG

---

## Troubleshooting

### Link preview not showing?

**1. Clear Cache:**
- Facebook: Use Facebook Debugger and click "Scrape Again"
- LinkedIn: Use Post Inspector
- WhatsApp: Clear app cache

**2. Check Image URL:**
- Make sure image is publicly accessible
- Use full URL: `https://islpharmacy.in/logo.jpg`
- Test by opening image URL in browser

**3. Verify Meta Tags:**
- View page source (Right-click > View Page Source)
- Search for `og:image` and `twitter:image`
- Ensure URLs are correct

**4. Wait for Cache to Expire:**
- Some platforms cache for 24-48 hours
- May need to wait before preview updates

### Image not displaying correctly?

**Check:**
- Image size is 1200 x 630 px
- File size is under 1MB
- Image is JPG or PNG format
- Image is publicly accessible (not password-protected)
- Full HTTPS URL is used in meta tags

---

## Example Custom Social Preview Content

### Text to Include:
```
ISL PHARMACY COLLEGE
(Code: ISLPC)

✓ Approved by PCI
✓ Affiliated to Osmania University
✓ Approved by Telangana Government

Excellence in Pharmaceutical Education & Research

Shaping Future Healthcare Professionals

📧 meetislpcollege@gmail.com
🌐 www.islpharmacy.in
📍 Bandlaguda, India
```

### Design Colors:
- Primary Green: #1e5631
- Secondary Green: #2d7a3e
- Text: White (#FFFFFF)
- Accent: Gold (#d4af37) for highlights

---

## Quick Actions

### Immediate (Already Done ✅)
- ✅ Meta tags added to index.html
- ✅ Open Graph tags configured
- ✅ Twitter Card tags configured
- ✅ SEO meta tags added

### Recommended Next Steps
1. **Create custom social-preview.jpg** (1200x630px)
2. **Upload to website root**
3. **Update meta tags** to use new image
4. **Test on all platforms** using debugging tools
5. **Clear cache** on all platforms

---

## File Structure

After creating social media image:
```
islpharmacy.in/
├── index.html (✅ Updated with meta tags)
├── logo.jpg (Current preview image)
├── social-preview.jpg (Create this - 1200x630px)
└── [other files...]
```

---

## Resources

**Facebook Debugger:**
https://developers.facebook.com/tools/debug/

**LinkedIn Post Inspector:**
https://www.linkedin.com/post-inspector/

**Twitter Card Validator:**
https://cards-dev.twitter.com/validator

**Canva (Free Design Tool):**
https://www.canva.com

**Open Graph Protocol:**
https://ogp.me/

**Twitter Card Documentation:**
https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards

---

## Status

✅ **Meta tags:** ADDED  
✅ **Open Graph:** CONFIGURED  
✅ **Twitter Cards:** CONFIGURED  
✅ **SEO tags:** ADDED  
⏳ **Custom social image:** RECOMMENDED (optional but best practice)

**Your website is now ready to show previews when shared on social media!**

---

## Support

If previews still don't show after 24-48 hours:
1. Use platform debugging tools to check for errors
2. Verify image URLs are accessible
3. Check meta tags in page source
4. Consider creating custom 1200x630 image

**Last Updated:** 2026-08-30
