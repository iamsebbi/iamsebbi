export const services = [
  {
    id: 1,
    slug: "web-design",
    title: "WEB DESIGN",
    category: "//01.",
    image: "/webdesign.jpg",
    description:
      "Creating stunning, responsive websites that captivate your audience and drive results. From concept to launch, I craft digital experiences that blend aesthetics with functionality.",
    process: [
      {
        step: 1,
        title: "Discovery & Research",
        description:
          "Understanding your brand, goals, and target audience to create a strategic foundation.",
      },
      {
        step: 2,
        title: "Design & Prototyping",
        description:
          "Crafting wireframes and high-fidelity designs that bring your vision to life.",
      },
      {
        step: 3,
        title: "Development",
        description:
          "Building responsive, performant websites using modern technologies and best practices.",
      },
      {
        step: 4,
        title: "Launch & Support",
        description:
          "Deploying your site and providing ongoing support to ensure continued success.",
      },
    ],
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Performance Focused",
      "Modern UI/UX",
      "Cross-browser Compatible",
      "Accessibility Standards",
    ],
  },
  {
    id: 2,
    slug: "ui-ux-design",
    title: "UI/UX DESIGN",
    category: "//02.",
    image: "/uiUxdesign.jpg",
    description:
      "Designing intuitive and engaging user interfaces that enhance user experience and drive engagement. Every pixel is crafted with purpose and precision.",
    process: [
      {
        step: 1,
        title: "User Research",
        description:
          "Conducting in-depth research to understand user needs, behaviors, and pain points.",
      },
      {
        step: 2,
        title: "Information Architecture",
        description:
          "Organizing content and features to create intuitive navigation and user flows.",
      },
      {
        step: 3,
        title: "Visual Design",
        description:
          "Creating beautiful, consistent interfaces that align with your brand identity.",
      },
      {
        step: 4,
        title: "Testing & Iteration",
        description:
          "Validating designs through user testing and refining based on feedback.",
      },
    ],
    features: [
      "User-Centered Design",
      "Interactive Prototypes",
      "Design Systems",
      "Usability Testing",
      "Mobile-First Approach",
      "Brand Consistency",
    ],
  },
  {
    id: 3,
    slug: "creative-design",
    title: "CREATIVE DESIGN",
    category: "//03.",
    image: "/creativedesign.jpg",
    description:
      "Bringing bold creative visions to life through innovative design solutions. From branding to visual identity, I create memorable experiences that stand out.",
    process: [
      {
        step: 1,
        title: "Creative Brief",
        description:
          "Defining project goals, target audience, and creative direction.",
      },
      {
        step: 2,
        title: "Concept Development",
        description:
          "Exploring multiple creative concepts and presenting initial ideas.",
      },
      {
        step: 3,
        title: "Design Execution",
        description:
          "Refining chosen concepts and creating final deliverables.",
      },
      {
        step: 4,
        title: "Brand Guidelines",
        description:
          "Documenting design standards to ensure consistent brand application.",
      },
    ],
    features: [
      "Brand Identity",
      "Logo Design",
      "Visual Storytelling",
      "Print & Digital",
      "Marketing Materials",
      "Style Guides",
    ],
  },
  {
    id: 4,
    slug: "development",
    title: "DEVELOPMENT",
    category: "//04.",
    image: "/development.jpg",
    description:
      "Building robust, scalable applications with clean code and modern technologies. From frontend to backend, I deliver solutions that perform.",
    process: [
      {
        step: 1,
        title: "Technical Planning",
        description:
          "Architecting solutions and selecting the right technology stack.",
      },
      {
        step: 2,
        title: "Development",
        description:
          "Writing clean, maintainable code following industry best practices.",
      },
      {
        step: 3,
        title: "Testing & QA",
        description:
          "Ensuring quality through comprehensive testing and code reviews.",
      },
      {
        step: 4,
        title: "Deployment & Monitoring",
        description:
          "Launching applications and monitoring performance in production.",
      },
    ],
    features: [
      "Full-Stack Development",
      "API Integration",
      "Database Design",
      "Cloud Deployment",
      "Performance Optimization",
      "Security Best Practices",
    ],
  },
];

// Export for 2x2 grid layout
export const projects = services.slice(0, 2); // First row: Web Design, UI/UX
export const projectsRow2 = services.slice(2, 4); // Second row: Creative, Development
