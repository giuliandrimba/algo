import { Nav } from "../navigation/Nav";
import { Button } from "../button/Button";
import { type MouseEvent } from "react";

export type FilterProps = {
  className?: string;
  onChange?: (value: string) => void;
  value: "all" | "video" | "image";
};

export const Filter = ({ className, value = "all", ...props }: FilterProps) => {
  const buttons = [
    { label: "All", value: "all" },
    { label: "Video", value: "video" },
    { label: "Image", value: "image" },
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
