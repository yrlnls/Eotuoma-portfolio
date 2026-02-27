import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-card/70">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Let's Collaborate
          </h2>
          <div className="section-divider mt-6" />
          <p className="font-body text-muted-foreground text-lg mt-6 max-w-xl mx-auto">
            Whether you need a script, a director, a language instructor, or a festival adjudicator — 
            I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-8 text-center"
        >
          {[
            { icon: Mail, label: "Email", value: "hello@example.com" },
            { icon: Phone, label: "Phone", value: "+254 700 000 000" },
            { icon: MapPin, label: "Location", value: "Nairobi, Kenya" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="p-6 glass-card rounded-2xl"
            >
              <item.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="font-body text-sm text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
              <p className="font-body text-foreground font-medium">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
