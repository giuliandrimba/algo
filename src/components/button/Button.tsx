import clsx from "clsx";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ButtonProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
};

export const Button = <T extends ElementType = 'button'>({ children, as, className, ...props }: ButtonProps<T> & ComponentPropsWithoutRef<T>) => {
  const Component = as || 'button';
  return <Component className={clsx('text-lg hover:underline underline-offset-8 cursor-pointer',className)} {...props}>{children}</Component>;
};

