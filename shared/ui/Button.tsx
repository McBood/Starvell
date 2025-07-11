"use client";

import { ButtonHTMLAttributes } from "react";

import clsx from "clsx";

type Rounded = "sm" | "md";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
  size?: "sm" | "md";
  fullWidth?: boolean;
  rounded?: Rounded;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  rounded = "md",
  className,
  ...props
}: ButtonProps) {
  const baseStyles = `
    flex
    items-center
    justify-center
    rounded-[8px]
    font-semibold
    text-[14px]
    transition-colors
    cursor-pointer
    whitespace-nowrap
  `;

  const sizes = {
    sm: "h-[32px] px-[16px]",
    md: "h-[36px] px-[16px]",
  };

  const round: Record<Rounded, string> = {
    sm: "rounded-[6px]",
    md: "rounded-[8px]",
  };

  const variants = {
    primary: `
      text-white
      border-[2px] border-[#4E75FF]
      bg-[#4E75FF]
      hover:bg-[#274FDC]
    `,
    outline: `
      text-[#33363E]
      border-[2px] border-[#E5E7EB]
      bg-white
      hover:bg-[#FAFAFA]
    `,
  };

  return (
    <button
      {...props}
      className={clsx(
        baseStyles,
        sizes[size],
        variants[variant],
        round[rounded],
        fullWidth && "w-full",
        className
      )}
    >
      {children}
    </button>
  );
}
