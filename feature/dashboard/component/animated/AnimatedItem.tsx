
"use client";

import { motion } from "framer-motion";

interface Props {
  delay?: number;
  children: React.ReactNode;
}

export default function AnimatedItem({
  children,
  delay = 0
}: Props) {
  console.log({delay});
  
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 20,
            delay: delay
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}