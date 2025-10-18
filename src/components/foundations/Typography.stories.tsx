import { Stories, Title } from "@storybook/addon-docs/blocks";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta: Meta = {
  title: "Foundations/Typography",
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Stories />
        </>
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Body: Story = {
  render: () => (
    <div className={'font-body'}>
      the quick brown fox jumps over the lazy dog
    </div>
  ),
};