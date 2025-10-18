import { Nav } from "../navigation/Nav";
import { Button } from "../button/Button";
import { type MouseEvent } from "react";

export type SortProps = {
  className?: string;
  onChange?: (value: string) => void;
  value: "grid" | "stack";
};

export const Sort = ({ className, value = "stack", ...props }: FilterProps) => {
  const buttons = [
    { label: "Grid", value: "grid" },
    { label: "Stack", value: "stack" }
  ];

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    const value = (e.currentTarget as HTMLButtonElement).dataset.value;
    if (props.onChange) {
      props.onChange(value as string);
    }
  }

  const getActiveIndex = (v: string) => buttons.findIndex((element) => element.value === v)
  return (
    <Nav className={className} active={getActiveIndex(value)}>
      {buttons.map((btn) => (
        <Button
          key={btn.value}
          data-value={btn.value}
          onClick={onClick}
        >
          {btn.label}
        </Button>
      ))}
    </Nav>
  );
};
