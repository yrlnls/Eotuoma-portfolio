import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3">About</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            A Life in Words & Performance
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div>
            <p className="font-body text-foreground/80 text-lg leading-relaxed mb-6">
              With decades of experience spanning the written word and the performing arts, 
              I have dedicated my life to the craft of storytelling in all its forms — from 
              the printed page to the theater stage.
            </p>
            <p className="font-body text-foreground/80 text-lg leading-relaxed">
              As a published author and Swahili language educator, I bridge cultures through 
              language. As a drama director and adjudicator, I nurture talent and uphold the 
              highest standards of theatrical excellence across East Africa.
            </p>
          </div>
          <div className="space-y-6 glass-panel rounded-2xl p-8">
            {[
              { number: "20+", label: "Years of Experience" },
              { number: "15+", label: "Published Works" },
              { number: "100+", label: "Productions Directed" },
              { number: "50+", label: "Festivals Adjudicated" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-baseline gap-4 border-b border-border pb-4"
              >
                <span className="font-display text-3xl font-bold text-primary">{stat.number}</span>
                <span className="font-body text-muted-foreground text-lg">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
