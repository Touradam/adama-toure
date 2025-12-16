# Adama Touré - Personal Website

A clean, elegant, typography-driven personal website showcasing my work in energy security and climate resilience.

## Overview

This website serves as my digital portal and personal brand hub, featuring:

- **SEPT** - Smart & Safe Solar Panels
- **N'Ko Project** - Climate Resilience in West Africa
- **Solar Thermal Research** - Cogeneration of Electricity + Fresh Water
- **AI Education** - Teaching Fundamentals and Practical Applications

## Key Features

### Interactive Timeline
- Vertical scrollytelling experience
- Scroll-triggered animations with Framer Motion
- Data-driven from JSON for easy updates
- Mobile-first responsive design

### Design Philosophy
- Minimal, modern, elegant aesthetic
- Strong typography hierarchy
- Generous whitespace
- Subtle animations and micro-interactions
- Accessible and performant

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Fonts**: Inter (body), Space Grotesk (display)

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx             # Home page
│   ├── journey/page.tsx     # Interactive timeline
│   ├── work/page.tsx        # Project showcase
│   ├── about/page.tsx       # About me
│   ├── connect/page.tsx     # Contact form
│   └── globals.css          # Global styles
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Site footer
│   ├── Timeline.tsx         # Timeline container
│   └── TimelineCard.tsx     # Individual timeline entry
├── data/
│   └── timeline.json        # Timeline data
└── public/
    └── images/              # Project images
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Design Tokens

### Typography Scale
- Display Large: 4.5rem (72px)
- Display: 3.5rem (56px)
- Display Small: 2.5rem (40px)

### Color Palette
- Primary: Neutral (Black/White/Grays)
- Accent: Green (#22c55e)

### Spacing System
- Based on Tailwind's 4px baseline
- Generous section padding: 16px (mobile) to 64px (desktop)
- Section margins: 64px to 128px

### Fonts
- **Display**: Space Grotesk (headings)
- **Body**: Inter (body text)

## Timeline Data Schema

The timeline is driven by `data/timeline.json`. Each entry follows this structure:

```json
{
  "id": "unique-id",
  "year": "2024",
  "dateRange": "2023 - Present",
  "title": "Project Title",
  "category": "Category Name",
  "description": "3-5 sentence narrative about this chapter",
  "images": [
    "/images/project-1.jpg",
    "/images/project-2.jpg"
  ],
  "cta": {
    "label": "View Project",
    "link": "/work#project"
  }
}
```

To add a new timeline entry, simply add a new object to the array in `timeline.json`.

## Performance Optimizations

- Next.js Image optimization
- Font optimization with next/font
- Lazy loading for images
- Minimal JavaScript bundle
- Server components where possible
- Mobile-first responsive design

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Color contrast compliance
- Screen reader friendly

## Deployment

This site is optimized for deployment on Vercel, Netlify, or any platform supporting Next.js.

```bash
# Build command
npm run build

# Output directory
.next
```

## License

© 2024 Adama Touré. All rights reserved.

## Contact

For inquiries: [contact@adamatoure.com](mailto:contact@adamatoure.com)

