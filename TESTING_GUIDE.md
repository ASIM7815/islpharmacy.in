# Responsive Navbar Testing Guide

## Quick Test Checklist

### ✅ Mobile View (< 768px width)

1. **Visual Check**
   - [ ] Green gradient background on header
   - [ ] ISL logo has green background
   - [ ] College name is white colored
   - [ ] Affiliation text is visible and white
   - [ ] Certification logos are hidden
   - [ ] Hamburger menu icon visible (top right)
   - [ ] Top bar is hidden

2. **Functionality Check**
   - [ ] Click hamburger → full-screen green menu opens
   - [ ] Menu items are visible and white
   - [ ] Click X or overlay → menu closes
   - [ ] Press Escape key → menu closes
   - [ ] Click any menu item → menu closes and navigates

### ✅ Desktop View (≥ 768px width)

1. **Visual Check**
   - [ ] Light gray background (#E8ECE9) on header
   - [ ] Green border at bottom of header
   - [ ] Top bar is visible above header
   - [ ] All logos visible (main, certifications, IIC, Innovation)
   - [ ] College name is dark green
   - [ ] Affiliation text visible and gray
   - [ ] Hamburger menu is hidden
   - [ ] Desktop menu visible horizontally

2. **Functionality Check**
   - [ ] Menu items clickable
   - [ ] Hover effects work on menu items
   - [ ] All top bar links functional

### ✅ Responsive Transition Test

1. **Mobile → Desktop**
   - [ ] Open mobile menu (hamburger)
   - [ ] Resize browser window wider (past 768px)
   - [ ] Mobile menu automatically closes
   - [ ] Desktop navbar appears correctly

2. **Desktop → Mobile**
   - [ ] Start with desktop view
   - [ ] Resize browser window narrower (below 768px)
   - [ ] Mobile navbar appears correctly
   - [ ] Hamburger menu appears
   - [ ] Desktop menu disappears

## Browser Testing

Test on the following:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Screen Size Testing

Test at these specific widths:
- [ ] 320px (small phone)
- [ ] 375px (iPhone SE)
- [ ] 414px (iPhone Pro Max)
- [ ] 767px (max mobile)
- [ ] 768px (min tablet/desktop)
- [ ] 1024px (tablet)
- [ ] 1440px (desktop)
- [ ] 1920px (large desktop)

## Common Issues to Watch For

### ❌ Problems That Should NOT Occur:
1. Mobile menu staying open when resizing to desktop
2. Hamburger visible on desktop
3. Desktop menu visible on mobile
4. Navigation to mobile-menu.html page
5. White text on light background
6. Overlapping elements
7. Horizontal scroll on mobile

### ✅ Expected Behavior:
1. Smooth automatic transitions
2. Menu closes when resizing from mobile to desktop
3. All styles reset properly when switching views
4. No page navigation for menu toggle
5. Proper color contrast at all screen sizes

## Manual Testing Steps

### Step 1: Mobile Testing
```
1. Open index.html in browser
2. Set browser width to 375px (use DevTools)
3. Verify mobile navbar appearance
4. Click hamburger to open menu
5. Test all menu interactions
6. Click a menu item to test navigation
```

### Step 2: Desktop Testing
```
1. Set browser width to 1200px
2. Verify desktop navbar appearance
3. Check all logos are visible
4. Verify top bar is visible
5. Test menu item hover states
6. Test all menu item navigation
```

### Step 3: Transition Testing
```
1. Start at mobile width (375px)
2. Open mobile menu
3. Slowly resize to 768px
4. Verify menu closes automatically
5. Verify desktop navbar appears
6. Resize back to mobile
7. Verify mobile navbar reappears
```

## Performance Check

- [ ] No console errors
- [ ] Smooth animations
- [ ] Resize handler doesn't lag
- [ ] No layout shift on load
- [ ] Images load properly
- [ ] Touch events work smoothly

## Accessibility Check

- [ ] Hamburger button has proper aria-label
- [ ] Menu items are keyboard accessible
- [ ] Escape key closes menu
- [ ] Focus management works properly
- [ ] Color contrast meets WCAG standards
- [ ] Touch targets are minimum 44x44px

## Notes

- The breakpoint is exactly **768px**
- Mobile = width < 768px
- Desktop = width ≥ 768px
- Resize listener uses 250ms debounce for performance
- All !important flags are intentional to ensure desktop navbar restores properly
