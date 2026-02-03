
# Revert Images from WebP to JPG Format

Since the WebP conversion resulted in files 8-10x larger than the original JPGs (unusual, but likely due to the conversion process used), this plan reverts all image references back to the original, smaller JPG files.

## Summary

Update all image imports and data file references from `.webp` to `.jpg` across 7 files. The original JPG files already exist in the project, so no new files need to be created.

---

## Changes Required

### 1. Hero Section
**File:** `src/components/sections/Hero.tsx`
- Change import from `hero-yoga.webp` to `hero-yoga.jpg`

### 2. About Section
**File:** `src/components/sections/About.tsx`
- Change import from `about-studio.webp` to `about-studio.jpg`

### 3. Classes Section
**File:** `src/components/sections/Classes.tsx`
- Update 6 class image imports from `.webp` to `.jpg`:
  - `class-vinyasa.webp` → `class-vinyasa.jpg`
  - `class-yin.webp` → `class-yin.jpg`
  - `class-meditation.webp` → `class-meditation.jpg`
  - `class-prenatal.webp` → `class-prenatal.jpg`
  - `class-restorative.webp` → `class-restorative.jpg`
  - `class-breathwork.webp` → `class-breathwork.jpg`
- Update the `classImages` lookup object keys to match

### 4. Teachers Section
**File:** `src/components/sections/Teachers.tsx`
- Update 4 teacher image imports from `.webp` to `.jpg`:
  - `teacher-1.webp` → `teacher-1.jpg`
  - `teacher-2.webp` → `teacher-2.jpg`
  - `teacher-3.webp` → `teacher-3.jpg`
  - `teacher-4.webp` → `teacher-4.jpg`
- Update the `teacherImages` lookup object keys to match

### 5. Gallery Section
**File:** `src/components/sections/Gallery.tsx`
- Update 6 image imports from `.webp` to `.jpg`:
  - `gallery-1.webp` → `gallery-1.jpg`
  - `gallery-2.webp` → `gallery-2.jpg`
  - `gallery-3.webp` → `gallery-3.jpg`
  - `gallery-4.webp` → `gallery-4.jpg`
  - `about-studio.webp` → `about-studio.jpg`
  - `class-vinyasa.webp` → `class-vinyasa.jpg`

### 6. Data Files
**File:** `src/data/classes.json`
- Update all 6 image references from `.webp` to `.jpg`

**File:** `src/data/teachers.json`
- Update all 4 image references from `.webp` to `.jpg`

---

## Files to Modify

| File | Changes |
|------|---------|
| `src/components/sections/Hero.tsx` | 1 import |
| `src/components/sections/About.tsx` | 1 import |
| `src/components/sections/Classes.tsx` | 6 imports + 6 object keys |
| `src/components/sections/Teachers.tsx` | 4 imports + 4 object keys |
| `src/components/sections/Gallery.tsx` | 6 imports |
| `src/data/classes.json` | 6 image references |
| `src/data/teachers.json` | 4 image references |

---

## Technical Notes

- All original `.jpg` files are still present in `src/assets/`
- The `.webp` files can optionally be deleted afterward to reduce project size
- No changes to image dimensions, loading strategies, or other optimizations needed
