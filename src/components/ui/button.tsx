import * as React from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline";
type ButtonSize = "default" | "lg" | "sm";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const baseStyles =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";

const variantStyles: Record<ButtonVariant, string> = {
  default:
    "bg-[#8B5CF6] text-white shadow-sm hover:bg-[#7C3AED] focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-[#0B0F14]",
  outline:
    "border border-white/20 bg-transparent text-white hover:border-white/40 hover:bg-white/5 focus-visible:ring-[#06B6D4] focus-visible:ring-offset-[#0B0F14]",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "h-10 px-5",
  lg: "h-12 px-7 text-base",
  sm: "h-9 px-4 text-sm",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    />
  )
);

Button.displayName = "Button";

export { Button };
