
"use client";

import { motion } from "framer-motion";

export default function AnimatedGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {children}
    </motion.section>
  );
}