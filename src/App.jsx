import React, { useState } from "react";

import {
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      nav: {
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
      },
      hero: {
        greeting: "HELLO!",
        title1: "I'm",
        title2: "Khadija",
        title3: "Hantati",
        profession: "Full Stack Developer",
        subtitle:
          "Full Stack Web Developer & AI Engineer. Expert in building modern web applications with React, Django, and Laravel, while integrating AI solutions including Computer Vision, Deep Learning, and IoT systems.",
        btnWork: "View My Work",
        btnCV: "Download CV",
      },
      about: {
        label: "About Me",
        title: "Know Me More",
        subtitle: "Hi, I'm",
        description1:
          "I'm a Full Stack Web Developer and AI Engineer with strong expertise in building modern web applications and intelligent systems. My technical skills span from front-end development with React to back-end with Django, Laravel, and Node.js, combined with advanced knowledge in Computer Vision, Deep Learning, and IoT solutions.",
        description2:
          "Currently based in Agadir, Morocco, I'm passionate about fintech and innovative digital solutions. I focus on creating scalable web applications that integrate AI technologies to solve real-world problems and deliver impactful user experiences.",
        educationTitle: "Education",
        experienceTitle: "Experience",
        master: "Master's Degree",
        masterField: "Embedded Systems & Digital Services",
        masterSchool: "Faculty of Applied Sciences Ait Melloul",
        bachelor: "Bachelor's Degree",
        bachelorField: "Mathematical & Computer Sciences",
        bachelorSchool: "Faculty of Sciences Agadir",
        internship: "End of Studies Internship",
        internshipTitle: "HR Application Developer",
        internshipProject:
          "Design and development of a web application for human resources management",
        internshipCompany: "ENA-Agadir",
        internshipPeriod: "2022",
      },
      skills: {
        label: "My Skills",
        title: "What I Do",
      },
      projects: {
        label: "Portfolio",
        title: "Featured Projects",
        viewDetails: "View Details",
      },
      contact: {
        label: "Contact",
        title: "Get In Touch",
        subtitle:
          "I'm always open to new opportunities and interesting projects. Let's work together!",
        email: "Email Me",
        linkden: "Linkden",
      },
      footer: {
        rights: "All rights reserved.",
      },
      modal: {
        techUsed: "Technologies Used",
        gallery: "Gallery",
      },
    },
    fr: {
      nav: {
        home: "Accueil",
        about: "À Propos",
        projects: "Projets",
        contact: "Contact",
      },
      hero: {
        greeting: "BONJOUR!",
        title1: "Je suis",
        title2: "Khadija",
        title3: "Hantati",
        profession: "Développeuse Full Stack",
        subtitle:
          "Développeuse Web Full Stack & Ingénieure IA. Experte en développement d'applications web modernes avec React, Django et Laravel, tout en intégrant des solutions IA incluant Vision par Ordinateur, Deep Learning et systèmes IoT.",
        btnWork: "Voir Mon Travail",
        btnCV: "Télécharger CV",
      },
      about: {
        label: "À Propos",
        title: "En Savoir Plus",
        subtitle: "Bonjour, je suis",
        description1:
          "Je suis Développeuse Web Full Stack et Ingénieure IA avec une solide expertise dans la création d'applications web modernes et de systèmes intelligents. Mes compétences techniques vont du développement front-end avec React au back-end avec Django, Laravel et Node.js, combinées à des connaissances avancées en Vision par Ordinateur, Deep Learning et solutions IoT.",
        description2:
          "Actuellement basée à Agadir, au Maroc, je suis passionnée par les fintech et les solutions digitales innovantes. Je me concentre sur la création d'applications web évolutives qui intègrent les technologies IA pour résoudre des problèmes réels et offrir des expériences utilisateur impactantes.",
        educationTitle: "Formation",
        experienceTitle: "Expérience",
        master: "Master",
        masterField: "Systèmes Embarqués & Services Numériques",
        masterSchool: "Faculté des Sciences Appliquées Ait Melloul",
        bachelor: "Licence",
        bachelorField: "Sciences Mathématiques & Informatiques",
        bachelorSchool: "Faculté des Sciences Agadir",
        internship: "Stage de Fin d'Études",
        internshipTitle: "Développeur Application RH",
        internshipProject:
          "Conception et développement d'une application web de gestion des ressources humaines",
        internshipCompany: "ENA-Agadir",
        internshipPeriod: "2022",
      },
      skills: {
        label: "Mes Compétences",
        title: "Ce Que Je Fais",
      },
      projects: {
        label: "Portfolio",
        title: "Projets Principaux",
        viewDetails: "Voir Détails",
      },
      contact: {
        label: "Contact",
        title: "Contactez-Moi",
        subtitle:
          "Je suis toujours ouverte à de nouvelles opportunités et projets intéressants. Travaillons ensemble!",
        email: "M'envoyer un Email",
        github: "GitHub",
      },
      footer: {
        rights: "Tous droits réservés.",
      },
      modal: {
        techUsed: "Technologies Utilisées",
        gallery: "Galerie",
      },
    },
  };

  const t = translations[language];

  const projectsData = {
    en: [
      {
        id: 1,
        title: "HR Management Web Application",
        category: "Web Development",
        description:
          "Complete web application for human resources management developed during my end-of-studies internship at ENA-Agadir. Features include employee management, leave tracking, and administrative workflows.",
        tech: ["PHP", "Laravel", "MySQL", "HTML/CSS", "JavaScript"],
        image: "👥",
        screenshots: [
          {
            type: "image",
            src: "./images/Ena/ena3.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena4.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena5.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena6.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena7.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena14.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena15.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena16.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena8.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena9.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena10.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena11.png",
          },
        ],
      },
      {
        id: 2,
        title: "Road Incident Detection from Video Streams",
        category: "AI/Computer Vision",
        description:
          "Real-time traffic incident detection using YOLOv8 Nano and DeepSORT trajectory analysis",
        tech: ["YOLOv8", "DeepSORT", "Django", "Python"],
        image: "🚗",
        screenshots: [
          {
            type: "image",
            src: "./images/dashboard.png",
          },
          {
            type: "image",
            src: "./images/uploadVideo.png",
          },
          {
            type: "image",
            src: "./images/mapLiveVideo.png",
          },
          {
            type: "image",
            src: "./images/subscribe.png",
          },
        ],
      },
      {
        id: 3,
        title: "Intestinal Metaplasia Detection",
        category: "Medical AI",
        description:
          "Deep learning model for automatic detection of intestinal metaplasia in gastric biopsies",
        tech: ["Deep Learning", "Medical Imaging", "Python", "TensorFlow"],
        image: "🔬",
        screenshots: [
          {
            type: "image",
            src: "./images/mi1.jpeg",
          },
          {
            type: "image",
            src: "./images/mi2.jpeg",
          },
          {
            type: "image",
            src: "./images/mi3.jpeg",
          },
        ],
      },
      {
        id: 4,
        title: "Smart Agriculture IoT System",
        category: "IoT/AI",
        description:
          "Automated crop monitoring system with ESP32 sensors and predictive algorithms",
        tech: ["ESP32", "IoT", "Django", "MongoDB", "Predictive Analytics"],
        image: "🌾",
        screenshots: [
          {
            type: "image",
            src: "./images/smartIOT/smart1.png",
          },
          {
            type: "image",
            src: "./images/smartIOT/smart2.png",
          },
          {
            type: "image",
            src: "./images/smartIOT/smart3.png",
          },
          {
            type: "image",
            src: "./images/smartIOT/smart4.png",
          },
        ],
      },

      {
        id: 5,
        title: "Advanced Image Classification with DCGAN",
        category: "Deep Learning",
        description:
          "Classification system combining DCGAN for synthetic data generation and MobileNet transfer learning",
        tech: ["DCGAN", "MobileNet", "Transfer Learning", "PyTorch"],
        image: "🖼️",
        screenshots: [
          {
            type: "image",
            src: "./images/projects/hr1.png",
          },
          {
            type: "video",
            src: "./videos/projects/hr-demo.mp4",
            thumbnail: "./images/projects/hr-video-thumb.png",
          },
          {
            type: "image",
            src: "./images/projects/hr2.png",
          },
        ],
      },
      {
        id: 6,
        title: "DevQuiz - Programming Quiz Mobile App",
        category: "Mobile Development",
        description:
          "Native Android mobile application for programming skills assessment. Features interactive quizzes on 6 programming languages/technologies (C++, Java, PHP, Python, CSS, HTML) with a modern and intuitive user interface. SQLite database integration for score management and user progress tracking with immediate feedback.",
        tech: ["Android Studio", "Java", "SQLite", "XML", "Mobile Development"],
        image: "📱",
        screenshots: [
          {
            type: "image",
            src: "./images/androidApp6.jpg",
          },
          {
            type: "image",
            src: "./images/androidApp2.jpg",
          },
          {
            type: "image",
            src: "./images/androidApp3.jpg",
          },
          {
            type: "image",
            src: "./images/androidApp5.jpg",
          },
          {
            type: "image",
            src: "./images/androidApp4.jpg",
          },
        ],
      },
      {
        id: 7,
        title: "Image Filtering & Edge Detection Application",
        category: "Computer Vision",
        description:
          "Complete image processing application using Python and Tkinter implementing various filtering and edge detection techniques. Includes spatial filtering (mean, median) and frequency filtering (ideal, Gaussian, Butterworth), plus edge detection methods (Roberts, Sobel, Prewitt, Canny) with real-time transformations and comparative visualization.",
        tech: ["Python", "OpenCV", "Tkinter", "PIL", "NumPy", "Matplotlib"],
        image: "🖼️",
        screenshots: [
          {
            type: "image",
            src: "./images/image_filtering/imgFiltering2.jpg",
          },
          {
            type: "image",
            src: "./images/image_filtering/imgFiltering1.jpg",
          },
          {
            type: "image",
            src: "./images/image_filtering/imgFiltering3.jpg",
          },
          {
            type: "image",
            src: "./images/image_filtering/imgFiltering4.jpg",
          },
          {
            type: "image",
            src: "./images/image_filtering/imgFiltering5.jpg",
          },
          {
            type: "image",
            src: "./images/image_filtering/imgFiltering6.jpg",
          },
          {
            type: "image",
            src: "./images/image_filtering/imgFiltering7.jpg",
          },
          {
            type: "image",
            src: "./images/image_filtering/imgFiltering8.jpg",
          },
        ],
      },
      {
        id: 8,
        title: "Robotic Painting Simulation with RoboDK",
        category: "Robotics/Industry 4.0",
        description:
          "Complete robotic simulation system for industrial painting operations using RoboDK software and Han's Robot E03 collaborative robot. Features complex trajectory design, offline robot programming, automated production environment simulation with conveyors and vision systems, demonstrating Industry 4.0 and collaborative robotics applications.",
        tech: ["RoboDK", "Python", "Robotics", "Simulation", "Industry 4.0"],
        image: "🤖",
        screenshots: [
          {
            type: "video",
            src: "./videos/robodkvid2.mp4",
            thumbnail: "./images/robodk/hans_bot.png",
          },
          {
            type: "video",
            src: "./videos/robodkvid1.mp4",
            thumbnail: "./images/robodk/hans_bot.png",
          },
          {
            type: "image",
            src: "./images/robodk/IMG6.jpg",
          },
          {
            type: "image",
            src: "./images/robodk/IMG5.jpg",
          },
          {
            type: "image",
            src: "./images/robodk/IMG7.jpg",
          },
          {
            type: "image",
            src: "./images/robodk/IMG11.jpg",
          },
          {
            type: "image",
            src: "./images/robodk/IMG12.jpg",
          },
        ],
      },
    ],
    fr: [
      {
        id: 1,
        title: "Application Web de Gestion des Ressources Humaines",
        category: "Développement Web",
        description:
          "Application web complète de gestion des ressources humaines développée lors de mon stage de fin d'études chez ENA-Agadir. Fonctionnalités incluant la gestion des employés, suivi des congés et flux administratifs.",
        tech: ["PHP", "Laravel", "MySQL", "HTML/CSS", "JavaScript"],
        image: "👥",
        screenshots: [
          {
            type: "image",
            src: "./images/Ena/ena3.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena4.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena5.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena6.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena7.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena14.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena15.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena16.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena8.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena9.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena10.png",
          },
          {
            type: "image",
            src: "./images/Ena/ena11.png",
          },
        ],
      },
      {
        id: 2,
        title: "Détection d'Incidents Routiers à partir de Flux Vidéo",
        category: "IA/Vision par Ordinateur",
        description:
          "Détection d'incidents de trafic en temps réel utilisant YOLOv8 Nano et l'analyse de trajectoire DeepSORT",
        tech: ["YOLOv8", "DeepSORT", "Django", "Python"],
        image: "🚗",
        screenshots: [
          {
            type: "image",
            src: "./images/dashboard.png",
          },
          {
            type: "image",
            src: "./images/uploadVideo.png",
          },
          {
            type: "image",
            src: "./images/mapLiveVideo.png",
          },
          {
            type: "image",
            src: "./images/subscribe.png",
          },
        ],
      },
      {
        id: 3,
        title: "Détection de Métaplasie Intestinale",
        category: "IA Médicale",
        description:
          "Modèle d'apprentissage profond pour la détection automatique de la métaplasie intestinale dans les biopsies gastriques",
        tech: ["Deep Learning", "Imagerie Médicale", "Python", "TensorFlow"],
        image: "🔬",
        screenshots: [
          {
            type: "image",
            src: "./images/mi1.jpeg",
          },
          {
            type: "image",
            src: "./images/mi2.jpeg",
          },
          {
            type: "image",
            src: "./images/mi3.jpeg",
          },
        ],
      },

      {
        id: 4,
        title: "Système IoT d'Agriculture Intelligente",
        category: "IoT/IA",
        description:
          "Système automatisé de surveillance des cultures avec capteurs ESP32 et algorithmes prédictifs",
        tech: ["ESP32", "IoT", "Django", "MongoDB", "Analyse Prédictive"],
        image: "🌾",
        screenshots: [
          {
            type: "image",
            src: "./images/smartIOT/smart1.png",
          },
          {
            type: "image",
            src: "./images/smartIOT/smart2.png",
          },
          {
            type: "image",
            src: "./images/smartIOT/smart3.png",
          },
          {
            type: "image",
            src: "./images/smartIOT/smart4.png",
          },
        ],
      },
      {
        id: 5,
        title: "Classification d'Images Avancée avec DCGAN",
        category: "Deep Learning",
        description:
          "Système de classification combinant DCGAN pour la génération de données synthétiques et le transfert d'apprentissage MobileNet",
        tech: ["DCGAN", "MobileNet", "Transfer Learning", "PyTorch"],
        image: "🖼️",
        screenshots: [],
      },
      {
        id: 6,
        title: "DevQuiz - Application Mobile de Quiz de Programmation",
        category: "Développement Mobile",
        description:
          "Application mobile Android native pour l'évaluation des compétences en programmation. Propose des quiz interactifs sur 6 langages/technologies (C++, Java, PHP, Python, CSS, HTML) avec interface utilisateur moderne et intuitive. Intégration SQLite pour la gestion des scores et suivi des progrès avec feedback immédiat.",
        tech: ["Android Studio", "Java", "SQLite", "XML", "Mobile Development"],
        image: "📱",
        screenshots: [
          {
            type: "image",
            src: "./images/androidApp6.jpg",
          },
          {
            type: "image",
            src: "./images/androidApp2.jpg",
          },
          {
            type: "image",
            src: "./images/androidApp3.jpg",
          },
          {
            type: "image",
            src: "./images/androidApp5.jpg",
          },
          {
            type: "image",
            src: "./images/androidApp4.jpg",
          },
        ],
      },
      {
        id: 7,
        title: "Application de Filtrage d'Images et Détection des Contours",
        category: "Vision par Ordinateur",
        description:
          "Application complète de traitement d'image utilisant Python et Tkinter implémentant diverses techniques de filtrage et détection des contours. Inclut filtrage spatial (moyenneur, médian) et fréquentiel (idéal, gaussien, Butterworth), plus méthodes de détection (Roberts, Sobel, Prewitt, Canny) avec transformations en temps réel et visualisation comparative.",
        tech: ["Python", "OpenCV", "Tkinter", "PIL", "NumPy", "Matplotlib"],
        image: "🖼️",
        screenshots: [
          {
            type: "image",
            src: "./images/image_filtering/imgFiltering2.jpg",
          },
          {
            type: "image",
            src: "./images/image_filtering/imgFiltering1.jpg",
          },
          {
            type: "image",
            src: "./images/image_filtering/imgFiltering3.jpg",
          },
          {
            type: "image",
            src: "./images/image_filtering/imgFiltering4.jpg",
          },
          {
            type: "image",
            src: "./images/image_filtering/imgFiltering5.jpg",
          },
          {
            type: "image",
            src: "./images/image_filtering/imgFiltering6.jpg",
          },
          {
            type: "image",
            src: "./images/image_filtering/imgFiltering7.jpg",
          },
          {
            type: "image",
            src: "./images/image_filtering/imgFiltering8.jpg",
          },
        ],
      },
      {
        id: 8,
        title: "Simulation de Peinture Robotisée avec RoboDK",
        category: "Robotique/Industrie 4.0",
        description:
          "Système complet de simulation robotique pour opérations de peinture industrielle utilisant RoboDK et robot collaboratif Han's Robot E03. Comprend conception de trajectoires complexes, programmation hors ligne, simulation d'environnements automatisés avec convoyeurs et vision, démontrant les applications de l'Industrie 4.0 et robotique collaborative.",
        tech: ["RoboDK", "Python", "Robotique", "Simulation", "Industrie 4.0"],
        image: "🤖",
        screenshots: [
          {
            type: "video",
            src: "./videos/robodkvid2.mp4",
            thumbnail: "./images/robodk/hans_bot.png",
          },
          {
            type: "video",
            src: "./videos/robodkvid1.mp4",
            thumbnail: "./images/robodk/hans_bot.png",
          },
          {
            type: "image",
            src: "./images/robodk/IMG6.jpg",
          },
          {
            type: "image",
            src: "./images/robodk/IMG5.jpg",
          },
          {
            type: "image",
            src: "./images/robodk/IMG7.jpg",
          },
          {
            type: "image",
            src: "./images/robodk/IMG11.jpg",
          },
          {
            type: "image",
            src: "./images/robodk/IMG12.jpg",
          },
        ],
      },
    ],
  };

  const projects = projectsData[language];

  const skills = {
    "AI & Data Science": [
      "Machine Learning",
      "Deep Learning",
      "CNN/RNN",
      "YOLO",
      "GAN",
      "Computer Vision",
    ],
    Development: [
      "Python",
      "C/C++",
      "Java",
      "JavaScript",
      "React",
      "Django",
      "Flask",
    ],
    Databases: ["MySQL", "MongoDB", "Cassandra"],
    "IoT & Embedded": ["ESP32", "ESP8266", "Arduino", "Google Colab"],
    Tools: ["TensorFlow", "PyTorch", "OpenCV", "Git", "Jupyter"],
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');

        * {
          // font-family: 'Poppins', sans-serif;
          font-family: 'Playfair Display', serif;   

        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
        }
        
        .btn-outline {
          border: 2px solid #667eea;
          color: #667eea;
          transition: all 0.3s ease;
        }
        
        .btn-outline:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          transform: translateY(-2px);
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .skill-badge {
          transition: all 0.3s ease;
        }
        
        .skill-badge:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          transform: scale(1.05);
        }
        
        .social-icon {
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-color: transparent;
          color: white;
          transform: translateY(-3px);
        }
      `}</style>

      <div className="bg-white text-gray-800 min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
          <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
            <div className="text-3xl font-bold gradient-text">K.H</div>
            <ul className="flex gap-10 items-center">
              <li>
                <a
                  href="#home"
                  className="text-gray-700 hover:text-purple-600 transition font-medium text-base"
                >
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-purple-600 transition font-medium text-base"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-700 hover:text-purple-600 transition font-medium text-base"
                >
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-purple-600 transition font-medium text-base"
                >
                  {t.nav.contact}
                </a>
              </li>
              <li>
                <button
                  onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                  className="px-4 py-2 border-2 border-purple-400 text-purple-600 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition"
                >
                  {language === "en" ? "FR" : "EN"}
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="pt-40 pb-32 px-8 bg-gradient-to-br from-purple-50 to-blue-50"
        >
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <p className="text-purple-600 font-semibold text-sm mb-3 tracking-wide">
                {t.hero.greeting}
              </p>
              <h1 className="text-5xl font-bold mb-3 text-gray-900 leading-tight">
                {t.hero.title1}{" "}
                <span className="gradient-text">
                  {t.hero.title2} {t.hero.title3}
                </span>
              </h1>
              <p className="text-2xl font-bold text-gray-700 mb-6">
                {t.hero.profession}{" "}
              </p>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                {t.hero.subtitle}
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 mb-10">
                <a
                  href="https://github.com/KhadijaHantati"
                  target="_blank"
                  className="social-icon w-14 h-14 rounded-full border-2 border-purple-400 flex items-center justify-center text-purple-600"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://x.com/KhadijaHantati"
                  target="_blank"
                  className="social-icon w-14 h-14 rounded-full border-2 border-purple-400 flex items-center justify-center text-purple-600"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="mailto:khadijahantati90@gmail.com"
                  target="_blank"
                  className="social-icon w-14 h-14 rounded-full border-2 border-purple-400 flex items-center justify-center text-purple-600"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/khadija-hantati-51579a227"
                  target="_blank"
                  className="social-icon w-14 h-14 rounded-full border-2 border-purple-400 flex items-center justify-center text-purple-600"
                >
                  <Linkedin size={24} />
                </a>
              </div>

              <div className="flex gap-5">
                <a href="#projects">
                  <button className="px-8 py-4 btn-primary text-white rounded-full font-semibold text-base">
                    {t.hero.btnWork}
                  </button>
                </a>
                <a href="./devWeb.pdf" target="_blank">
                  <button className="px-8 py-4 btn-outline rounded-full font-semibold text-base">
                    {t.hero.btnCV}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-28 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-purple-600 font-semibold text-sm mb-3 tracking-widest uppercase">
                {t.about.label}
              </p>
              <h2 className="text-5xl font-bold text-gray-900">
                {t.about.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                  {t.about.subtitle}{" "}
                  <span className="gradient-text">Khadija Hantati</span>
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg font-light">
                  {t.about.description1}
                </p>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
                  {t.about.description2}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-700">
                    <MapPin className="text-purple-600" size={22} />
                    <span className="text-base">Agadir, Morocco</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700">
                    <Mail className="text-purple-600" size={22} />
                    <span className="text-base">
                      khadijahantati90@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700">
                    <Phone className="text-purple-600" size={22} />
                    <span className="text-base">+212 636041755</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-8 gradient-text">
                  {t.about.educationTitle}
                </h3>
                <div className="space-y-8">
                  <div className="relative pl-8 border-l-2 border-purple-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-700"></div>
                    <h4 className="font-bold text-xl text-gray-900 mb-2">
                      {t.about.master}
                    </h4>
                    <p className="text-purple-600 font-semibold mb-2">
                      {t.about.masterField}
                    </p>
                    <p className="text-gray-600 font-light">
                      {t.about.masterSchool}
                    </p>
                    <p className="text-gray-500 text-sm mt-1">2023 - 2025</p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-purple-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-700"></div>
                    <h4 className="font-bold text-xl text-gray-900 mb-2">
                      {t.about.bachelor}
                    </h4>
                    <p className="text-purple-600 font-semibold mb-2">
                      {t.about.bachelorField}
                    </p>
                    <p className="text-gray-600 font-light">
                      {t.about.bachelorSchool}
                    </p>
                    <p className="text-gray-500 text-sm mt-1">2021 - 2022</p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-purple-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-700"></div>
                    <h4 className="font-bold text-xl text-gray-900 mb-2">
                      {t.about.internship}
                    </h4>
                    <p className="text-purple-600 font-semibold mb-2">
                      {t.about.internshipTitle}
                    </p>
                    <p className="text-gray-600 font-light">
                      {t.about.internshipCompany}
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      {t.about.internshipPeriod}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-28 px-8 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-purple-600 font-semibold text-sm mb-3 tracking-widest uppercase">
                {t.skills.label}
              </p>
              <h2 className="text-5xl font-bold text-gray-900">
                {t.skills.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map((category, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all card-hover"
                >
                  <h3 className="text-xl font-bold gradient-text mb-6">
                    {category[0]}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category[1].map((skill, i) => (
                      <span
                        key={i}
                        className="skill-badge bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-28 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-purple-600 font-semibold text-sm mb-3 tracking-widest uppercase">
                {t.projects.label}
              </p>
              <h2 className="text-5xl font-bold text-gray-900">
                {t.projects.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="h-64 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center text-7xl">
                    {project.image}
                  </div>
                  <div className="p-8">
                    <span className="text-xs text-purple-600 font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mt-3 mb-4 text-gray-900 group-hover:text-purple-600 transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed font-light">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <button className="text-purple-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                      {t.projects.viewDetails} <ExternalLink size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-28 px-8 bg-gradient-to-br from-purple-600 to-blue-600 text-white"
        >
          <div className="max-w-7xl mx-auto text-center">
            <p className="font-semibold text-sm mb-3 tracking-widest uppercase opacity-90">
              {t.contact.label}
            </p>
            <h2 className="text-5xl font-bold mb-6">{t.contact.title}</h2>
            <p className="text-xl mb-12 opacity-90 font-light max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:khadijahantati90@gmail.com"
                className="flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <Mail size={20} /> {t.contact.email}
              </a>
              <a
                href="https://linkedin.com/in/khadija-hantati-51579a227"
                className="flex items-center gap-3 px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all hover:-translate-y-1"
              >
                <Linkedin size={20} /> {t.contact.linden}
              </a>
            </div>
          </div>
        </section>

        {/* Project Popup Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-6"
            onClick={() => {
              setSelectedProject(null);
              setCurrentImageIndex(0);
            }}
          >
            <div
              className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    setCurrentImageIndex(0);
                  }}
                  className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl z-10 transition-all hover:scale-110"
                >
                  <X size={24} className="text-white" />
                </button>

                {/* Carousel */}
                {selectedProject.screenshots &&
                selectedProject.screenshots.length > 0 ? (
                  <div className="relative">
                    {/* Render Image or Video based on type */}
                    {selectedProject.screenshots[currentImageIndex]?.type ===
                    "video" ? (
                      <video
                        controls
                        autoPlay
                        loop
                        className="w-full h-96 object-contain bg-gradient-to-br from-purple-50 to-blue-50 rounded-t-3xl"
                      >
                        <source
                          src={
                            selectedProject.screenshots[currentImageIndex]
                              ?.src ||
                            selectedProject.screenshots[currentImageIndex]
                          }
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <img
                        src={
                          selectedProject.screenshots[currentImageIndex]?.src ||
                          selectedProject.screenshots[currentImageIndex]
                            ?.image ||
                          selectedProject.screenshots[currentImageIndex]
                        }
                        alt={`${selectedProject.title} - Screenshot ${
                          currentImageIndex + 1
                        }`}
                        className="w-full h-96 object-contain bg-gradient-to-br from-purple-50 to-blue-50 rounded-t-3xl"
                      />
                    )}

                    {/* Navigation Buttons */}
                    {selectedProject.screenshots.length > 1 && (
                      <>
                        <button
                          onClick={() =>
                            setCurrentImageIndex(
                              currentImageIndex === 0
                                ? selectedProject.screenshots.length - 1
                                : currentImageIndex - 1
                            )
                          }
                          className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
                        >
                          <ChevronRight
                            size={24}
                            className="transform rotate-180 text-purple-600"
                          />
                        </button>
                        <button
                          onClick={() =>
                            setCurrentImageIndex(
                              currentImageIndex ===
                                selectedProject.screenshots.length - 1
                                ? 0
                                : currentImageIndex + 1
                            )
                          }
                          className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
                        >
                          <ChevronRight size={24} className="text-purple-600" />
                        </button>

                        {/* Pagination Indicators */}
                        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {selectedProject.screenshots.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`h-2 rounded-full transition-all ${
                                index === currentImageIndex
                                  ? "bg-purple-600 w-8"
                                  : "bg-gray-300 w-2"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : null}
              </div>

              <div className="p-10">
                <span className="text-xs text-purple-600 font-bold uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-4xl font-bold text-gray-900 mt-3 mb-6">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg font-light">
                  {selectedProject.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-5 py-2.5 rounded-full font-semibold border-2 border-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Thumbnail Gallery */}
                {selectedProject.screenshots &&
                  selectedProject.screenshots.length > 1 && (
                    <div className="mt-8">
                      <h4 className="text-2xl font-bold text-gray-900 mb-4">
                        {t.modal.gallery}
                      </h4>
                      <div className="grid grid-cols-4 gap-3">
                        {selectedProject.screenshots.map(
                          (screenshot, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`relative overflow-hidden rounded-xl border-2 transition-all ${
                                index === currentImageIndex
                                  ? "border-purple-600 shadow-lg scale-105"
                                  : "border-gray-200 opacity-60 hover:opacity-100 hover:border-purple-300"
                              }`}
                            >
                              {/* Show thumbnail or video preview */}
                              <img
                                src={
                                  screenshot?.thumbnail ||
                                  screenshot?.src ||
                                  screenshot?.image ||
                                  screenshot
                                }
                                alt={`Thumbnail ${index + 1}`}
                                className="w-full h-24 object-cover"
                              />
                              {/* Video indicator overlay */}
                              {screenshot?.type === "video" && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-90 flex items-center justify-center">
                                    <div className="w-0 h-0 border-l-8 border-l-purple-600 border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                                  </div>
                                </div>
                              )}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-10 px-8">
          <div className="max-w-7xl mx-auto text-center">
            <p className="font-light">
              © 2025 Khadija Hantati. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
