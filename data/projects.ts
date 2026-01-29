export interface Project {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  description: string;
  tags: string[];
  summary: string;
  videoUrl: string;
  imageUrl: string;
  websiteUrl: string;
  caseStudyUrl: string;
}

export const projectsData: Record<string, Project> = {
  'roshni-technologies': {
    id: 'roshni-technologies',
    title: 'Roshni Technologies',
    subtitle: 'Abu Dhabi, United Arab Emirates',
    year: '2025',
    role: 'We designed and built the website from scratch with a UI/UX-first approach, turning research and user flows into clear information architecture, wireframes, and high-fidelity prototypes. The final build is fast, responsive, and accessible, with streamlined navigation, concise messaging, and prominent calls-to-action that guide users to inquire with minimal friction.',
    description: 'Digital agency based in Abu Dhabi, delivering localized, commerce-first digital solutions and creative services for businesses across the UAE. They focus on user-centric design, responsive builds, and measurable growth through performance, accessibility, and SEO-driven execution.',
    tags: ['UX/UI Design', 'Web Development', 'Svelte'],
    summary: 'We minted the design, shaped the UI and UX, and built the site with clean, production-ready code',
    videoUrl: '/09162a18-0c22dd3e.mp4',
    imageUrl: '/img/project1.avif',
    websiteUrl: '#',
    caseStudyUrl: '#'
  },
  'dzrpt-platform': {
    id: 'dzrpt-platform',
    title: 'DZRPT Platform',
    subtitle: 'Mumbai, India',
    year: '2024',
    role: 'We created a comprehensive digital platform with advanced features including real-time data processing, interactive dashboards, and seamless API integrations. Our team focused on scalability, security, and user experience to deliver a robust solution.',
    description: 'A cutting-edge platform designed for modern businesses, offering powerful analytics, automation tools, and intuitive interfaces. Built with the latest technologies to ensure performance and reliability.',
    tags: ['React', 'Node.js', 'API Development', 'Analytics'],
    summary: 'Built a scalable platform with modern architecture and seamless user experience',
    videoUrl: '/8760caa0-582a50ce.mp4',
    imageUrl: '/img/project2.avif',
    websiteUrl: '#',
    caseStudyUrl: '#'
  },
  'ecommerce-store': {
    id: 'ecommerce-store',
    title: 'E-Commerce Store',
    subtitle: 'Global',
    year: '2024',
    role: 'We developed a full-featured e-commerce platform with payment integration, inventory management, and customer analytics. The solution includes mobile apps, admin dashboard, and marketing automation tools.',
    description: 'A modern e-commerce solution built for scale, featuring seamless checkout, personalized recommendations, and comprehensive order management. Designed to maximize conversions and customer satisfaction.',
    tags: ['E-Commerce', 'Payment Integration', 'Mobile Apps'],
    summary: 'Created a complete e-commerce ecosystem with mobile-first design and powerful features',
    videoUrl: '/b56c9806-11400f44.mp4',
    imageUrl: '/img/project3.avif',
    websiteUrl: '#',
    caseStudyUrl: '#'
  },
  'mynte-studio': {
    id: 'mynte-studio',
    title: 'Mynte Studio',
    subtitle: 'Creative Agency',
    year: '2024',
    role: 'We crafted a stunning portfolio website showcasing creative work with immersive animations, smooth transitions, and engaging interactions. The site features a custom CMS for easy content management.',
    description: 'A creative studio specializing in branding, design, and digital experiences. The website reflects their artistic vision with bold typography, dynamic layouts, and captivating visuals.',
    tags: ['Creative Design', 'Animation', 'Portfolio', 'Branding'],
    summary: 'Designed an immersive portfolio experience with cutting-edge animations and interactions',
    videoUrl: '/09162a18-0c22dd3e.mp4',
    imageUrl: '/img/project1.avif',
    websiteUrl: '#',
    caseStudyUrl: '#'
  },
  'portfolio-website': {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    subtitle: 'Personal Brand',
    year: '2024',
    role: 'We designed and developed a minimalist portfolio website that puts the work front and center. Clean layouts, smooth scrolling, and thoughtful typography create an elegant browsing experience.',
    description: 'A personal portfolio showcasing creative projects with a focus on simplicity and elegance. The design emphasizes content while maintaining visual interest through subtle animations and interactions.',
    tags: ['Portfolio', 'Minimalist Design', 'Typography'],
    summary: 'Built a clean, elegant portfolio that showcases work beautifully',
    videoUrl: '/8760caa0-582a50ce.mp4',
    imageUrl: '/img/project2.avif',
    websiteUrl: '#',
    caseStudyUrl: '#'
  }
};

export const projectsList = Object.values(projectsData);
