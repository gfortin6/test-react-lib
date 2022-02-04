import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import TopNavBar from '../TopNavBar/TopNavBar';

export default {
  title: 'TopNavBar',
  component: TopNavBar,
  appName: 'test App Name',
  apiVersion: '1.0.0',
  uiVersion: '1.0.1',
} as ComponentMeta<typeof TopNavBar>;

const Template: ComponentStory<typeof TopNavBar> = (args) => (
  <MemoryRouter>
    <TopNavBar {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = { appName: 'test App Name', apiVersion: '1.0.0', uiVersion: '1.0.1' };
