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

const Menu = () => {
  const menuCategories = [
    {
      title: "Artisanal Chats",
      image: "/food/1.jpg",
      items: [
        {
          name: "Creamy Avocado Chattak Puri",
          description:
            "A delightful fusion of creamy avocado on a crispy puri base with tangy chutneys",
        },
        {
          name: "Nadru Burrata Papdi Chat",
          description:
            "Crispy lotus stem and fresh burrata cheese on a classic papdi with mint chutney",
        },
      ],
    },
    {
      title: "Small Plates",
      image: "/food/2.jpg",
      items: [
        {
          name: "Amaranth Coated Hara Bhara Kebab",
          description:
            "A healthy twist on a classic, coated in nutritious amaranth with yogurt dip",
        },
        {
          name: "Memory Lane Cheese Fondue",
          description:
            "A comforting and shareable classic, perfect for mingling with artisanal bread",
        },
      ],
    },
    {
      title: "Soups & Salads",
      image: "/food/3.jpg",
      items: [
        {
          name: "Turkish Shepherd's Salad",
          description:
            "A refreshing and vibrant mix of fresh vegetables with olive oil and herbs",
        },
        {
          name: "Creamy Corn Soup with Kurkure Chat",
          description:
            "A playful and textural soup experience with crispy kurkure toppings",
        },
      ],
    },
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 shimmer-text">
            An Artisanal Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every dish is crafted with passion, creativity, and the finest ingredients, and
            cooked in cold-pressed oils. From veg starters and small plates to globally inspired
            mains, vegetarian pizzas, pastas, and desserts, discover why guests call MOAI one of
            the best veg restaurants in Bangalore for lunch, dinner, and vegan-friendly fine dining.
          </p>
        </Reveal>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {menuCategories.map((category) => (
            <motion.div key={category.title} variants={staggerItemScale}>
              <motion.div whileHover={hoverLift} transition={softSpring}>
                <Card className="gradient-card border-border/50 hover:shadow-elegant transition-smooth royal-border hover:royal-glow overflow-hidden h-full">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <motion.img
                      src={category.image}
                      alt={`${category.title} at MOAI Restaurant, Bangalore`}
                      width="400"
                      height="192"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.75, ease: premiumEase }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {category.items.map((item, itemIndex) => (
                        <div key={item.name} className="group/item">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-foreground group-hover/item:text-primary transition-smooth">
                              {item.name}
                            </h4>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed group-hover/item:text-foreground/80 transition-smooth">
                            {item.description}
                          </p>
                          {itemIndex < category.items.length - 1 && (
                            <hr className="mt-6 border-border" />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="text-center mt-12" delay={0.2}>
          <motion.a
            href="https://qr.mydigimenu.com/9f518a11-b937-484c-a019-0d326dc0e484"
            className="inline-flex items-center gap-2 text-primary font-medium group"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3, ease: premiumEase }}
          >
            <span>View Complete Menu</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
};

export default Menu;
