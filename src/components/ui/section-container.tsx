import { ReactNode } from "react";
import { motion } from "motion/react";

interface SectionContainerProps {
  id: string;
  className?: string;
  children: ReactNode;
  initial?: boolean; // Controls if animation on mount is active
}

export function SectionContainer({
  id,
  className = "",
  children,
  initial = true,
}: SectionContainerProps) {
  // If user has prefers-reduced-motion, Framer Motion automatically respects that or we can structure with simple Tailwind
  return (
    <section
      id={id}
      className={`relative w-full py-20 px-4 md:px-8 xl:px-12 max-w-7xl mx-auto overflow-hidden ${className}`}
    >
      {initial ? (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      ) : (
        <div>{children}</div>
      )}
    </section>
  );
}
