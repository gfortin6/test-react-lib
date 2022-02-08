/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FiArrowLeftCircle, FiLogOut } from 'react-icons/fi';
import { MemoryRouter } from 'react-router-dom';
import SideMenu from '../SideMenu/SideMenu';

export default {
  title: 'SideMenu',
  component: SideMenu,
  portalURL: 'http://www.google.ca',
  isCollapsed: false,
  isToggled: false,
  isLoggedIn: false,
  allowedPages: ['/', '/1'],
  menuItems: [],
  onLoggedOut: () => {},
  onToggleChange: () => {},
  onCollapseChange: () => {},
  onLinkClicked: (path: string) => {},
} as ComponentMeta<typeof SideMenu>;

const Template: ComponentStory<typeof SideMenu> = (args) => (
  <MemoryRouter>
    <SideMenu {...args} />
  </MemoryRouter>
);

export const MenuOpen = Template.bind({});
MenuOpen.args = {
  portalURL: 'http://www.google.ca',
  isCollapsed: false,
  isToggled: false,
  allowedPages: ['/'],
  menuItems: [{ link: '/', name: 'test Link', icon: <FiLogOut /> }],
  onLoggedOut: () => {},
  onToggleChange: () => {},
  onCollapseChange: () => {},
  onLinkClicked: (path: string) => {},
};

export const MenuOpenWithSubMenu = Template.bind({});
MenuOpenWithSubMenu.args = {
  portalURL: 'http://www.google.ca',
  isCollapsed: false,
  isToggled: false,
  allowedPages: ['/', '/1'],
  menuItems: [
    {
      link: '/',
      name: 'test Link 1',
      icon: <FiArrowLeftCircle />,
      allowedSubMenuPages: ['/s1'],
      subMenuItems: [{ link: '/s1', name: 'sub link 1', icon: <FiArrowLeftCircle /> }],
    },
    { link: '/1', name: 'test Link 2', icon: <FiLogOut /> },
  ],
  onLoggedOut: () => {},
  onToggleChange: () => {},
  onCollapseChange: () => {},
  onLinkClicked: (path: string) => {},
};

export const MenuOpenWithNotAuthorized = Template.bind({});
MenuOpenWithNotAuthorized.args = {
  portalURL: 'http://www.google.ca',
  isCollapsed: false,
  isToggled: false,
  allowedPages: ['/', '/1'],
  menuItems: [
    { link: '/', name: 'link auth 1', icon: <FiLogOut /> },
    { link: '/1', name: 'link auth 2', icon: <FiLogOut /> },
    { link: '/2', name: 'link not auth', icon: <FiLogOut /> },
  ],
  onLoggedOut: () => {},
  onToggleChange: () => {},
  onCollapseChange: () => {},
  onLinkClicked: (path: string) => {},
};

export const MenuOpenWithSubMenuNotAuthorized = Template.bind({});
MenuOpenWithSubMenuNotAuthorized.args = {
  portalURL: 'http://www.google.ca',
  isCollapsed: false,
  isToggled: false,
  allowedPages: ['/', '/1', '/2'],
  menuItems: [
    { link: '/', name: 'link auth 1', icon: <FiLogOut /> },
    { link: '/1', name: 'link auth 2', icon: <FiLogOut /> },
    {
      link: '/2',
      name: 'with sublink',
      icon: <FiArrowLeftCircle />,
      allowedSubMenuPages: ['/s1'],
      subMenuItems: [
        { link: '/s1', name: 'sub link 1 auth', icon: <FiArrowLeftCircle /> },
        { link: '/s2', name: 'sub link 2 not aut', icon: <FiArrowLeftCircle /> },
      ],
    },
  ],
  onLoggedOut: () => {},
  onToggleChange: () => {},
  onCollapseChange: () => {},
  onLinkClicked: (path: string) => {},
};

export const MenuCollapsed = Template.bind({});
MenuCollapsed.args = {
  portalURL: 'http://www.google.ca',
  isCollapsed: true,
  isToggled: false,
  allowedPages: ['/', '/1'],
  menuItems: [{ link: '/', name: 'test Link', icon: <FiLogOut /> }],
  onLoggedOut: () => {},
  onToggleChange: () => {},
  onCollapseChange: () => {},
  onLinkClicked: (path: string) => {},
};

export const MenuCollapsedWithSubMenu = Template.bind({});
MenuCollapsedWithSubMenu.args = {
  portalURL: 'http://www.google.ca',
  isCollapsed: true,
  isToggled: false,
  allowedPages: ['/', '/1'],
  menuItems: [
    {
      link: '/',
      name: 'test Link 1',
      icon: <FiArrowLeftCircle />,
      allowedSubMenuPages: ['/s1'],
      subMenuItems: [{ link: '/s1', name: 'sub link 1', icon: <FiArrowLeftCircle /> }],
    },
    { link: '/1', name: 'test Link 2', icon: <FiLogOut /> },
  ],
  onLoggedOut: () => {},
  onToggleChange: () => {},
  onCollapseChange: () => {},
  onLinkClicked: (path: string) => {},
};
