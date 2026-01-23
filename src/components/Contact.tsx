import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "Port Louis, Mauritius",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+230 5941 2911",
    href: "tel:+23059412911",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@greconcept.com",
    href: "mailto:contact@greconcept.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri: 8am-5pm",
  },
];

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4"
          >
            Contact Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Let's Start Your Project{" "}
            <span className="text-accent">Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 text-lg"
          >
            Tell us about your vision and discover how we can transform your spaces 
            with our innovative glass solutions.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary-foreground/80">
                    First Name
                  </label>
                  <Input
                    type="text"
                    name="firstName"
                    required
                    placeholder="John"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary-foreground/80">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Doe"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary-foreground/80">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary-foreground/80">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="+230 XXX XXXX"
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-primary-foreground/80">
                  Message
                </label>
                <Textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 rounded-xl transition-all duration-300 hover:shadow-glow"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-primary-foreground/60 text-sm mb-1">
                    {info.label}
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-primary-foreground font-medium hover:text-accent transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-primary-foreground font-medium">
                      {info.value}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Map Placeholder */}
            <div className="aspect-video bg-primary-foreground/5 rounded-xl border border-primary-foreground/10 overflow-hidden">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=57.4513999%2C-20.2134841%2C57.5513999%2C-20.1134841&layer=mapnik&marker=-20.1634841%2C57.5013999"
                className="w-full h-full border-0 opacity-80"
                title="Location Map"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
