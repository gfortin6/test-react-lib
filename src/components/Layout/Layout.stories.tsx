import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
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
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  isLoading: false,
  isAlertToShow: true,
  alertHeader: 'Alert header',
  alertMessage: 'Alert message',
  alertVariant: UIVariant.INFO,
  children: <H1 text="Layout content" level="1" />,
};
