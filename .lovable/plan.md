
# Create Brand Favicon for Serenity Yoga

Create a custom favicon that represents the Serenity Yoga brand identity and update all favicon/metadata references throughout the site.

## Summary

Design and implement a brand-appropriate favicon using the existing color palette (sage green #9CAF88) and zen aesthetic, then update the HTML to reference it properly and ensure all meta tags are brand-consistent.

---

## Changes Required

### 1. Generate Brand Favicon
**Action:** Create a custom favicon using AI image generation

Design concept:
- **Icon**: Simple lotus flower or yoga/meditation silhouette
- **Color**: Sage green (#9CAF88) - the brand's primary color
- **Style**: Minimalist, zen-inspired, clean lines
- **Format**: PNG for modern browsers with ICO fallback

The favicon will embody the "Serenity Yoga" brand values:
- Inner peace (lotus symbolism)
- Mindfulness (clean, uncluttered design)
- Nature connection (sage green color)

### 2. Update index.html - Favicon References
**File:** `index.html`

Add proper favicon link tags (currently missing):
```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

### 3. Update index.html - OpenGraph/Twitter Meta Images
**File:** `index.html`

Current meta tags reference Lovable's default image. Update to brand-appropriate:
- Line 13: `og:image` → Update to Serenity Yoga branded image
- Line 17: `twitter:image` → Update to Serenity Yoga branded image

### 4. Create Multiple Favicon Sizes
**Location:** `public/` directory

Generate and save:
| File | Size | Purpose |
|------|------|---------|
| `favicon.ico` | 32x32 | Legacy browser support |
| `favicon-16x16.png` | 16x16 | Small browser tabs |
| `favicon-32x32.png` | 32x32 | Standard browser tabs |
| `apple-touch-icon.png` | 180x180 | iOS home screen |

---

## Implementation Steps

1. Generate sage green lotus/yoga favicon using AI image generation
2. Copy favicon files to `public/` directory
3. Update `index.html` with:
   - Favicon link tags
   - Updated OG/Twitter image references
4. Verify favicon appears in browser tab

---

## Technical Details

### Brand Colors Reference
```css
/* Primary brand color for favicon */
--primary: #9CAF88 (Sage green)
--background: #F5F5F0 (Warm cream)
--foreground: #2C2C2C (Charcoal)
```

### Files to Modify
| File | Changes |
|------|---------|
| `public/favicon.ico` | Replace with new brand icon |
| `public/favicon-16x16.png` | New file |
| `public/favicon-32x32.png` | New file |
| `public/apple-touch-icon.png` | New file |
| `index.html` | Add favicon links + update meta images |

### Meta Tags to Update
```html
<!-- Current (Lovable default) -->
<meta property="og:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />
<meta name="twitter:image" content="https://lovable.dev/opengraph-image-p98pqg.png" />

<!-- Will be updated to reference brand assets -->
```
