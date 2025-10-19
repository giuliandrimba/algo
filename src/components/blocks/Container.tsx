import clsx from "clsx";
import type { ReactNode } from "react";

export type ContainerProps = {
  children?: ReactNode;
  className?: string,
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx("block md:pl-[120px] pb-[80px] md:pr-[120px] max-width-[1120] bg-white w-full", className)}>
      {children}
    </div>
  );
};
