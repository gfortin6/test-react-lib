import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Toast from './Toast';

export default {
  title: 'Toast',
  component: Toast,
  toastTitle: 'Toast Title',
  toastBody: 'Toast Body',
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = { toastTitle: 'Toast Title', toastBody: 'Toast Body' };
