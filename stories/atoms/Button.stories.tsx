import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../../src';
import { themeArgs } from '../../src/theme';

const meta: Meta = {
  title: 'atom/Button',
  component: Button,
  argTypes: {
    ...themeArgs,
    variant: {
      name: 'Variant',
      defaultValue: 'raised',
      description: 'Variant of the button',
      options: ['raised', 'outlined', 'link'],
      control: { type: 'radio' },
    },
    label: {
      name: 'Label',
      description: 'Label of the button',
      control: { type: 'text' },
    },
    ref: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ButtonProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center', width: 600 }}>
    <Button {...args} onlyIcon={false} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Click, here!',
};
