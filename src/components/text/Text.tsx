import clsx from "clsx";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type TextProps<C extends ElementType = "p"> = {
  as?: C;
  className?: string,
  children: ReactNode;
} & ComponentPropsWithoutRef<C>;

export const Text = ({ as, children, className, ...props }: TextProps) => {
  const Component = as || "p";
  return <Component className={clsx('text-lg',className)} {...props}>{children}</Component>;
};
