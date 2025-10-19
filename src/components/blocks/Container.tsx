import clsx from "clsx";
import type { ReactNode } from "react";

export type ContainerProps = {
  children?: ReactNode;
  className?: string,
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={clsx("block pl-[120px] pb-[80px] pr-[120px] max-width-[1120] bg-white", className)}>
      {children}
    </div>
  );
};
