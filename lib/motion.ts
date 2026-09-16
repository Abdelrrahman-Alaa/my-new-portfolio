import type { Variants } from "framer-motion";

/**
 * Standard container variants for staggered children entrance animations.
 */
export const createContainerVariants = (
  stagger = 0.1,
  delay = 0,
  reduced = false
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: reduced ? 0 : stagger,
      delayChildren: reduced ? 0 : delay,
    },
  },
});

/**
 * Standard item variants for smooth upward fade entrance animations.
 */
export const createItemVariants = (
  yOffset = 16,
  duration = 0.45,
  reduced = false
): Variants => ({
  hidden: { opacity: 0, y: reduced ? 0 : yOffset },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduced ? 0 : duration,
      ease: "easeOut",
    },
  },
});
