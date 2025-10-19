import clsx from "clsx";
import { Button } from "../button/Button";

type SearchProps = {
  label?: string;
  className?: string;
  placeholder?: string;
};

export const Search = ({ label, className, ...props }: SearchProps) => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <form onSubmit={onSubmit}>
      <span className="flex gap-2 justify-between min-w-[580px] max-w-fit border-b-1">
        <input
          type="text"
          className={clsx(
            "placeholder:text-gray-500 focus:outline-hidden  placeholder:italic placeholder:text-sm flex-1",
            className,
          )}
          {...props}
        />
        <Button type="submit">Search</Button>
      </span>
    </form>
  );
};
