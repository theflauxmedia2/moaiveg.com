import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Reveal from "@/components/motion/Reveal";
import {
  hoverLift,
  premiumEase,
  softSpring,
  staggerContainer,
  staggerItemScale,
} from "@/lib/motion";

const Experience = () => {
  const experiences = [
    {
      title: "A Serene Ambiance",
      description:
        "Step into an oasis of calm. Our green-themed, aesthetic decor makes MOAI a peaceful restaurant with good ambience, and one of the most Instagrammable restaurants in Bangalore.",
      image: "/ambinace/3.jpg",
    },
    {
      title: "Globally Inspired Cuisine",
      description:
        "Our chefs travel the world through flavour, bringing you global vegetarian cuisine, from gourmet small plates to pizzas and pastas, that is both surprising and delightfully familiar.",
      image: "/food/5.jpg",
    },
    {
      title: "Perfect for Gatherings",
      description:
        "MOAI is a place to connect. Whether it's a date night, a family dinner, a birthday celebration, or a corporate party, our space is designed for family and group dining in Bangalore.",
      image: "/ambinace/ppl.JPG",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 shimmer-text">
            The MOAI Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            More than just a meal, MOAI offers a complete sensory journey where every
            detail has been thoughtfully crafted to create unforgettable moments for
            couples, families, and corporate teams in Koramangala and Jayanagar.
          </p>
        </Reveal>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {experiences.map((experience) => (
            <motion.div key={experience.title} variants={staggerItemScale}>
              <motion.div whileHover={hoverLift} transition={softSpring}>
                <Card className="group overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-smooth royal-border hover:royal-glow h-full">
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={experience.image}
                      alt={`${experience.title} at MOAI, pure veg fine dining restaurant in Bangalore`}
                      width="600"
                      height="256"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.12 }}
                      transition={{ duration: 0.85, ease: premiumEase }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-beige/10 to-transparent" />
                  </div>

                  <CardContent className="p-8 bg-card">
                    <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-primary-light transition-smooth">
                      {experience.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-smooth">
                      {experience.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
