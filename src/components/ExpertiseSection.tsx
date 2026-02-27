import { motion } from "framer-motion";
import { BookOpen, Languages, Music, Theater, PenTool, Award } from "lucide-react";

const expertiseItems = [
  {
    icon: BookOpen,
    title: "Book Writing",
    description: "Published author of fiction and non-fiction works that explore culture, identity, and the human experience.",
  },
  {
    icon: Languages,
    title: "Swahili Teaching",
    description: "Dedicated Swahili language educator fostering appreciation for East African linguistic heritage and culture.",
  },
  {
    icon: Music,
    title: "Elocution & Music",
    description: "Training voices to command attention — from public speaking mastery to musical expression and performance.",
  },
  {
    icon: PenTool,
    title: "Script Writing",
    description: "Crafting compelling dramatic scripts that resonate with audiences and challenge performers to excel.",
  },
  {
    icon: Theater,
    title: "Drama Direction",
    description: "Bringing scripts to life on stage with creative vision, guiding actors and production teams to deliver powerful performances.",
  },
  {
    icon: Award,
    title: "Adjudication",
    description: "Serving as an experienced drama and music festival adjudicator, providing expert critique and mentorship.",
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 px-6 bg-card/70">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3">Expertise</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Many Arts, One Passion
          </h2>
          <div className="section-divider mt-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 glass-card rounded-2xl border border-white/10"
            >
              <item.icon className="w-8 h-8 text-primary mb-5 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
