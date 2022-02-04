import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Footer from './Footer';

export default {
  title: 'Footer',
  component: Footer,
  isMenuCollapsed: false,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const FooterWithMenuOpen = Template.bind({});
FooterWithMenuOpen.args = {
  isMenuCollapsed: false,
};

export const FooterWithMenCollapsed = Template.bind({});
FooterWithMenCollapsed.args = {
  isMenuCollapsed: true,
};
