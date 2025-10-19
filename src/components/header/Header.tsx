import { Filter } from "../filter/Filter";
import { Search } from "../inputs/Search";
import { Sort } from "../sort/Sort";

export type HeaderProps = {
  onSearch?: (value: string) => void
  onFilter?: () => void
}

export const Header = ({ onSearch, onFilter }: HeaderProps) => {
  return (
    <header className="flex w-full justify-between pb-[120]">
      <Filter onChange={onFilter}></Filter>
      <Search onChange={onSearch} label='Search' />
      <Sort value='grid' />
    </header>
  );
};
