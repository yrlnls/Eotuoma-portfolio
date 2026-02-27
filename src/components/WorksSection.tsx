import { motion } from "framer-motion";

const works = [
  {
    category: "Book",
    title: "Voices of the Savanna",
    description: "A novel exploring cultural identity through three generations of a Kenyan family.",
    year: "2022",
  },
  {
    category: "Drama",
    title: "The Last Drumbeat",
    description: "An award-winning stage play that premiered at the National Theatre.",
    year: "2021",
  },
  {
    category: "Book",
    title: "Mwalimu wa Kiswahili",
    description: "A comprehensive Swahili language textbook for intermediate learners.",
    year: "2020",
  },
  {
    category: "Script",
    title: "Echoes at Dawn",
    description: "A dramatic script exploring post-colonial themes through music and dialogue.",
    year: "2019",
  },
];

const WorksSection = () => {
  return (
    <section id="works" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Selected Works
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="space-y-6">
          {works.map((work, i) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group grid md:grid-cols-[100px_1fr_auto] gap-4 md:gap-8 items-baseline px-6 py-6 glass-panel rounded-2xl transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="font-body text-sm text-primary tracking-[0.2em] uppercase font-semibold">
                {work.category}
              </span>
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                  {work.title}
                </h3>
                <p className="font-body text-muted-foreground">{work.description}</p>
              </div>
              <span className="font-body text-muted-foreground text-sm">{work.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
