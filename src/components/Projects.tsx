import { useState, useEffect } from 'react';
import { ExternalLink, Eye, Code } from 'lucide-react';
import project1 from '../assets/banner/1.jpg';
import project2 from '../assets/banner/2.jpg';
import project3 from '../assets/banner/3.jpg';
import project4 from '../assets/banner/4.jpg';
import project5 from '../assets/banner/5.jpg';
import project6 from '../assets/banner/6.jpg';
import project7 from '../assets/banner/7.jpg';
import project8 from '../assets/banner/8.jpg';
import project9 from '../assets/banner/9.jpg';
import project10 from '../assets/banner/10.jpg';
import project11 from '../assets/banner/11.jpg';
import project12 from '../assets/banner/12.jpg';
import project13 from '../assets/banner/13.jpg';
import project14 from '../assets/banner/14.jpg';
import project16 from '../assets/banner/16.jpg';


const projectsImage
 = [
  project1, project2, project3, project4, project5, project6,
  project7, project8, project9, project10, project11, project12,
  project13, project14, project16
];
const projectList= [
  {
    "id": 1,
    "title": "Deepseek-Under Development",
    "category": "frontend",
    "description": "An AI-powered DeepSeek clone that replicates intelligent conversation features with a modern UI. It provides users with real-time responses, seamless navigation, and an interactive experience similar to AI assistants.",
    "image": "https://i.ibb.co/jk8bgJ9t/deepseek.png",
    "technologies": [
      "Next.js",
      "React Hooks",
      "Tailwind CSS",
      "OpenAI API",
      "Vercel"
    ],
    "liveUrl": "https://deepseek-clone-woad.vercel.app/",
    "githubUrl": "https://github.com/username/deepseek-clone",
    "featured": true
  },
  {
    "id": 2,
    "title": "SWAP",
    "category": "fullstack",
    "description": "A mobile reselling platform that allows users to buy and sell second-hand devices. It includes product listings, search and filter functionality, user authentication, chat system, and integrated payment options for a secure marketplace experience.",
    "image": "https://i.ibb.co/pPnC2cC/swap.jpg",
    "technologies": [
      "React.js",
      "Node.js",
      "Express.js",
      "Firebase Authentication",
      "Cloud Firestore",
      "Stripe API",
      "Tailwind CSS"
    ],
    "liveUrl": "https://swap-resell-website.web.app/",
    "githubUrl": "https://github.com/username/swap-resell",
    "featured": true
  },
  {
    "id": 3,
    "title": "Edu Hive",
    "category": "fullstack",
    "description": "An online learning management system designed for students and teachers. Edu Hive offers live classes, interactive lessons, assignment submissions, progress tracking, and an engaging UI for easy navigation.",
    "image": "https://i.ibb.co/mtvtFZ2/eduhive.png",
    "technologies": [
      "React.js",
      "Firebase Hosting",
      "Firestore Database",
      "Material-UI",
      "React Router"
    ],
    "liveUrl": "https://edu-hive-5ffd0.web.app/",
    "githubUrl": "https://github.com/username/edu-hive",
    "featured": false
  },
  {
    "id": 4,
    "title": "Book Worm",
    "category": "fullstack",
    "description": "A book review website where users can explore books, write reviews, rate titles, and engage with a community of readers. Features include authentication, search and filter, and a clean user-friendly interface.",
    "image": "https://i.ibb.co/gw3nWFC/Review.jpg",
    "technologies": [
      "React.js",
      "Firebase",
      "React Context API",
      "Tailwind CSS",
      "React Router"
    ],
    "liveUrl": "https://service-review-c7a94.web.app/",
    "githubUrl": "https://github.com/username/bookworm",
    "featured": true
  },
  {
    "id": 5,
    "title": "Fitness Xpress",
    "category": "frontend",
    "description": "A workout monitoring application designed to help fitness enthusiasts track exercises, monitor progress, and visualize data with charts. It offers a responsive UI, authentication system, and real-time workout history logging.",
    "image": "https://i.ibb.co/SBP7p0F/gym.jpg",
    "technologies": [
      "React.js",
      "Chart.js",
      "Firebase Firestore",
      "Firebase Auth",
      "Bootstrap",
      "Netlify"
    ],
    "liveUrl": "https://workout-activity-tracker.netlify.app/",
    "githubUrl": "https://github.com/username/fitness-xpress",
    "featured": false
  },
  {
    "id": 6,
    "title": "Programming School",
    "category": "frontend",
    "description": "An interactive online quiz platform for programming learners. It includes timed quizzes, instant feedback, performance tracking, and a gamified experience to make coding practice fun and effective.",
    "image": "https://i.ibb.co/2PRpPhg/quiz.png",
    "technologies": [
      "React.js",
      "React Router",
      "Netlify Deployment",
      "CSS Modules",
      "Local Storage"
    ],
    "liveUrl": "https://programming-school-quiz-test.netlify.app/",
    "githubUrl": "https://github.com/username/programming-school",
    "featured": false
  },
  {
    "id": 7,
    "title": "Shopify Store Redesign",
    "category": "shopify",
    "description": "Complete redesign of a Shopify store with modern UI, improved UX, and optimized product layout to increase conversion rates and user engagement.",
    "image": projectsImage[0],
    "technologies": [
      "Shopify Theme",
      "Liquid Coding",
      "JavaScript",
      "HTML",
      "CSS"
    ],
    "liveUrl": "https://crazystrainstees.com/",
    "githubUrl": "#",
    "featured": true
  },
  {
    "id": 8,
    "title": "Dropshipping Store Setup",
    "category": "shopify",
    "description": "Complete store deisgn from scratch and setup of a DSers dropshipping store including product sourcing, listing, pricing, shipping setup, and store configuration for seamless operations.",
    "image": projectsImage[3],
    "technologies": ["Shopify", "DSers", "AliExpress", "Liquid", "SEO"],
    "liveUrl": "https://q1b1kj-zf.myshopify.com/",
    "githubUrl": "#",
    "featured": true
  },
  {
    "id": 9,
    "title": "Shopify Store from  Scratch",
    "category": "shopify",
    "description": "Store designed from scratch and manually product uploaded with different variants with prebooking system and store configuration for seamless operations.",
    "image": projectsImage[13],
    "technologies": ["Shopify", "SEO Tools", "Liquid", "Google Analytics"],
    "liveUrl": "https://pkpouchenergy.com/",
    "githubUrl": "#",
    "featured": false
  },
  {
    "id": 10,
    "title": "Store Build & Manual Product Upload",
    "category": "shopify",
    "description": "Developed the store from scratch along with 1000+ product uploaded manually and catalog management with proper categorization, tagging, and pricing to enhance store organization and user experience.",
    "image": projectsImage[14],
    "technologies": ["Shopify", "CSV Import", "Liquid", "SEO"],
    "liveUrl": "https://iconicluxellc.myshopify.com/",
    "githubUrl": "#",
    "featured": false
  },
  {
    "id": 11,
    "title": "Custom Single Product Store in (English and Spanish)",
    "category": "shopify",
    "description": "Built a fully customized Shopify store using Pagebuilder(Pagefly, Gempage) tailored to brand requirements, responsive design, interactive elements, and optimized performance manually translated in Spanish.",
    "image": projectsImage[12],
    "technologies": ["Pagefly", "Liquid", "Gempage", "JavaScript"],
    "liveUrl": "https://heikel.es/",
    "githubUrl": "#",
    "featured": true
  },
  {
    "id": 12,
    "title": "Wordpress to Shopify Store Migration (Spanish)",
    "category": "shopify",
    "description": "Migrated existing e-commerce store to Shopify with full data transfer, theme adaptation, SEO preservation, and functional improvements.",
    "image": projectsImage[5],
    "technologies": ["Shopify", "Liquid", "CSV Import", "SEO"],
    "liveUrl": "https://casadeeva.com/",
    "githubUrl": "#",
    "featured": true
  },
  {
    "id": 13,
    "title": "Shopify Theme Customization",
    "category": "shopify",
    "description": "Customized pre-built Shopify themes to meet client branding, color scheme, typography, and feature requirements for a unique online store.",
    "image": projectsImage[6],
    "technologies": ["Shopify", "Liquid", "CSS", "JavaScript"],
    "liveUrl": "https://yg0kxu-sn.myshopify.com/",
    "githubUrl": "#",
    "featured": true
  },
  {
    "id": 14,
    "title": "Shopify Store from Scratch",
    "category": "shopify",
    "description": "Designed high-converting landing pages for Shopify stores with persuasive product displays, call-to-action buttons, and responsive layouts.",
    "image": projectsImage[7],
    "technologies": ["Shopify", "Liquid", "HTML", "CSS", "JavaScript"],
    "liveUrl": "https://spacegoods.com/",
    "githubUrl": "#",
    "featured": false
  },
  {
    "id": 15,
    "title": "Store Build & Manual Product Upload",
    "category": "shopify",
    "description": "Improved store loading speed and performance by optimizing images, code, and apps for better user experience and higher SEO ranking.",
    "image": projectsImage[8],
    "technologies": [
      "Theme Customization",
      "Liquid",
      "Performance Tools",
      "SEO"
    ],
    "liveUrl": "https://primalqueen.com/",
    "githubUrl": "#",
    "featured": false
  },
  {
    "id": 16,
    "title": "Shopify Store Redesign",
    "category": "shopify",
    "description": "Integrated essential Shopify apps for email marketing, reviews, analytics, and dropshipping to enhance store functionality and business operations.",
    "image": projectsImage[9],
    "technologies": ["Shopify", "Liquid", "Apps", "API Integration"],
    "liveUrl": "https://tfstairs.com/",
    "githubUrl": "#",
    "featured": true
  },
  {
    "id": 17,
    "title": "Store Build & Manual Product Upload",
    "category": "shopify",
    "description": "Configured secure payment gateways including Stripe, PayPal, and local options to ensure smooth checkout experience for customers.",
    "image": projectsImage[10],
    "technologies": ["Shopify", "Payment APIs", "Liquid"],
    "liveUrl": "https://maisondorigine.fr/",
    "githubUrl": "#",
    "featured": true
  },
  {
    "id": 18,
    "title": "Multilingual Shopify Store(German & English)",
    "category": "shopify",
    "description": "Developed multilingual Shopify stores to target international customers with proper language switcher, translation, and currency support.",
    "image": projectsImage[11],
    "technologies": ["Shopify", "Liquid", "Apps", "SEO"],
    "liveUrl": "https://www.palace-home.ch/",
    "githubUrl": "#",
    "featured": false
  },
  {
    "id": 19,
    "title": "Bilingual Shopify Store(German & English)",
    "category": "shopify",
    "description": "Created promotional and marketing pages for campaigns, product launches, and seasonal offers with visually appealing layouts.",
    "image": projectsImage[12],
    "technologies": ["Liquid Coding", "Theme Customization", "JavaScript"],
    "liveUrl": "https://makya.de/",
    "githubUrl": "#",
    "featured": false
  },
  {
    "id": 20,
    "title": "Solar Energy Shopify Store",
    "category": "shopify",
    "description": "Set up advanced Shopify analytics and reporting dashboards to monitor sales, traffic, and conversions for data-driven business decisions.",
    "image": projectsImage[13],
    "technologies": ["Shopify", "Liquid", "Custom Coding", "SEO"],
    "liveUrl": "https://soluxious.com/",
    "githubUrl": "#",
    "featured": false
  }
]


const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  // Filters
  const filters = [
    { id: "all", label: "All Projects", count: projectList.length },
    {
      id: "shopify",
      label: "Shopify",
      count: projectList.filter((p) => p.category === "shopify").length,
    },
    {
      id: "fullstack",
      label: "Full Stack",
      count: projectList.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "frontend",
      label: "Frontend",
      count: projectList.filter((p) => p.category === "frontend").length,
    },
  ];

  // Filtered + visible projects
  const filteredProjects =
    activeFilter === "all"
      ? projectList
      : projectList.filter((project) => project.category === activeFilter);
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  // Reset visible count on filter change
  useEffect(() => {
    setVisibleCount(6);
  }, [activeFilter]);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-luxury">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            🚀 Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-primary">Projects</span> &{" "}
            <span className="text-accent">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Successfully delivered 53+ Shopify projects! Here’s a curated showcase of my best work—innovative, impactful and client-approved.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 p-1 bg-card rounded-2xl border border-border">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {visibleProjects.map((project) => (
            <div key={project.id} className="group h-full">
              <div className="glass-card p-6 hover:scale-105 transition-all duration-300 border border-border hover:border-primary/40 flex flex-col h-full">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-foreground">{project.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-xs font-medium hover:bg-primary/90 flex items-center justify-center"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" /> Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-300"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;