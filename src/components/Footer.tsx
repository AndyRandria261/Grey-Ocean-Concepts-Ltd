import { Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import logoLight from "@/assets/logo-light.png";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    { label: "Architectural Glass", href: "#services" },
    { label: "Safety Glazing", href: "#services" },
    { label: "Custom Design", href: "#services" },
    { label: "Installation", href: "#services" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61559206295774", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },// Pending
];

const contactInfo = [
  {
    icon: MapPin,
    value: "Port Louis, Mauritius",
  },
  {
    icon: Phone,
    value: "+230 5 941 2911",
    href: "tel:+23059412911",
  },
  {
    icon: Mail,
    value: "contact@greconcept.com",
    href: "mailto:contact@greconcept.com",
  },
  {
    icon: Clock,
    value: "Mon-Fri: 8am-5pm",
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={logoLight}
              alt="GRE Ocean Concept"
              className="h-12 w-auto mb-6"
            />
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Mauritius' premier glass and façade engineering specialists. 
              Transforming architectural visions into reality since 2010.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-outfit font-semibold text-lg mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-accent text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-outfit font-semibold text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-accent text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-outfit font-semibold text-lg mb-5">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                const content = info.href ? (
                  <a
                    href={info.href}
                    className="text-background/60 hover:text-accent transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <span className="text-background/60">{info.value}</span>
                );

                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 text-background/80" />
                    </div>
                    <div className="text-sm">{content}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      {/* Bottom Bar */}
              <div className="pt-8 border-t border-background/10">
                <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
                  <p className="text-background/50 text-sm mb-4 sm:mb-0">
                    © {new Date().getFullYear()} GRE Ocean Concept Ltd. All rights reserved.
                  </p>
                  <button
                    onClick={scrollToTop}
                    className="group flex items-center gap-2 text-background/50 hover:text-accent text-sm transition-colors"
                  >
                    Back to Top
                    <span className="w-8 h-8 bg-background/10 group-hover:bg-accent rounded-lg flex items-center justify-center transition-colors">
                      <ArrowUp className="w-4 h-4" />
                    </span>
                  </button>
                </div>
                <div className="flex justify-center pt-4 border-t border-background/10">
                  <a
                    href="https://visylo.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/40 hover:text-accent text-xs transition-colors duration-300"
                  >
                    Powered by Visylo Consulting
                  </a>
                </div>
              </div>
            </div>
    </footer>
  );
}
