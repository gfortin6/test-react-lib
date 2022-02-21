import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CustomToggle from './CustomToggle';

export default {
  title: 'CustomToggle',
  component: CustomToggle,
} as ComponentMeta<typeof CustomToggle>;

const Template: ComponentStory<typeof CustomToggle> = (args) => <CustomToggle {...args} />;

export const Default = Template.bind({});
Default.args = {};
