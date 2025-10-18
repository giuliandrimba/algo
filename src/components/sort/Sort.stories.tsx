import { Sort } from "./Sort";

export default {
  title: "Navigation/Sort",
  component: Sort,
  parameters: {
    layout: "centered",
  },
};

export const Default = {
  render: () => (
    <Sort value='grid' onChange={(value: string) => console.log(value)}></Sort>
  ),
};