import { Filter } from "../filter/Filter";
import { Search } from "../inputs/Search";
import { Sort } from "../sort/Sort";

export const Header = () => {
  return (
    <header className="flex w-full justify-between pb-[120]">
      <Filter></Filter>
      <Search label='Search' />
      <Sort value='grid' />
    </header>
  );
};
