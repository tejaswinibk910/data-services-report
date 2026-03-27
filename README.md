# Data Services Annual Report - Interactive Scrollytelling Website

A modern, interactive annual report website built with Next.js, Three.js, and GSAP for the University of Rochester Libraries Data Services team.

## Features

- **Smooth Scroll Experience**: Lenis-powered buttery smooth scrolling
- **3D Elements**: Three.js animated bird models in the hero section
- **Interactive Data Visualizations**: Recharts for dynamic charts and graphs
- **Scroll-Triggered Animations**: GSAP ScrollTrigger for engaging transitions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animated Statistics**: CountUp animations for impactful numbers

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Animations**: GSAP, Framer Motion, Lenis
- **Charts**: Recharts
- **Others**: React CountUp

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd data-services-report
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

## Project Structure

```
data-services-report/
├── app/
│   ├── components/
│   │   ├── BirdScene.tsx       # 3D bird animation component
│   │   └── SmoothScroll.tsx    # Lenis smooth scroll wrapper
│   ├── sections/
│   │   ├── Hero.tsx            # Hero section with 3D birds
│   │   ├── Team.tsx            # Team member cards
│   │   ├── WorkAreas.tsx       # Service areas grid
│   │   ├── Workshops.tsx       # Workshop stats & charts
│   │   ├── Engagement.tsx      # User engagement metrics
│   │   ├── URRR.tsx            # Repository statistics
│   │   └── Future.tsx          # Future initiatives
│   ├── utils/
│   │   └── data.json           # Report data
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Main page
├── public/                     # Static assets
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Customization

### Update Data

Edit `app/utils/data.json` to update statistics and content.

### Modify Colors

Update the color palette in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#1a1a1a',
      secondary: '#f5f5f5',
      accent: '#ff6b6b',
    },
  },
}
```

### Add 3D Models

Replace the placeholder bird geometries in `app/components/BirdScene.tsx` with actual GLB/GLTF models:

1. Place your 3D models in `public/models/`
2. Use `useGLTF` hook from `@react-three/drei`
3. Import and render your models

Example:
```typescript
const { scene } = useGLTF('/models/bird.glb')
return <primitive object={scene} />
```

## Build for Production

```bash
npm run build
npm start
```

## Performance Tips

- Optimize images (convert to WebP)
- Lazy load 3D models
- Use code splitting for heavy components
- Enable compression in production

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Future Enhancements

- [ ] Add real 3D bird models for each team member
- [ ] Implement more interactive data visualizations
- [ ] Add PDF export functionality
- [ ] Create mobile-optimized animations
- [ ] Add accessibility improvements (keyboard navigation, screen reader support)

## License

University of Rochester Libraries - Data Services Team

## Contact

For questions or feedback, contact the Data Services team at River Campus Libraries.
