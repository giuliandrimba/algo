"use client";
// biome-ignore assist/source/organizeImports: <explanation>
import clsx from "clsx";
import {
  Children,
  cloneElement,
  isValidElement,
  useState,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
} from "react";

interface ChildProps {
  onClick?: (e: MouseEvent) => void;
  className?: string;
  children?: ReactNode;
}

export type NavProps = {
  children: ReactElement<ChildProps> | ReactElement<ChildProps>[]; // children are React elements
  className?: string;
  active?: number | null
};

export const Nav = ({ children, className, active = null }: NavProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(active);

  return (
    <nav className={clsx("flex gap-2", className)}>
      {Children.map(children, (child, index) => {
        if (!isValidElement<ChildProps>(child)) return child;

        const childKey = child.key || 
          (typeof child.props.children === 'string' ? child.props.children : `nav-item-${index}`);

        return (
          <span key={childKey} className="after:content-['/'] after:ml-2 last:after:content-['']">
            {cloneElement(child, {
              onClick: (e: MouseEvent) => {
                setActiveIndex(index);
                if (child.props.onClick) {
                  child.props.onClick(e);
                }
              },
              className: clsx(
                child.props.className,
                activeIndex === index && "italic underline"
              ),
            })}
          </span>
        );
      })}
    </nav>
  );
};
