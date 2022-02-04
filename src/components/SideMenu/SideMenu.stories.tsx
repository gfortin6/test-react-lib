import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FiArrowLeftCircle, FiLogOut } from 'react-icons/fi';
import { MemoryRouter } from 'react-router-dom';
import SideMenu from '../SideMenu/SideMenu';

export default {
  title: 'SideMenu',
  component: SideMenu,
  isCollapsed: false,
  isToggled: false,
  isLoggedIn: false,
  menuItems: [],
} as ComponentMeta<typeof SideMenu>;

const Template: ComponentStory<typeof SideMenu> = (args) => (
  <MemoryRouter>
    <SideMenu {...args} />
  </MemoryRouter>
);

export const MenuOpen = Template.bind({});
MenuOpen.args = {
  isCollapsed: false,
  isToggled: false,
  menuItems: [{ link: '/1', name: 'test Link 2', icon: <FiLogOut />, subMenuItems: [] }],
};

export const MenuOpenWithSubMenu = Template.bind({});
MenuOpenWithSubMenu.args = {
  isCollapsed: false,
  isToggled: false,
  menuItems: [
    {
      link: '/',
      name: 'test Link 1',
      icon: <FiArrowLeftCircle />,
      subMenuItems: [{ link: '/', name: 'test Link 1', icon: <FiArrowLeftCircle />, subMenuItems: [] }],
    },
    { link: '/1', name: 'test Link 2', icon: <FiLogOut />, subMenuItems: [] },
  ],
};

export const MenuCollapsed = Template.bind({});
MenuCollapsed.args = {
  isCollapsed: true,
  isToggled: false,
  menuItems: [{ link: '/1', name: 'test Link 2', icon: <FiLogOut />, subMenuItems: [] }],
};
export const MenuCollapsedWithSubMenu = Template.bind({});
MenuCollapsedWithSubMenu.args = {
  isCollapsed: true,
  isToggled: false,
  menuItems: [
    {
      link: '/',
      name: 'test Link 1',
      icon: <FiArrowLeftCircle />,
      subMenuItems: [{ link: '/', name: 'test Link 1', icon: <FiArrowLeftCircle />, subMenuItems: [] }],
    },
    { link: '/1', name: 'test Link 2', icon: <FiLogOut />, subMenuItems: [] },
  ],
};
