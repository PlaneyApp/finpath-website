# FinPath Landing Page

Modern, responsive landing page untuk FinPath - aplikasi personal finance management dengan AI-powered insights.

## Features

- ✨ **Modern Design**: Clean, professional design dengan gradient dan smooth animations
- 🤖 **AI-Focused**: Highlights fitur AI sebagai differentiator utama
- 📱 **Fully Responsive**: Mobile-first approach, optimized untuk semua device sizes
- ⚡ **High Performance**: Built with Next.js 14+ untuk optimal performance
- 🎨 **Beautiful Animations**: Smooth animations menggunakan Framer Motion
- ♿ **Accessible**: Following best practices untuk accessibility

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```
frontend/
├── app/
│   ├── globals.css          # Global styles dan Tailwind directives
│   ├── layout.tsx           # Root layout dengan metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Navbar.tsx           # Navigation bar dengan sticky header
│   ├── Hero.tsx             # Hero section dengan CTA
│   ├── Features.tsx         # Features grid dengan AI highlights
│   ├── HowItWorks.tsx       # 4-step process section
│   ├── Testimonials.tsx     # User testimonials
│   ├── FAQ.tsx              # FAQ dengan accordion
│   ├── CTA.tsx              # Call-to-action section
│   └── Footer.tsx           # Footer dengan links
├── lib/
│   └── utils.ts             # Utility functions
├── public/
│   └── images/              # Static images
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm atau yarn

### Installation

1. Clone the repository:
```bash
cd finpath-website/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Landing Page Sections

### 1. **Navbar**
- Sticky navigation dengan blur effect saat scroll
- Responsive mobile menu
- CTA button untuk download

### 2. **Hero Section**
- Eye-catching headline dengan focus pada AI
- Dual CTA buttons (Download + Watch Demo)
- Interactive mockup/illustration
- Trust indicators (stats)

### 3. **Features Section**
- 8 main features dalam grid layout
- AI badge untuk AI-powered features
- Dedicated AI highlight section
- Hover effects dan animations

### 4. **How It Works**
- 4-step process dengan visual flow
- Icon untuk setiap step
- Different layout untuk mobile dan desktop

### 5. **Testimonials**
- 6 user testimonials
- Star ratings
- Highlight pada AI-related benefits
- Stats bar dengan key metrics

### 6. **FAQ Section**
- 8 frequently asked questions
- Accordion component dengan smooth animations
- Focus pada AI-related questions

### 7. **CTA Section**
- Final call-to-action sebelum footer
- Benefits list dengan checkmarks
- Stats cards
- Gradient background dengan patterns

### 8. **Footer**
- Comprehensive links (Product, Company, Legal, Support)
- Social media links
- Contact information
- Copyright information

## Customization

### Colors
Edit `tailwind.config.ts` untuk mengubah color scheme:

```typescript
colors: {
  primary: { ... },
  secondary: { ... },
  accent: { ... },
}
```

### Content
Edit component files di `components/` untuk mengubah content, text, atau struktur.

### Animations
Adjust Framer Motion parameters dalam component untuk customize animations:

```typescript
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

## Performance Optimization

- ✅ Next.js Image component untuk optimized images
- ✅ Lazy loading dengan `whileInView` dari Framer Motion
- ✅ Code splitting otomatis dari Next.js
- ✅ Minimal dependencies untuk faster load times

## SEO

Landing page sudah include:
- Meta tags untuk social sharing (OpenGraph, Twitter)
- Semantic HTML untuk better SEO
- Proper heading hierarchy (h1, h2, h3)
- Descriptive alt texts (akan ditambahkan saat images ready)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy ke Vercel via git integration atau Vercel CLI
```

### Other Platforms
```bash
npm run build
npm start
```

## Future Enhancements

- [ ] Add actual product images/mockups
- [ ] Implement newsletter signup
- [ ] Add contact form dengan backend integration
- [ ] Implement pricing section (jika ada pricing tiers)
- [ ] Add blog section
- [ ] Implement analytics (Google Analytics, etc.)
- [ ] Add more micro-interactions
- [ ] Implement dark mode toggle

## Contributing

Ini adalah internal project. Untuk suggestion atau bug reports, silakan contact team.

## License

MIT License - FinPath 2025

---

Made with ❤️ for FinPath
