import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { pageTransition, reducedMotionVariants } from "@/lib/motion";
import ScrollProgress from "@/components/motion/ScrollProgress";
import Index from "@/pages/Index";
import Gallery from "@/pages/Gallery";
import FullMenu from "@/pages/FullMenu";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import OutletPage from "@/pages/Outlet";
import { BlogIndex, BlogPost } from "@/pages/Blog";
import Press from "@/pages/Press";

const AnimatedRoutes = () => {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <ScrollProgress />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={prefersReducedMotion ? reducedMotionVariants : pageTransition}
          initial={false}
          animate="animate"
          exit="exit"
        >
          <Routes location={location}>
            <Route path="/" element={<Index />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/menu" element={<FullMenu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/press" element={<Press />} />
            {/* Outlet pages + outlet posts (D-28); brand posts at /blog/. */}
            <Route path="/locations/:outlet" element={<OutletPage />} />
            <Route path="/locations/:outlet/blog/:slug" element={<BlogPost />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
