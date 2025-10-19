import { Filter } from "../filter/Filter";
import { Search } from "../inputs/Search";
import { Sort } from "../sort/Sort";

export type HeaderProps = {
  onSearch?: (value: string) => void
  onFilter?: (value: string) => void
}

export const Header = ({ onSearch, onFilter }: HeaderProps) => {
  return (
    <header className="flex flex-col gap-10 items-center lg:flex-row w-full justify-between pb-[120]">
      <Filter onChange={onFilter}></Filter>
      <Search placeholder="AI Assisted" onChange={onSearch} label='Search' />
    </header>
  );
};
