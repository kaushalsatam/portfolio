import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed left-6 top-0 h-full w-1 bg-blue-500 origin-top"
      style={{ scaleY: scrollYProgress }}
    />
  );
}
