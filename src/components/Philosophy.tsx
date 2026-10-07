import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import {
  premiumEase,
  scaleIn,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";

const Philosophy = () => {
  const images = ["/food/1.jpg", "/food/2.jpg", "/food/3.jpg", "/food/4.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  const stats = [
    { number: "100+", label: "Artisanal Dishes" },
    { number: "4.8★", label: "Guest Rating" },
    { number: "1000+", label: "Happy Customers" },
  ];

  const values = [
    {
      title: "Fresh",
      desc: "Locally sourced ingredients",
      color: "bg-primary",
      iconColor: "text-primary-foreground",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      ),
      titleColor: "text-primary",
    },
    {
      title: "Creative",
      desc: "Innovative presentations",
      color: "bg-accent",
      iconColor: "text-accent-foreground",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      ),
      titleColor: "text-accent",
    },
    {
      title: "Passionate",
      desc: "Crafted with love",
      color: "bg-wood",
      iconColor: "text-white",
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      ),
      titleColor: "text-wood-dark",
    },
  ];

  return (
    <section id="philosophy" className="pt-8 pb-20 bg-white relative">
      <motion.div
        className="mb-20 flex flex-wrap justify-center gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            className="text-center min-w-[200px]"
            variants={staggerItem}
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ duration: 0.35, ease: premiumEase }}
          >
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2 shimmer-text">
              {stat.number}
            </div>
            <div className="text-muted-foreground font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Our Philosophy:
                <span className="block text-accent shimmer-text">
                  Mingle Over Artisanal Infusions
                </span>
              </h2>

              <motion.div
                className="space-y-6 text-lg leading-relaxed text-muted-foreground"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "MOAI was born from a desire to elevate vegetarian dining into an art form and be a destination for pure vegetarian fine dining in Bangalore. We believe in creating a serene, peaceful oasis where guests can escape the everyday and connect over exceptional food.",
                  <>
                    Our philosophy is simple: source the{" "}
                    <span className="font-bold text-brand-bronze">freshest ingredients</span>,
                    cook every dish in{" "}
                    <span className="font-bold text-brand-bronze">cold-pressed oils</span>, blend
                    global techniques with familiar traditions, and present every dish with{" "}
                    <span className="font-bold text-brand-bronze">creative passion</span>. It&apos;s
                    more than a meal; it&apos;s an experience designed to be shared and savoured for
                    family lunches, romantic dinners, and group dining. Now in Jayanagar and
                    Koramangala.
                  </>,
                  "Every plate tells a story, every flavor sparks conversation, and every moment spent here enriches the soul.",
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    variants={staggerItem}
                    className={i === 2 ? "text-primary font-medium" : undefined}
                  >
                    {text}
                  </motion.p>
                ))}
              </motion.div>
            </div>

            <motion.div
              className="grid sm:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {values.map((v) => (
                <motion.div
                  key={v.title}
                  className="text-center p-4 group"
                  variants={staggerItem}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35, ease: premiumEase }}
                >
                  <motion.div
                    className={`w-12 h-12 ${v.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                    whileHover={{ scale: 1.1, boxShadow: "0 0 24px rgba(148, 115, 82, 0.35)" }}
                  >
                    <svg
                      className={`w-6 h-6 ${v.iconColor}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {v.icon}
                    </svg>
                  </motion.div>
                  <h3 className={`font-semibold ${v.titleColor} mb-1`}>{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </Reveal>

          <Reveal variants={scaleIn} delay={0.15}>
            <div className="relative">
              <motion.div
                className="group relative overflow-hidden rounded-2xl shadow-elegant h-[600px]"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.5, ease: premiumEase }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={images[currentIndex]}
                    src={images[currentIndex]}
                    alt="Artisanal vegetarian cuisine at MOAI Bangalore"
                    width="600"
                    height="600"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.8, ease: premiumEase }}
                    loading={currentIndex === 0 ? "eager" : "lazy"}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-glow royal-border"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <p className="text-2xl font-bold shimmer-text">100%</p>
                  <p className="text-sm font-medium">Pure Vegetarian</p>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
