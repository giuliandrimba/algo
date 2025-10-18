import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type TextProps<C extends ElementType = "p"> = {
  as?: C;
  children: ReactNode;
} & ComponentPropsWithoutRef<C>;

export const Text = ({ as, children, ...props }: TextProps) => {
  const Component = as || "p";
  return <Component {...props}>{children}</Component>;
};
