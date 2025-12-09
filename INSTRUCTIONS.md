# CodeSage Website - Quick Start Guide

## 🚀 Running the Website

1. **Navigate to the project folder:**
   ```bash
   cd codesage
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Overview

This is a modern digital agency website featuring:

- **3D Hero Section**: Animated sphere with Three.js
- **Smooth Animations**: Framer Motion for scroll animations
- **Responsive Design**: Works on all devices
- **Modern Stack**: Next.js 16 + Tailwind CSS v4 + Three.js

## 🎨 Customization Tips

### Change Colors
All gradient colors can be modified in the component files:
- `components/Hero.tsx` - Hero section colors
- `components/About.tsx` - About section cards
- `components/Services.tsx` - Service cards
- `components/Projects.tsx` - Project cards
- `components/Contact.tsx` - Contact form

### Modify 3D Objects
3D elements are in:
- `Hero.tsx` - Animated sphere
- `Services.tsx` - Rotating box
- `Contact.tsx` - Animated torus

### Update Content
- **Services**: Edit the `services` array in `Services.tsx`
- **Projects**: Edit the `projects` array in `Projects.tsx`
- **About**: Modify the cards in `About.tsx`

## 🛠️ Build for Production

```bash
npm run build
npm start
```

## 📦 Dependencies

- **next**: React framework
- **three**: 3D graphics library
- **@react-three/fiber**: React renderer for Three.js
- **@react-three/drei**: Useful helpers for React Three Fiber
- **framer-motion**: Animation library
- **tailwindcss**: Utility-first CSS framework

## 🎯 Key Features

1. **Smooth Scroll**: Automatic smooth scrolling between sections
2. **3D Interactions**: Interactive 3D objects that respond to mouse
3. **Responsive Navigation**: Mobile-friendly navbar
4. **Contact Form**: Functional contact form with validation
5. **Modern Design**: Minimalistic with gradient accents

Enjoy building with CodeSage! 🎉
