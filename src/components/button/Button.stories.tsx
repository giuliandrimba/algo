import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "./Button";
import Link from "next/link";

const meta = {
  title: "Actions/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Lorem ipsum",
  },
  render: ({children}) => <Button onClick={() => console.log("CLICKED")}>{children}</Button>
};

export const AsLink: Story = {
  args: {
    children: "Lorem ipsum",
  },
  render: ({children}) => <Button as={Link} href='/'>{children}</Button>
};

