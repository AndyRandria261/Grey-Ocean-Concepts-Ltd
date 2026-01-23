import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, CheckCircle2, Calendar, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import portfolioBalustrade from "@/assets/portfolio-balustrade.jpg";
import portfolioShower from "@/assets/portfolio-shower.jpg";
import portfolioDoors from "@/assets/portfolio-doors.jpg";
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";
import portfolioFacade from "@/assets/portfolio-facade.jpg";

const categories = [
  "All",
  "Balustrades",
  "Shower Cabins",
  "Doors & Windows",
  "Kitchen",
  "Facade",
];

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  fullDescription: string;
  features: string[];
  location: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Frameless Glass Balustrade",
    category: "Balustrades",
    image: portfolioBalustrade,
    description: "Luxury oceanfront residential project",
    fullDescription: "This stunning frameless glass balustrade installation provides unobstructed ocean views while ensuring maximum safety. The 12mm tempered glass panels are secured with stainless steel spigots for a clean, minimal aesthetic.",
    features: ["12mm tempered safety glass", "316 stainless steel fittings", "Custom curved sections", "Anti-slip glass treads"],
    location: "Grand Baie, Mauritius",
    year: "2024",
  },
  {
    id: 2,
    title: "Walk-In Shower Enclosure",
    category: "Shower Cabins",
    image: portfolioShower,
    description: "Modern bathroom renovation",
    fullDescription: "A premium walk-in shower enclosure featuring ultra-clear low-iron glass with an anti-limescale coating. The minimalist design maximizes space while creating a spa-like atmosphere.",
    features: ["10mm ultra-clear glass", "Anti-limescale coating", "Frameless hinges", "Custom sizing"],
    location: "Moka, Mauritius",
    year: "2024",
  },
  {
    id: 3,
    title: "Bi-Fold Aluminium Doors",
    category: "Doors & Windows",
    image: portfolioDoors,
    description: "Contemporary villa with panoramic views",
    fullDescription: "These bi-fold aluminium doors seamlessly connect indoor and outdoor living spaces. The slim profiles maximize glass area while the multi-point locking system ensures security.",
    features: ["Slim aluminium profiles", "Double glazed units", "Multi-point locking", "Powder coated finish"],
    location: "Flic en Flac, Mauritius",
    year: "2023",
  },
  {
    id: 4,
    title: "Glass Kitchen Splashback",
    category: "Kitchen",
    image: portfolioKitchen,
    description: "High-end kitchen installation",
    fullDescription: "A stunning back-painted glass splashback that adds a pop of color and is incredibly easy to clean. The seamless finish creates a sleek, modern look in this designer kitchen.",
    features: ["Back-painted finish", "Heat resistant", "Easy to clean", "Custom color matching"],
    location: "Port Louis, Mauritius",
    year: "2024",
  },
  {
    id: 5,
    title: "Structural Glass Façade",
    category: "Façade",
    image: portfolioFacade,
    description: "Commercial office building",
    fullDescription: "A striking structural glass façade that floods the interior with natural light while maintaining thermal efficiency. The curtain wall system features high-performance glazing units.",
    features: ["High-performance glazing", "Solar control coating", "Structural silicone", "Thermal break system"],
    location: "Ebene, Mauritius",
    year: "2023",
  },
  {
    id: 6,
    title: "Curtain Wall System",
    category: "Façade",
    image: portfolioFacade,
    description: "Corporate headquarters project",
    fullDescription: "A prestigious curtain wall installation for corporate headquarters featuring insulated glass units with low-E coating for optimal energy efficiency and acoustic performance.",
    features: ["Low-E coating", "Acoustic insulation", "Unitized system", "Weather sealing"],
    location: "Quatre Bornes, Mauritius",
    year: "2024",
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const handleQuotation = () => {
    if (selectedProject) {
      setSelectedProject(null);
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4"
          >
            Our Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Featured Projects{" "}
            <span className="text-gradient">in Glass</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Discover our selection of projects showcasing our expertise and passion for excellence.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-accent text-accent-foreground shadow-glow"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/50"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-accent text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-outfit text-xl font-semibold text-primary-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Static Content (visible by default) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent group-hover:opacity-0 transition-opacity duration-500">
                  <span className="text-accent text-xs font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-outfit text-lg font-semibold text-primary-foreground mt-1">
                    {project.title}
                  </h3>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-accent-foreground" />
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card border-border">
          {selectedProject && (
            <div className="grid md:grid-cols-2">
              {/* Image Side */}
              <div className="relative aspect-square md:aspect-auto">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent md:bg-gradient-to-r" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 bg-accent text-accent-foreground text-xs font-semibold rounded-full uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-6 md:p-8 flex flex-col">
                <div className="flex-1">
                  <h3 className="font-outfit text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {selectedProject.title}
                  </h3>
                  
                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 text-accent" />
                      {selectedProject.location}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 text-accent" />
                      {selectedProject.year}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {selectedProject.fullDescription}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-outfit font-semibold text-foreground mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-muted-foreground text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-border">
                  <Button
                    onClick={handleQuotation}
                    variant="accent"
                    size="lg"
                    className="w-full"
                  >
                    Request a Free Quote
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </Button>
                  <p className="text-center text-muted-foreground text-xs mt-3">
                    Get a personalized quote for a similar project
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {/* Custom Close Button */}
          <DialogClose className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors z-10">
            <X className="w-5 h-5" />
          </DialogClose>
        </DialogContent>
      </Dialog>
    </section>
  );
}
