import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { UIVariant } from '../../enums/UIVariant';
import { H1 } from '../Header/Header.stories';
import Layout from './Layout';

export default {
  title: 'Layout',
  component: Layout,
  isLoading: false,
  isAlertToShow: true,
  alertHeader: 'Alert header',
  alertMessage: 'Alert message',
  alertVariant: UIVariant.INFO,
  topNavBar: {
    appName: 'test app name',
    apiVersion: '1.0.0',
    uiVersion: '1.0.0',
  },
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <MemoryRouter>
    <Layout {...args} />
  </MemoryRouter>
);

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  isAlertToShow: true,
  alertHeader: 'Alert header',
  alertMessage: 'Alert message',
  alertVariant: UIVariant.INFO,
  topNavBar: {
    appName: 'test app name',
    apiVersion: '1.0.0',
    uiVersion: '1.0.0',
  },
  children: <H1 text="Layout content" level="1" />,
};
