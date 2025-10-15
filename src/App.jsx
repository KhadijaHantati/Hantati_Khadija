import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ChevronUp,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      const sections = ["home", "about", "resume", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigation = [
    { id: "home", label: "Accueil" },
    { id: "about", label: "À Propos" },
    { id: "resume", label: "CV" },
    { id: "projects", label: "Projets" },
    { id: "contact", label: "Contact" },
  ];

  const skills = {
    "Intelligence Artificielle & Data Science": [
      "Machine Learning (Classification, Régression, Modèles prédictifs)",
      "Deep Learning (CNN, RNN, YOLO, GAN)",
      "Computer Vision (OpenCV, détection d'objets, traitement d'images)",
      "Algorithmes (DeepSORT, ByteTrack, détection intelligente)",
    ],
    "Développement & Programmation": [
      "Python, C/C++, Java, PHP",
      "TensorFlow, PyTorch, Scikit-learn",
      "Django, Flask, React.js, Laravel",
      "HTML/CSS/JavaScript",
      "Android Studio",
      "MySQL, MongoDB, Cassandra",
    ],
    "Systèmes & IoT": [
      "ESP32, ESP8266, Arduino",
      "Google Colab, MongoDB Atlas",
      "MATLAB, Git, Jupyter Notebook",
    ],
  };

  const education = [
    {
      year: "2023-2025",
      degree: "Master Systèmes Embarqués et Services Numériques",
      institution: "Faculté des Sciences Appliquées Ait Melloul",
    },
    {
      year: "2021-2022",
      degree: "Licence Sciences Mathématiques et Informatique - Génie Logiciel",
      institution: "Faculté des Sciences - Agadir",
    },
    {
      year: "2019-2021",
      degree: "DEUG Sciences Mathématiques et Informatique",
      institution: "Faculté des Sciences - Agadir",
    },
    {
      year: "2019",
      degree: "Baccalauréat Sciences Mathématiques",
      institution: "Lycée Badr Agadir",
    },
  ];

  const projects = [
    {
      title: "Détection et Reconnaissance Automatique des Incidents Routiers",
      category: "IA & Computer Vision",
      description:
        "Application IA d'analyse automatique de vidéos de circulation pour détecter les incidents en temps réel. Utilisation de YOLOv8 Nano et DeepSORT pour l'extraction de coordonnées véhicules et classification basée sur l'analyse des positions/vitesses. Interface Django avec alertes automatiques.",
      tags: ["YOLOv8", "DeepSORT", "Django", "Computer Vision"],
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      screenshots: [
        "./images/projects/mapLiveVideo.png",
        "/images/projects/incidents-routiers/screenshot1.png",
        "/images/projects/incidents-routiers/screenshot1.png",
      ],
      features: [
        "Détection temps réel",
        "Analyse de trajectoires",
        "Alertes automatiques",
        "Interface Django",
      ],
    },
    {
      title: "Détection de Métaplasie Intestinale par IA",
      category: "IA Médicale",
      description:
        "Modèle de deep learning pour la détection automatique de métaplasie intestinale dans des biopsies gastriques virtuelles. Algorithmes de classification pour assistance au diagnostic médical.",
      tags: ["Deep Learning", "Healthcare AI", "Classification"],
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      screenshots: [
        "/images/projects/mi1.jpeg",
        "/images/projects/mi2.jpeg",
        "/images/projects/mi3.jpeg",
      ],
      features: [
        "Assistance diagnostic",
        "Lames virtuelles",
        "Classification avancée",
        "Précision élevée",
      ],
    },
    {
      title: "Classification d'images avec DCGAN",
      category: "Deep Learning",
      description:
        "Système de classification combinant DCGAN pour génération de données synthétiques et MobileNet avec transfer learning. Implémentation complète avec évaluation des performances.",
      tags: ["GAN", "MobileNet", "Transfer Learning"],
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      features: [
        "Augmentation de données",
        "Transfer learning",
        "Données synthétiques",
        "Optimisation",
      ],
    },
    {
      title: "Système de Surveillance Intelligente des Plantes IoT",
      category: "IoT & IA",
      description:
        "Système IoT complet pour le monitoring automatisé de l'humidité du sol avec capteurs capacitifs et ESP32. Collecte de données en temps réel via WSN, stockage MongoDB Atlas, interface Django avec graphiques analytiques (Matplotlib, Pandas).",
      tags: ["IoT", "ESP32", "MongoDB", "Django", "WSN"],
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=400&fit=crop",
      features: [
        "Capteurs capacitifs d'humidité",
        "Réseau de capteurs sans fil",
        "Base de données NoSQL",
        "Visualisation analytique",
      ],
    },
    {
      title: "Distributeur Intelligent de Nourriture pour Animaux IoT",
      category: "IoT & Automatisation",
      description:
        "Système automatisé de distribution contrôlé par commandes vocales via Google Assistant. NodeMCU ESP32 avec Wi-Fi, protocole MQTT, intégration Adafruit IO et IFTTT pour programmation d'horaires et contrôle à distance.",
      tags: ["IoT", "ESP32", "MQTT", "Google Assistant", "IFTTT"],
      image:
        "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=400&fit=crop",
      features: [
        "Commandes vocales Google",
        "Programmation d'horaires",
        "Contrôle à distance",
        "Protocole MQTT",
      ],
    },
    {
      title: "DevQuiz - Application Mobile de Quiz de Programmation",
      category: "Développement Mobile",
      description:
        "Application Android native pour l'évaluation des compétences en programmation. Quiz interactifs sur 6 langages (C++, Java, PHP, Python, CSS, HTML) avec interface moderne, base SQLite pour scores et suivi des progrès.",
      tags: ["Android", "Java", "SQLite", "Mobile Development"],
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      features: [
        "6 langages de programmation",
        "Interface utilisateur moderne",
        "Gestion des scores SQLite",
        "Feedback immédiat",
      ],
    },
    {
      title: "Application de Filtrage d'Images et Détection des Contours",
      category: "Computer Vision",
      description:
        "Application complète de traitement d'image avec Python et Tkinter. Implémentation d'algorithmes de filtrage spatial (moyenneur, médian) et fréquentiel (idéal, gaussien, Butterworth), détection des contours (Roberts, Sobel, Prewitt, Canny).",
      tags: ["Python", "OpenCV", "Tkinter", "Image Processing"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      features: [
        "Filtrage spatial et fréquentiel",
        "Opérateurs de contours multiples",
        "Interface Tkinter intuitive",
        "Analyse quantitative des performances",
      ],
    },
    {
      title: "Simulation d'Opération de Détection et Peinture Robotisée",
      category: "Robotique & Industrie 4.0",
      description:
        "Système de simulation robotique pour peinture industrielle avec RoboDK et robot Han's E03. Programmation hors ligne, optimisation de trajectoires, génération de code Python via API, intégration de systèmes de vision et convoyeurs.",
      tags: ["RoboDK", "Python", "Robotique", "Industrie 4.0"],
      image: "https://www.robotics247.com/images/article/Hans_Robot.png",
      features: [
        "Programmation hors ligne",
        "Optimisation de trajectoires",
        "Détection d'objets intelligente",
        "Réduction des temps d'arrêt",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Khadija Hantati
            </h1>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 px-4 ${
                    activeSection === item.id
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Khadija Hantati
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Spécialisée en Intelligence Artificielle et Innovation
              Technologique
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Master Systèmes Embarqués et Services Numériques | Expert en
              Machine Learning, Deep Learning & Computer Vision
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              Me Contacter
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            À Propos
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ingénieure en Intelligence Artificielle
              </h3>
              <p className="text-gray-600 mb-4">
                Diplômée d'un Master Systèmes Embarqués et Services Numériques
                avec des compétences solides en Machine Learning, Deep Learning
                et Développement informatique.
              </p>
              <p className="text-gray-600 mb-6">
                Passionnée par la recherche en IA et forte d'une expérience
                pratique en développement de modèles de prévision, systèmes
                intelligents et algorithmes de détection avec un fort intérêt
                pour l'innovation technologique et les solutions IA pour les
                villes intelligentes.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Localisation</p>
                  <p className="font-medium text-gray-900">Agadir, Maroc</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Langues</p>
                  <p className="font-medium text-gray-900">
                    Arabe, Français, Anglais, Tamazight
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg p-8 text-white">
              <h4 className="text-2xl font-bold mb-6">Domaines d'Expertise</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Intelligence Artificielle & Machine Learning</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Computer Vision & Traitement d'Images</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Deep Learning & Réseaux de Neurones</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Systèmes Embarqués & IoT</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Développement Web & Mobile</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            CV
          </h2>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Formation</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600"
                >
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-gray-900">
                      {edu.degree}
                    </h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-gray-600">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Compétences Techniques
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    {category}
                  </h4>
                  <ul className="space-y-2">
                    {items.map((skill, index) => (
                      <li
                        key={index}
                        className="text-gray-600 text-sm flex items-start"
                      >
                        <span className="text-blue-600 mr-2">▹</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Expérience
            </h3>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <h4 className="text-xl font-bold text-gray-900">
                  Stage Développeur Application RH
                </h4>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  2022
                </span>
              </div>
              <p className="text-gray-700 font-medium mb-2">ENA - Agadir</p>
              <p className="text-gray-600">
                Conception et développement d'une application web de gestion des
                ressources humaines
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Projets IA & Recherche
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">
                      Voir les détails
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-sm text-blue-600 font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedProject(null);
            setCurrentImageIndex(0); // Reset l'index
          }}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setCurrentImageIndex(0);
                }}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 z-10"
              >
                <X size={24} />
              </button>

              {/* Carousel d'images */}
              {selectedProject.screenshots &&
              selectedProject.screenshots.length > 0 ? (
                <div className="relative">
                  <img
                    src={selectedProject.screenshots[currentImageIndex]}
                    alt={`${selectedProject.title} - Screenshot ${
                      currentImageIndex + 1
                    }`}
                    className="w-full h-96 object-contain bg-gray-100"
                  />

                  {/* Boutons de navigation */}
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
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100"
                      >
                        <ChevronRight
                          size={24}
                          className="transform rotate-180 text-blue-800"
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
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-100"
                      >
                        <ChevronRight size={24} />
                      </button>

                      {/* Indicateurs de pagination */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {selectedProject.screenshots.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              index === currentImageIndex
                                ? "bg-white w-8"
                                : "bg-white bg-opacity-50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-96 object-contain bg-gray-100"
                />
              )}
            </div>

            <div className="p-8">
              <div className="text-blue-600 text-sm font-semibold mb-2">
                {selectedProject.category}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Technologies utilisées
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Fonctionnalités clés
                </h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-600"
                    >
                      <ChevronRight
                        className="text-blue-600 flex-shrink-0 mt-1"
                        size={20}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Miniatures des screenshots */}
              {selectedProject.screenshots &&
                selectedProject.screenshots.length > 1 && (
                  <div className="mt-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      Galerie
                    </h4>
                    <div className="grid grid-cols-4 gap-2">
                      {selectedProject.screenshots.map((screenshot, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`relative overflow-hidden rounded-lg ${
                            index === currentImageIndex
                              ? "ring-2 ring-blue-600"
                              : "opacity-70 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={screenshot}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-20 object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      )}
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Contact
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Localisation</p>
                    <p className="text-gray-900 font-medium">Agadir, Maroc</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a
                      href="mailto:khadijahantati90@gmail.com"
                      className="text-gray-900 font-medium hover:text-blue-600"
                    >
                      khadijahantati90@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Téléphone</p>
                    <a
                      href="tel:0636041755"
                      className="text-gray-900 font-medium hover:text-blue-600"
                    >
                      0636041755
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-center text-gray-600 mb-4">
                  N'hésitez pas à me contacter pour discuter de vos projets IA
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="mailto:khadijahantati90@gmail.com"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Envoyer un Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Khadija Hantati. Tous droits réservés.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Retour en haut"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}
