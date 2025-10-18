import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Text } from "./Text";

const meta = {
  title: "Display/Text",
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  render: ({ children }) => {
    return (
        <div className='max-w-200'>
            <Text>{children}</Text>
        </div>
    )
  }
};
