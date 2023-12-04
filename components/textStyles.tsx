import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const textStyles = cva("", {
  variants: {
    fontSize: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-xl",
      xl: "text-2xl",
      "2xl": "text-[32px]",
      "3xl": "text-[40px]",
      "4xl": "text-5xl",
      "5xl": "text-[64px]",
    },
    fontWeight: {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-semibold",
    },
  },
  defaultVariants: {
    fontSize: "sm",
    fontWeight: "bold",
  },
});

interface TextProps extends VariantProps<typeof textStyles> {
  children: React.ReactNode;
}

export default function Text({
  fontSize,
  fontWeight,
  children,
  ...props
}: TextProps) {
  return (
    <div className={`${textStyles({ fontSize, fontWeight })}`} {...props}>
      {children}
    </div>
  );
}
