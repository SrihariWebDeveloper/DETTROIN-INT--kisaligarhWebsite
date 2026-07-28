import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const GlassCard = ({ children, className = "", hover = true, glow = false, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative overflow-hidden rounded-2xl glass-card p-6 md:p-8 transition-all duration-300",
        hover && "glass-card-hover",
        glow && "before:absolute before:-top-24 before:-right-24 before:w-48 before:h-48 before:bg-emerald-500/20 before:rounded-full before:blur-3xl",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
