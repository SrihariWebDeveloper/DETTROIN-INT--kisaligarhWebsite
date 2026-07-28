import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const Button = React.forwardRef(({
  children,
  className = "",
  variant = "primary", // primary, secondary, outline, glass, ghost, accent
  size = "md", // sm, md, lg
  icon: Icon,
  iconPosition = "right",
  ...props
}, ref) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed select-none";
  
  const variants = {
    primary: "bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 hover:scale-[1.02] active:scale-[0.98]",
    outline: "bg-transparent text-emerald-400 border border-emerald-500/40 hover:border-emerald-400 hover:bg-emerald-500/10 hover:scale-[1.02] active:scale-[0.98]",
    glass: "glass-panel text-slate-100 border border-white/10 hover:border-emerald-500/40 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98]",
    ghost: "bg-transparent text-slate-300 hover:text-white hover:bg-white/5",
    accent: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98]"
  };

  const sizes = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5"
  };

  return (
    <motion.button
      ref={ref}
      whileTap={{ scale: 0.97 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4 shrink-0" />}
    </motion.button>
  );
});

Button.displayName = "Button";
