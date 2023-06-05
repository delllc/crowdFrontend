import type {Meta, StoryObj} from '@storybook/react';

import {Input} from '~/shared/ui';

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{background: 'var(--color-black)', padding: '3rem'}}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
};

export const Focused: Story = {
  args: {
    autoFocus: true,
  },
};
