# Design Documentation

## 1. Layout & Wireframe Description

### Overall Design Philosophy
The website follows a minimal, typography-driven aesthetic inspired by pouyamansouri.com. It emphasizes:
- **Generous whitespace** for visual breathing room
- **Strong typography hierarchy** with large, impactful headlines
- **Restrained color palette** (mostly black/white/neutrals with subtle green accent)
- **Subtle motion** that enhances without distracting
- **Mobile-first responsive design**

### Page Layouts

#### Home Page
```
┌─────────────────────────────────────┐
│         Navigation Header            │
├─────────────────────────────────────┤
│                                      │
│         Hero Section (Full Height)   │
│    Large headline + description      │
│         Two CTA buttons              │
│                                      │
├─────────────────────────────────────┤
│                                      │
│      Four Pillars Section            │
│   Grid: 2x2 cards with numbers      │
│   (01 SEPT, 02 N'Ko, etc.)          │
│                                      │
├─────────────────────────────────────┤
│                                      │
│   Featured Timeline Preview          │
│   3 recent entries as list           │
│   "View Full Timeline" CTA           │
│                                      │
├─────────────────────────────────────┤
│                                      │
│     Connect CTA Section              │
│   Dark background with CTA           │
│                                      │
├─────────────────────────────────────┤
│            Footer                    │
└─────────────────────────────────────┘
```

#### Journey Page (Interactive Timeline)
```
┌─────────────────────────────────────┐
│         Navigation Header            │
├─────────────────────────────────────┤
│                                      │
│         Hero Section                 │
│    "A Journey Through Time"          │
│                                      │
├─────────────────────────────────────┤
│                                      │
│    ┌────────────────────┐            │
│    │ 2024 Year Marker   │            │
│    └────────────────────┘            │
│              │                       │
│         ─────●─────                  │
│    Content  │  Images                │
│         ─────│─────                  │
│              │                       │
│    ┌────────────────────┐            │
│    │ 2023 Year Marker   │            │
│    └────────────────────┘            │
│              │                       │
│         ─────●─────                  │
│    Images   │  Content               │
│    (alternating layout)              │
│              │                       │
│    [Repeating pattern...]            │
│                                      │
├─────────────────────────────────────┤
│            Footer                    │
└─────────────────────────────────────┘
```

#### Work Page
```
┌─────────────────────────────────────┐
│         Navigation Header            │
├─────────────────────────────────────┤
│                                      │
│         Hero Section                 │
│         "My Work"                    │
│                                      │
├─────────────────────────────────────┤
│                                      │
│    Project 1: SEPT                   │
│    [Large image]                     │
│    Description + Features            │
│                                      │
│    ─────────────────────             │
│                                      │
│    Project 2: N'Ko                   │
│    [Large image]                     │
│    Description + Features            │
│                                      │
│    [Repeating pattern...]            │
│                                      │
├─────────────────────────────────────┤
│            Footer                    │
└─────────────────────────────────────┘
```

#### About & Connect Pages
Similar structure with hero + content sections, form on Connect page.

---

## 2. Component Structure & File Tree

```
adamaToureWebsite/
├── app/
│   ├── layout.tsx              # Root layout (fonts, header, footer)
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles & design tokens
│   ├── journey/
│   │   └── page.tsx            # Interactive timeline page
│   ├── work/
│   │   └── page.tsx            # Projects showcase
│   ├── about/
│   │   └── page.tsx            # About me
│   └── connect/
│       └── page.tsx            # Contact form
├── components/
│   ├── Header.tsx              # Navigation with mobile menu
│   ├── Footer.tsx              # Site footer with links
│   ├── Timeline.tsx            # Timeline container component
│   └── TimelineCard.tsx        # Individual timeline entry
├── data/
│   └── timeline.json           # Timeline data (easily editable)
├── public/
│   └── images/                 # Project and timeline images
├── tailwind.config.ts          # Tailwind customization
├── tsconfig.json               # TypeScript config
├── next.config.ts              # Next.js config
├── package.json                # Dependencies
├── README.md                   # Project documentation
└── DESIGN.md                   # This file
```

### Component Responsibilities

#### Header.tsx
- Fixed navigation bar
- Logo/name link
- Page navigation (Home, Journey, Work, About, Connect)
- Mobile hamburger menu
- Scroll-based styling (adds backdrop blur when scrolled)

#### Footer.tsx
- Social media links
- Quick navigation
- Copyright info
- Design credit

#### Timeline.tsx
- Container for timeline entries
- Renders vertical timeline line
- Maps through timeline data
- Handles year markers

#### TimelineCard.tsx
- Individual timeline entry
- Scroll-triggered fade/slide animation
- Alternating left/right layout (desktop)
- Image grid (1-3 images)
- CTA button
- Category badge

---

## 3. Timeline Data Schema

### JSON Structure
Located at: `data/timeline.json`

```json
[
  {
    "id": "unique-identifier",
    "year": "2024",
    "dateRange": "2023 - Present",
    "title": "Project or Chapter Title",
    "category": "Category Name",
    "description": "3-5 sentence narrative about this chapter. Should tell a story, not list accomplishments. Focus on impact, motivation, and journey rather than technical details or resume-style achievements.",
    "images": [
      "/images/project-image-1.jpg",
      "/images/project-image-2.jpg",
      "/images/project-image-3.jpg"
    ],
    "cta": {
      "label": "Call to Action Text",
      "link": "/destination#anchor"
    }
  }
]
```

### Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the entry |
| `year` | string | Yes | Primary year (displayed in large marker) |
| `dateRange` | string | Yes | Full date range (e.g., "2023 - Present") |
| `title` | string | Yes | Chapter/project title (2-8 words) |
| `category` | string | Yes | Category badge (e.g., "Energy Innovation") |
| `description` | string | Yes | 3-5 sentence narrative (documentary style) |
| `images` | string[] | Yes | Array of 1-3 image paths |
| `cta.label` | string | Yes | Button text (e.g., "View SEPT Work") |
| `cta.link` | string | Yes | Destination URL or anchor link |

### Content Guidelines

**Title**: Keep concise and impactful. Use active voice.

**Category**: Single phrase, 1-3 words. Examples:
- Energy Innovation
- Climate Resilience
- Academic Foundation
- Community Impact

**Description**: Tell a story, not a resume. Focus on:
- **Why**: Motivation and purpose
- **What**: The work and approach
- **Impact**: Real-world outcomes
- **Context**: Challenges addressed

❌ **Avoid**: "Led team of 5 engineers to develop..."
✅ **Better**: "The journey began with a simple question: how can we make solar panels safer? SEPT emerged as an answer, combining..."

**Images**: 
- Provide 1-3 images
- First image is featured if there's only 1
- With 3 images, first spans full width
- Paths relative to `/public/` directory

### Example Entries

See `data/timeline.json` for 8 complete sample entries covering 2017-2024.

### Adding New Entries

1. Open `data/timeline.json`
2. Add new object to array (preferably at the top for recent entries)
3. Follow the schema above
4. Save and the timeline will update automatically
5. No code changes required!

---

## 4. Design Tokens & Recommendations

### Typography System

#### Font Families
```css
--font-inter: 'Inter', system-ui, sans-serif;         /* Body text */
--font-space-grotesk: 'Space Grotesk', system-ui, sans-serif;  /* Headlines */
```

**Implementation**: Loaded via next/font/google with display:swap for performance.

#### Type Scale

| Token | Size | Line Height | Letter Spacing | Usage |
|-------|------|-------------|----------------|-------|
| `display-lg` | 72px (4.5rem) | 1.1 | -0.02em | Hero headlines (desktop) |
| `display` | 56px (3.5rem) | 1.1 | -0.02em | Section headlines |
| `display-sm` | 40px (2.5rem) | 1.2 | -0.01em | Subsection headlines |
| `text-2xl` | 24px (1.5rem) | 1.4 | 0 | Large body / lead text |
| `text-xl` | 20px (1.25rem) | 1.5 | 0 | Secondary body |
| `text-lg` | 18px (1.125rem) | 1.6 | 0 | Primary body |
| `text-base` | 16px (1rem) | 1.6 | 0 | Standard body |
| `text-sm` | 14px (0.875rem) | 1.5 | 0 | Labels, meta text |
| `text-xs` | 12px (0.75rem) | 1.4 | 0.05em | Uppercase labels |

#### Font Weights
- Light (300): Rarely used, special emphasis
- Regular (400): Body text
- Medium (500): Subtle emphasis
- Semibold (600): Headings, buttons
- Bold (700): Strong headlines

### Color Palette

#### Primary (Neutrals)
```css
White:      #FFFFFF
Gray 50:    #FAFAFA  /* Subtle backgrounds */
Gray 100:   #F5F5F5  /* Card backgrounds */
Gray 200:   #E5E5E5  /* Borders, dividers */
Gray 300:   #D4D4D4  /* Disabled states */
Gray 500:   #737373  /* Secondary text */
Gray 600:   #525252  /* Body text (light) */
Gray 700:   #404040  /* Body text */
Gray 900:   #171717  /* Headlines, primary text */
Black:      #000000
```

#### Accent (Green)
```css
Accent 50:  #F0FDF4  /* Subtle backgrounds */
Accent 100: #DCFCE7  /* Hover backgrounds */
Accent 500: #22C55E  /* Primary accent */
Accent 600: #16A34A  /* Hover states */
Accent 700: #15803D  /* Active states */
```

#### Usage Guidelines
- **Default**: Use neutrals (black/white/grays) for 95% of interface
- **Accent**: Use sparingly for CTAs, links, category badges, focus states
- **Text**: Gray-900 for headlines, Gray-700 for body, Gray-500 for secondary
- **Backgrounds**: White primary, Gray-50/100 for subtle variation
- **Borders**: Gray-200 default, Accent-600 on hover/focus

### Spacing System

Based on Tailwind's 4px (0.25rem) baseline.

#### Key Values
```
4px   (1)  - Tight spacing
8px   (2)  - Button/input padding
12px  (3)  - Small gaps
16px  (4)  - Standard gaps
24px  (6)  - Medium gaps
32px  (8)  - Large gaps
48px  (12) - Section internal spacing
64px  (16) - Section top/bottom padding (mobile)
96px  (24) - Section top/bottom padding (desktop)
128px (32) - Large section spacing
```

#### Responsive Padding
```
Mobile (< 768px):   px-6 (24px)
Tablet (768-1024):  px-12 (48px)
Desktop (> 1024px): px-16 (64px)
```

#### Section Margins
```
Mobile:   py-16 (64px)
Tablet:   py-24 (96px)
Desktop:  py-32 (128px)
```

### Layout Constraints

```
Max Content Width: 1280px (max-w-7xl)
Max Text Width:    896px (max-w-4xl) for readability
Hero Width:        1024px (max-w-5xl)
```

### Borders & Shadows

#### Border Radius
```css
rounded-lg:   8px   /* Cards, inputs */
rounded-xl:   12px  /* Large cards */
rounded-2xl:  16px  /* Feature cards, images */
rounded-full: 9999px /* Buttons, badges */
```

#### Shadows
```css
shadow-sm:  Subtle lift (cards)
shadow-lg:  Hover state (cards)
shadow-xl:  Modals, dropdowns
```

Keep shadows subtle. Use sparingly.

### Motion & Animation

#### Principles
- **Subtle over flashy**: Motion should feel natural
- **Purpose-driven**: Animate to guide attention or provide feedback
- **Performance**: Use transform and opacity (GPU-accelerated)
- **Accessibility**: Respect prefers-reduced-motion

#### Animation Timings
```
Fast:     150ms - Hover states, micro-interactions
Medium:   300ms - Transitions, reveals
Slow:     600ms - Page transitions, scroll reveals
```

#### Easing
```
ease-out:     Default for most animations
ease-in-out:  For two-way transitions
custom:       cubic-bezier(0.4, 0, 0.2, 1) for natural motion
```

#### Common Animations
- **Scroll reveal**: Fade + slide up (opacity 0→1, translateY 30px→0)
- **Hover**: Subtle scale (1→1.02) or translateY (0→-4px)
- **Button**: Background color transition
- **Link underline**: Width expansion (w-0→w-full)

### Accessibility Standards

#### Color Contrast
- **Body text**: Minimum 4.5:1 ratio (Gray-700 on White = 7.8:1) ✓
- **Large text**: Minimum 3:1 ratio
- **UI elements**: Minimum 3:1 ratio

#### Interactive Elements
- **Minimum touch target**: 44x44px (mobile)
- **Focus indicators**: 2px outline with 2px offset
- **Keyboard navigation**: All interactive elements focusable

#### Semantic HTML
- Use proper heading hierarchy (h1→h2→h3)
- Semantic landmarks (header, nav, main, footer)
- ARIA labels for icon buttons

#### Screen Readers
- Alt text for all images
- Descriptive link text (avoid "click here")
- Form labels properly associated

### Responsive Breakpoints

```javascript
// Tailwind defaults
sm:  640px   // Small tablets, large phones (landscape)
md:  768px   // Tablets
lg:  1024px  // Small laptops
xl:  1280px  // Desktop
2xl: 1536px  // Large desktop
```

#### Strategy
1. **Design mobile-first**: Start with mobile, enhance for larger screens
2. **Content first**: Let content determine breakpoints, not devices
3. **Fluid typography**: Use clamp() or responsive scale
4. **Flexible grids**: Use CSS Grid with auto-fit/auto-fill

### Performance Guidelines

#### Images
- Use Next.js Image component for automatic optimization
- Provide proper width/height to prevent layout shift
- Use WebP/AVIF formats
- Lazy load below-the-fold images

#### Fonts
- System font fallbacks
- next/font for automatic optimization
- Display:swap to prevent FOIT (Flash of Invisible Text)

#### JavaScript
- Minimize client-side JS
- Use React Server Components where possible
- Lazy load heavy components
- Code split by route

#### Target Metrics (Lighthouse)
- **Performance**: 90+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

---

## 5. Starter Code: Journey Timeline Page

The interactive timeline is the centerpiece feature. Here's how it works:

### Key Files

1. **`app/journey/page.tsx`** - Page component
2. **`components/Timeline.tsx`** - Container
3. **`components/TimelineCard.tsx`** - Individual entry
4. **`data/timeline.json`** - Data source

### Features Implemented

✅ **Vertical scrollytelling** with center timeline line  
✅ **Scroll-triggered animations** using Framer Motion + Intersection Observer  
✅ **Alternating left/right layout** on desktop  
✅ **Year markers** with floating badges  
✅ **Image grids** supporting 1-3 images per entry  
✅ **Category badges** and CTAs  
✅ **Fully responsive** with mobile-first design  
✅ **Data-driven** from JSON (easy to add entries)  

### Animation Behavior

- Cards fade in and slide up when scrolling into view
- Each card animates independently
- Year markers have their own subtle animation
- Images stagger slightly for depth
- Smooth, natural motion with easeOut easing

### Customization

To modify animations, edit `TimelineCard.tsx`:

```typescript
initial={{ opacity: 0, y: 50 }}
animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
transition={{ duration: 0.6, ease: "easeOut" }}
```

Adjust:
- `y: 50` - Slide distance
- `duration: 0.6` - Animation speed
- `margin: "-100px"` - Trigger point (how early animation starts)

---

## Design Inspiration Sources

- **pouyamansouri.com** - Overall aesthetic, minimal approach, typography
- **Linear.app** - Subtle animations, clean UI
- **Stripe.com** - Gradient accents, modern feels
- **Apple.com** - Generous whitespace, product focus

---

## Future Enhancements

Potential additions (not included in initial build):

1. **Image lightbox** for timeline images
2. **Parallax scrolling** for subtle depth
3. **Timeline filtering** by category
4. **Dark mode** toggle
5. **Blog integration** for longer articles
6. **Project case studies** with deep-dive pages
7. **Testimonials** section
8. **Analytics integration** (privacy-focused)
9. **i18n support** for French/N'Ko
10. **Progressive Web App** features

---

## Maintenance Notes

### Adding Timeline Entries
1. Add images to `/public/images/`
2. Edit `data/timeline.json`
3. No code changes needed!

### Updating Colors
Edit `tailwind.config.ts` → `extend.colors.accent`

### Changing Fonts
Edit `app/layout.tsx` → import different Google Fonts

### Performance Monitoring
```bash
npm run build  # Check bundle sizes
npx lighthouse https://your-site.com  # Audit
```

---

Built with attention to detail and purpose. Every design decision serves the mission: to clearly communicate impact in energy security and climate resilience.

