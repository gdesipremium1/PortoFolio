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
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with product management, cart functionality, and secure checkout.",
      image: "images/capabilitys/e-commerce.png",
      tags: ["WordPress", "WooCommerc", "More..."],
      icon: Code
    },
    {
      title: "Web APP",
      description: "Cross-platform mobile application for tracking workouts, nutrition, and fitness goals with real-time analytics.",
      image: "images/capabilitys/app-web.png",
      tags: ["JS", "PHP", "API"],
      icon: AlignHorizontalJustifyEndIcon
    },
    {
      title: "Website & specific features",
      description: "Complete design system including logo, typography, color palette, and brand guidelines for a tech startup.",
      image: "images/capabilitys/digital-brand.png",
      tags: ["CMS", "Specific plugins&extensions"],
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
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-gray-900 transition">About</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-gray-900 transition">Capabilitys</button>
              <button onClick={() => scrollToSection('works')} className="text-gray-600 hover:text-gray-900 transition">Some Works</button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-gray-900 transition">More Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900 transition">Contact</button>
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
                Hi, I'm <span className="text-blue-600">Fetraniaina Désiré RABEMANANTSOA</span>
                <p className="text-xl text-gray-600 mb-8 mt-8">
                  Full-stack, Web app, Website & e-commerce developer with strong functional digital experiences.
                </p>
              </h2>
              <div className="flex gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  My Capabilitys
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  Get In Touch
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
                <ContactButton isHeroSection={true}/>
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
          <h2 className="text-4xl mb-12 text-center text-gray-900">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <h1>
              <p className="text-lg text-gray-700 mb-6">
                I'm a passionate developer and designer with over 5 years of experience building web and mobile applications.
                I specialize in creating user-centric solutions that combine elegant design with robust functionality.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                My journey in tech started with a curiosity for how things work, which evolved into a career where I get to
                solve complex problems and bring ideas to life. I'm constantly learning new technologies and best practices
                to stay at the forefront of the industry.
              </p>
              <p className="text-lg text-gray-700">
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects,
                or sharing my knowledge through technical blog posts and mentoring.
              </p>
            </h1>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Capabilitys</h2>
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
          <h2 className="text-4xl mb-12 text-center text-gray-900">Some Works</h2>
          <div id="work-swipe">
            <PortofolioSwiper />
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl mb-12 text-center text-gray-900">Skills & Technologies</h2>
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
          <h2 className="text-4xl mb-6 text-gray-900">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:fetraniainadesirerabemanantsoa@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a
              target='__blank__'
              href="https://github.com/gdesipremium1/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
            >
              <Github size={20} />
              View GitHub
            </a>
            <ContactButton isHeroSection={false}/>
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
          <p className="text-gray-400">© 2026 Fetraniaina Désiré RABEMANANTSOA. All rights reserved.</p>
        </div>
      </footer>
      {/* Alert contact */}
      
    </div>
  );
}
