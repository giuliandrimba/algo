import { Filter } from "./Filter";

export default {
  title: "Navigation/Filter",
  component: Filter,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  render: () => (
    <Filter value='all' onChange={(value) => console.log(value)}></Filter>
  ),
};