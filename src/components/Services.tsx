import { motion } from "framer-motion";
import { Building2, Shield, Palette, Wrench } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Architectural Glass",
    description:
      "Curtain walls, glazed façades, and structural glass systems for modern, luminous buildings that make a statement.",
  },
  {
    icon: Shield,
    title: "Safety Glazing",
    description:
      "Tempered and laminated glass solutions engineered for maximum protection, security, and peace of mind.",
  },
  {
    icon: Palette,
    title: "Custom Design",
    description:
      "Personalized creations including engraving, screen printing, and special effects that transform glass into art.",
  },
  {
    icon: Wrench,
    title: "Installation & Maintenance",
    description:
      "Professional installation and comprehensive maintenance services for all types of commercial and residential projects.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-accent/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-accent/5 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Comprehensive Solutions{" "}
            <span className="text-gradient">in Glass</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            From design to installation, we offer a full range of services to meet 
            all your glazing needs with precision and excellence.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-500 hover:shadow-lg hover:-translate-y-2 hover:border-accent/30"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-accent group-hover:shadow-glow">
                <service.icon className="w-7 h-7 text-accent transition-colors group-hover:text-accent-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-outfit text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-glass-glow rounded-b-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
