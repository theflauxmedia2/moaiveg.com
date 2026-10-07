import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  fadeLeft,
  fadeUp,
  hoverScale,
  premiumEase,
  scaleIn,
  softSpring,
  staggerContainer,
  staggerItem,
  tapPress,
} from "@/lib/motion";
import { RESERVATION_LINKS } from "@/lib/reservations";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 80]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, prefersReducedMotion ? 1 : 0.94]);
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.55],
    [1, prefersReducedMotion ? 1 : 0.35]
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #004F00 0%, #004F00 95%, rgba(255,255,255,0.1) 98%, rgba(255,255,255,0.8) 99%, white 100%)",
      }}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        {[
          { className: "top-16 sm:top-20 left-4 sm:left-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 opacity-15 sm:opacity-20", delay: 0 },
          { className: "top-32 sm:top-40 right-8 sm:right-20 w-12 sm:w-18 lg:w-24 h-12 sm:h-18 lg:h-24 opacity-10 sm:opacity-15", delay: 2 },
          { className: "bottom-24 sm:bottom-32 left-8 sm:left-20 w-10 sm:w-16 lg:w-20 h-10 sm:h-16 lg:h-20 opacity-8 sm:opacity-10", delay: 4 },
        ].map((leaf, i) => (
          <motion.div
            key={i}
            className={`absolute ${leaf.className}`}
            animate={
              prefersReducedMotion
                ? undefined
                : { y: [0, -14, 0], rotate: [0, i % 2 === 0 ? 6 : -6, 0] }
            }
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: leaf.delay,
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full fill-primary/30">
              <path d="M50 10 C20 10, 10 40, 50 90 C90 40, 80 10, 50 10 Z" />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center justify-center w-full">
          {/* Text Content */}
          <motion.div
            className="order-2 lg:order-1 space-y-6 lg:space-y-8 text-center lg:text-left max-w-2xl mx-auto lg:mx-0 lg:pr-8"
            style={{ opacity: contentOpacity }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-3 lg:space-y-4" variants={staggerItem}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <motion.span
                  className="block text-sm sm:text-base font-medium uppercase tracking-[0.2em] text-white/85 mb-3"
                  variants={fadeLeft}
                  transition={{ duration: 0.85, ease: premiumEase }}
                >
                  Pure Veg Fine Dining in Bangalore
                </motion.span>
                <motion.span
                  className="block text-white"
                  variants={fadeLeft}
                  transition={{ duration: 0.85, ease: premiumEase }}
                >
                  Where Artistry
                </motion.span>
                <motion.span
                  className="block text-white shimmer-text"
                  variants={fadeLeft}
                  transition={{ duration: 0.85, ease: premiumEase, delay: 0.1 }}
                >
                  Meets Flavour
                </motion.span>
              </h1>

              <motion.div
                className="flex items-center justify-center lg:justify-start space-x-3"
                variants={fadeUp}
                transition={{ duration: 0.7, ease: premiumEase, delay: 0.25 }}
              >
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  animate={{ width: "2.5rem" }}
                  transition={{ duration: 0.8, ease: premiumEase, delay: 0.45 }}
                />
                <span className="text-base sm:text-lg text-white font-medium">
                  Mingle Over Artisinal Infusions
                </span>
                <motion.div
                  className="h-0.5 bg-gradient-to-l from-primary to-accent"
                  initial={{ width: 0 }}
                  animate={{ width: "2.5rem" }}
                  transition={{ duration: 0.8, ease: premiumEase, delay: 0.45 }}
                />
              </motion.div>
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed"
              variants={staggerItem}
            >
              Experience pure vegetarian cuisine like never before at one of the
              best veg restaurants in Bangalore: global vegetarian cuisine, every
              dish cooked in cold-pressed oils. MOAI invites you to
              <span className="text-white font-medium">
                {" "}
                Mingle Over Artisanal Infusion{" "}
              </span>
              in Jayanagar and{" "}
              <span className="text-white font-medium">Koramangala</span>.
            </motion.p>

            <motion.div
              className="grid w-full max-w-md sm:max-w-lg grid-cols-1 sm:grid-cols-2 gap-3 justify-center lg:justify-start -mt-2 sm:mt-0 mx-auto lg:mx-0"
              variants={staggerItem}
            >
              <motion.div className="sm:col-span-2" whileHover={hoverScale} whileTap={tapPress}>
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full text-[#0046D3] text-base sm:text-lg px-4 sm:px-6 py-3 royal-glow"
                  onClick={() => {
                    window.location.href = "/menu";
                  }}
                  aria-label="Explore MOAI's vegetarian menu"
                >
                  Explore Our Menu
                </Button>
              </motion.div>
              <motion.div whileHover={hoverScale} whileTap={tapPress}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-white/40 bg-white/10 text-white hover:bg-white/20 text-sm sm:text-base px-3 sm:px-4 py-3"
                >
                  <a
                    href={RESERVATION_LINKS.jayanagar}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Reserve a table at MOAI Jayanagar"
                  >
                    Reserve Jayanagar
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={hoverScale} whileTap={tapPress}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-white/40 bg-white/10 text-white hover:bg-white/20 text-sm sm:text-base px-3 sm:px-4 py-3"
                >
                  <a
                    href={RESERVATION_LINKS.koramangala}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Reserve a table at MOAI Koramangala"
                  >
                    Reserve Koramangala
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="hidden sm:flex items-center justify-center lg:justify-start space-x-4 pt-4 lg:pt-6"
              variants={staggerItem}
            >
              <svg className="w-5 sm:w-6 h-5 sm:h-6 fill-primary/60" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
              </svg>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/50 via-accent/30 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            className="order-1 lg:order-2 relative mt-8 sm:mt-12 lg:mt-0 mb-4 lg:mb-0 flex justify-center lg:justify-start lg:pl-4"
            style={{ y: videoY, scale: videoScale }}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.95, ease: premiumEase, delay: 0.2 }}
          >
            <div className="relative">
              {!prefersReducedMotion && (
                <motion.div
                  className="absolute -inset-2 lg:-inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-2xl lg:rounded-[3rem] blur-xl lg:blur-3xl"
                  animate={{ opacity: [0.55, 1, 0.55], scale: [1, 1.04, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              )}

              <motion.div
                className="relative glass rounded-2xl lg:rounded-3xl overflow-hidden shadow-glow"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.025 }}
                transition={softSpring}
              >
                <video
                  src="/bgvd.webm"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/banners/Desktop.jpg"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  aria-hidden="true"
                  onLoadedData={(e) => {
                    const video = e.target as HTMLVideoElement;
                    video.loop = true;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white hidden sm:block"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.7, ease: premiumEase }}
      >
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <p className="text-sm mt-2 text-center text-white">Discover More</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
