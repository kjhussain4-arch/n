import React from 'react';
import { motion } from 'motion/react';

interface CustomButtonProps 
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    'onDrag' | 'onDragStart' | 'onDragEnd' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'
  > {
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold';
  size?: 'default' | 'large';
  children: React.ReactNode;
  asChild?: boolean;
}

export function CustomButton({
  variant = 'primary',
  size = 'default',
  children,
  className = '',
  disabled = false,
  ...props
}: CustomButtonProps) {

  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-sm transition-all duration-200 font-medium " +
    "focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[#1C2530] text-white hover:bg-[#0D1B2A] focus:ring-[#C7A96B] shadow-sm",
    secondary: "bg-transparent border border-[#C7A96B] text-[#C7A96B] hover:bg-[#C7A96B] hover:text-[#0D1B2A] focus:ring-[#C7A96B]",
    ghost: "bg-transparent text-[#0D1B2A] hover:bg-[#0D1B2A]/5 focus:ring-[#C7A96B]",
    gold: "bg-[#C7A96B] text-[#0D1B2A] hover:bg-[#B89956] focus:ring-[#C7A96B] shadow-sm"
  };

  const sizes = {
    default: "px-6 py-3 min-h-[48px] text-[15px]",
    large: "px-8 py-4 min-h-[56px] text-[16px]"
  };

  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={!disabled ? { scale: 1.01 } : undefined}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      disabled={disabled}
      {...props} // now safe
    >
      {children}
    </motion.button>
  );
}
