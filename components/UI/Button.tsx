import { cva, VariantProps } from "class-variance-authority";
import React, { memo } from "react";

const buttonVariants = cva(
  "active:scale-95 inline-flex relative items-center justify-center  text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800 w-full",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
        solid_red:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        solid_blue:
          "bg-blue-500 text-white hover:bg-blue-600 dark:hover:bg-blue-600",
        outline:
          "bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:hover:bg-hover dark:bg-[#2E2E32] dark:text-slate-100",
        ghost:
          "bg-transparent hover:bg-slate-100 dark:hover:bg-zinc-700 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-8 px-5",
        lg: "h-11 px-8 ",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({
  variant,
  size,
  rounded,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={buttonVariants({ variant, size, rounded, className })}
      {...rest}
    />
  );
};

export default memo(Button);
