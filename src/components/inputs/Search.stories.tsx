import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Search } from "./Search";

const meta = {
  title: "Form/Search",
  component: Search,
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div className="max-w-200">
        <Search
          label="Search"
          placeholder="Describe what you are looking for"
        ></Search>
      </div>
    );
  },
};
