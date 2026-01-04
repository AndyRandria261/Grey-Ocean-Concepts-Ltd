import { motion } from "framer-motion";
import { Lightbulb, Zap, Heart, CheckCircle } from "lucide-react";
import founderImage from "@/assets/founder-portrait.jpg";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Pushing boundaries with cutting-edge technology and creative solutions that anticipate future needs.",
  },
  {
    icon: Zap,
    title: "Dynamism",
    description:
      "Embracing energy and agility to tackle challenges with enthusiasm and determination.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Acting with honesty, transparency, and ethics in everything we do for our clients and partners.",
  },
  {
    icon: CheckCircle,
    title: "Reliability",
    description:
      "Delivering products and services our clients can depend on in every situation.",
  },
];

const stats = [
  { number: "500+", label: "Projects Delivered" },
  { number: "50+", label: "Satisfied Clients" },
  { number: "15+", label: "Years Experience" },
  { number: "100%", label: "Quality Guaranteed" },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4"
          >
            About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            Pioneers in Glass{" "}
            <span className="text-gradient">in Mauritius</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            GRC Ocean Concept Ltd has established itself as a leader in façade engineering 
            and the glass industry in Mauritius. Our passion for innovation and commitment 
            to excellence enables us to transform your visions into reality.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-outfit text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Founder Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={founderImage}
                alt="Gary Arlandoo - Founder & CEO"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-4 block">
              Meet Our Founder
            </span>
            <h3 className="font-outfit text-3xl md:text-4xl font-bold text-foreground mb-4">
              Gary Arlandoo
            </h3>
            <p className="text-muted-foreground text-lg mb-2">Founder & CEO</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Gary Arlandoo is a Civil Engineer with over 10 years of hands-on experience 
              in façade engineering, aluminium joinery, and architectural glass solutions. 
              His expertise in combining traditional craftsmanship with cutting-edge technology 
              has positioned the company as the island's premier glass solutions provider.
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 bg-muted/50 rounded-xl border border-border">
                <h4 className="font-outfit font-semibold text-foreground mb-1">Our Mission</h4>
                <p className="text-muted-foreground text-sm">
                  To transform architectural visions into reality through innovative glass solutions, 
                  delivering exceptional quality that exceeds client expectations.
                </p>
              </div>
              <div className="p-4 bg-muted/50 rounded-xl border border-border">
                <h4 className="font-outfit font-semibold text-foreground mb-1">Our Vision</h4>
                <p className="text-muted-foreground text-sm">
                  To be recognized as the leading glass solutions provider in the Indian Ocean region, 
                  pioneering sustainable and innovative architectural designs.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-3 bg-card rounded-xl border border-border">
                  <div className="font-outfit text-2xl font-bold text-accent">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
