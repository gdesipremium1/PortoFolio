import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, AlignHorizontalJustifyEndIcon, PenTool } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import PortofolioSwiper from './components/swiper/ThumbsGallery';
import ContactButton from './components/popup/ContactInfos';
import './components/swiper/style.css'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "Plateforme E-Commerce",
      description: "Réalisation de plateformes et boutiques e-commerce, Des fonctionnalitées comme: gestions de produit, suivie client, gestion des commande jusq'aux payements et livraison",
      image: "images/capabilitys/e-commerce.png",
      tags: ["WordPress", "WooCommerc", "More..."],
      icon: Code
    },
    {
      title: "Application Web",
      description: "Applications de gestion, analyse et realisation des fonctionnalitées sur mésure, Gestions des données entreprise et décision stratégique.",
      image: "images/capabilitys/app-web.png",
      tags: ["JS", "PHP", "API"],
      icon: AlignHorizontalJustifyEndIcon
    },
    {
      title: "Site Web & présence digitale",
      description: "Suivie des charte de designe, Création de site fluide, Réfférencement naturel, Optimisations des pages selon les normes requises",
      image: "images/capabilitys/digital-brand.png",
      tags: ["CMS", "Designe", "optimisations"],
      icon: PenTool
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Angular", "TypeScript", "Tailwind CSS", "..."] },
    { category: "Backend", items: ["Node.js", "Python", "PHP", "PostgreSQL", "MongoDB", "REST APIs", "..."] },
    { category: "Design", items: ["Figma", "UI/UX", "Responsive Design", "Theme", "..."] },
    { category: "Tools", items: ["Git", "Vite", "CI/CD", "Agile/Scrum", "..."] }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="font-bold text-x flex items-center gap-1">
              <ImageWithFallback
                src="images/profile.png"
                alt="Workspace"
                className="size-12 rounded-full"
              />
              <span className="text-blue-600">Fetraniaina Désiré </span>
              <span className="text-blue-900 text-xl">RABEMANANTSOA</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition cursor-pointer">Apropos</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-900 transition cursor-pointer">Capacitées</button>
              <button onClick={() => scrollToSection('works')} className="text-gray-600 hover:text-gray-900 transition cursor-pointer">Quelques travaux</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-gray-900 transition cursor-pointer">Compétences sup</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition cursor-pointer">Contacts</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-50">About</button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-50">Projects</button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-50">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-50">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl mb-6 text-gray-900">
                Je suis <span className="text-blue-600">Fetraniaina Désiré RABEMANANTSOA</span>
                <p className="text-xl text-gray-600 mb-8 mt-8">
                  Un développeur Full-stack, Application Web, Site Vitrine & E-COMMERCE avec une forte capacité dans le domaine des produits digitals
                </p>
              </h2>
              <div className="flex gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Mes capacitées
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  Restons en contact
                </button>
              </div>
              <div className="flex gap-4 mt-8">
                <a target='__blank__'
                  href="https://github.com/gdesipremium1/"
                  className="text-gray-600 hover:text-gray-900 transition">
                  <Github size={24} />
                </a>
                <a
                  target='__blank__'
                  href="https://www.linkedin.com/in/fetraniaina-desire-rabemanantsoa-80bb4351/"
                  className="text-gray-600 hover:text-gray-900 transition">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:fetraniainadesirerabemanantsoa@gmail.com" className="text-gray-600 hover:text-gray-900 transition">
                  <Mail size={24} />
                </a>
                <ContactButton isHeroSection={true} />
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="images/welcome.png"
                  alt="Workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Apropos de moi</h2>
          <div className="max-w-3xl mx-auto">
            <h1>
              <p className="text-lg text-gray-700 mb-6">
                Fort de plus de cinq années d’expérience dans le développement web, j’ai construit une expertise solide autour de JavaScript, Python/Django et WordPress avec WooCommerce. Cette polyvalence me permet de concevoir aussi bien des applications modernes et performantes que des solutions e‑commerce robustes. Mon parcours m’a amené à travailler sur des projets variés, allant du site vitrine au système complet intégrant des bases de données et des fonctionnalités avancées.
              </p>
              <p className="text-lg text-gray-700 mb-6">
               J’ai eu l’opportunité de collaborer avec des équipes et des clients issus de différents pays, ce qui m’a permis de développer une réelle aisance dans la communication en français et en anglais. Cette ouverture internationale m’a appris à m’adapter aux contextes culturels et aux méthodes de travail diverses, tout en gardant une approche structurée et orientée résultats. Je privilégie la transparence et l’efficacité dans mes échanges, afin de garantir une collaboration fluide et productive.
              </p>
              <p className="text-lg text-gray-700">
                Je m’appuie sur des outils et pratiques modernes pour assurer la qualité et la fiabilité de mes projets: versionning, scrum, CI/CD sns...
              </p>
            </h1>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Compétences en Plus</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-md">
                    <project.icon size={20} className="text-blue-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#works" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Realizations */}
      <section id="works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Quelques Travaux</h2>
          <p className="mb-12 text-center">Des Produits digitaux, une trace de mes travaux réalisées entant que salarier, sous-tratant ou freelance indépendant.</p>
          <div id="work-swipe">
            <PortofolioSwiper />
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Outils & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl mb-4 text-gray-900">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-700 flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl mb-6 text-gray-900">Travaillons ensemble</h2>
          <p className="text-xl text-gray-600 mb-8">
            A la recherche de collaboration pour exprimer mes Compétences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:fetraniainadesirerabemanantsoa@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Mail size={20} />
              Envoie Un Email
            </a>
            <a
              target='__blank__'
              href="https://github.com/gdesipremium1/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
            >
              <Github size={20} />
              Mon GitHub
            </a>
            <ContactButton isHeroSection={false} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <ul className="text-gray-400">
            <li>fetraniainadesirerabemanantsoa@gmail.com</li>
            <li> +261332992692, +261347104338</li>
          </ul>
          <p className="text-gray-400">© 2026 Fetraniaina Désiré RABEMANANTSOA. Tous droits réservés.</p>
        </div>
      </footer>
      {/* Alert contact */}

    </div>
  );
}
