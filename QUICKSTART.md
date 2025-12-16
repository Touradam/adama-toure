# Quick Start Guide

## Getting Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

---

## Key Commands

```bash
# Development
npm run dev          # Start dev server (with hot reload)

# Production
npm run build        # Create optimized production build
npm start            # Start production server

# Linting
npm run lint         # Check for code issues
```

---

## Making Common Updates

### Add a Timeline Entry

1. **Add images** to `/public/images/` folder
   - Name them descriptively (e.g., `sept-dashboard.jpg`)
   - Recommended size: 1200x800px minimum

2. **Edit** `data/timeline.json`
   - Add new entry at the top of the array for recent items
   - Follow this structure:
   
```json
{
  "id": "9",
  "year": "2025",
  "dateRange": "2024 - Present",
  "title": "Your New Project",
  "category": "Your Category",
  "description": "Tell the story in 3-5 sentences. Focus on why, what, and impact rather than listing accomplishments.",
  "images": [
    "/images/your-image-1.jpg",
    "/images/your-image-2.jpg"
  ],
  "cta": {
    "label": "Learn More",
    "link": "/work#your-project"
  }
}
```

3. **Save** and refresh browser - changes appear automatically!

### Update Your Contact Information

Edit `components/Footer.tsx` and `app/connect/page.tsx`:
- Update email address
- Add your social media links
- Modify contact methods

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  accent: {
    50: '#f0fdf4',   // Light backgrounds
    100: '#dcfce7',  // Hover backgrounds
    500: '#22c55e',  // Primary accent (change this!)
    600: '#16a34a',  // Hover states
    700: '#15803d',  // Active states
  },
}
```

### Add Images to Pages

1. Place images in `/public/images/`
2. Reference them in your code:
```typescript
<img src="/images/your-image.jpg" alt="Description" />
```

Or use Next.js Image component for optimization:
```typescript
import Image from 'next/image'

<Image 
  src="/images/your-image.jpg"
  alt="Description"
  width={1200}
  height={800}
/>
```

---

## Project Structure at a Glance

```
├── app/                    # Pages (Next.js App Router)
│   ├── page.tsx           # Home page → Edit hero, pillars
│   ├── journey/           # Timeline page
│   ├── work/              # Projects showcase → Edit project details
│   ├── about/             # About page → Edit bio, values
│   └── connect/           # Contact page → Edit form, links
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation → Edit menu items
│   ├── Footer.tsx         # Footer → Edit social links
│   ├── Timeline.tsx       # Timeline display
│   └── TimelineCard.tsx   # Timeline entry card
├── data/
│   └── timeline.json      # Timeline entries → Add/edit easily!
└── public/
    └── images/            # Add your images here
```

---

## File You'll Edit Most Often

1. **`data/timeline.json`** - Add timeline entries
2. **`app/page.tsx`** - Update home page content
3. **`app/about/page.tsx`** - Update your bio and expertise
4. **`components/Footer.tsx`** - Update contact info and links
5. **Images in `/public/images/`** - Replace placeholder images

---

## Mobile Testing

The site is mobile-first, but always test on real devices or:

### Using Browser DevTools
1. Open Chrome/Edge DevTools (F12)
2. Click device toolbar icon (or Ctrl+Shift+M)
3. Select iPhone or Android device
4. Test scrolling, navigation, forms

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

## Performance Checklist

Before deploying:

```bash
# Build and check for errors
npm run build

# Check bundle sizes (keep under 150KB First Load JS)
# Output shown after build

# Test in production mode locally
npm start
```

Visit [http://localhost:3000](http://localhost:3000) and test:
- [ ] All pages load correctly
- [ ] Timeline animations work
- [ ] Mobile menu functions
- [ ] Forms submit (Connect page)
- [ ] Links navigate properly

---

## Deployment

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel
```

Follow prompts. Your site will be live in minutes!

### Option 2: Netlify

1. **Install Netlify CLI**
```bash
npm i -g netlify-cli
```

2. **Deploy**
```bash
netlify deploy --prod
```

### Option 3: Manual Deployment

```bash
# Build
npm run build

# Upload `.next` folder and required files to your host
# Ensure Node.js environment is available
# Run: npm start
```

---

## Troubleshooting

### Port 3000 already in use
```bash
# Kill process on port 3000 (Mac/Linux)
kill -9 $(lsof -ti:3000)

# Or use different port
PORT=3001 npm run dev
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try build again
npm run build
```

### Images not showing
- Check image path starts with `/images/` not `public/images/`
- Verify file actually exists in `/public/images/`
- Check filename matches exactly (case-sensitive)

### Animations not working
- Clear browser cache
- Check Framer Motion is installed: `npm list framer-motion`
- Verify you're using a modern browser

---

## Need Help?

- **Full documentation**: See `README.md`
- **Design system**: See `DESIGN.md`
- **Component code**: Check `components/` folder
- **Page content**: Check `app/` folder

---

## Quick Wins

### 1. Replace Placeholder Images (5 minutes)
Add your real project images to `/public/images/` and the site immediately looks professional.

### 2. Update Timeline (10 minutes)
Edit `data/timeline.json` with your actual projects and dates.

### 3. Customize Colors (2 minutes)
Change the accent color in `tailwind.config.ts` to match your brand.

### 4. Add Social Links (3 minutes)
Update footer and connect page with your actual social media profiles.

### 5. Deploy (5 minutes)
Push to Vercel or Netlify for a live site instantly.

---

**Total time to personalized, live site: ~30 minutes!**

Built with Next.js 15, Tailwind CSS, and Framer Motion. Optimized for mobile, accessible, and performant out of the box.

