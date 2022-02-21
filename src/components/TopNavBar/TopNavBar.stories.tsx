import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import TopNavBar from '../TopNavBar/TopNavBar';

export default {
  title: 'TopNavBar',
  component: TopNavBar,
  argTypes: { onClick: { action: 'Toggle Clicked' } },
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      // defaultViewport: 'iphone6',
    },
  },
} as ComponentMeta<typeof TopNavBar>;

const Template: ComponentStory<typeof TopNavBar> = (args) => (
  <MemoryRouter>
    <TopNavBar {...args} />
  </MemoryRouter>
);

export const Desktop = Template.bind({});
Desktop.args = { appName: 'test App Name', apiVersion: '1.0.0', uiVersion: '1.0.1' };

export const Mobile = Template.bind({});
Mobile.args = { ...Desktop.args };
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphonex',
  },
};
