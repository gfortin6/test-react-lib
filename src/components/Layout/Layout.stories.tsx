/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { FiArrowLeftCircle, FiLogOut } from 'react-icons/fi';
import { MemoryRouter } from 'react-router-dom';
import { UIVariant } from '../../enums/UIVariant';
import ADSLogo from '../../images/ADSLogo.svg';
import H1 from '../Heading/Heading';
import Layout from './Layout';

export default {
  title: 'Layout',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <MemoryRouter>
    <Layout {...args} />
  </MemoryRouter>
);

// Used on Portal 3 project
export const NoSideBar = Template.bind({});
NoSideBar.args = {
  isLoading: false,
  isAlertToShow: true,
  alertHeader: 'Alert header',
  alertMessage: 'Alert message',
  alertVariant: UIVariant.INFO,
  topNavBar: {
    appName: 'test app name',
    apiVersion: '1.0.0',
    uiVersion: '1.0.0',
    brandLogo: {
      path: ADSLogo,
      alt: 'ADS logo',
    },
    onBackHome: () => {},
  },
  children: <H1 text="Layout content" level="1" />,
};

export const WithSideBar = Template.bind({});
WithSideBar.args = {
  isLoading: false,
  isAlertToShow: true,
  alertHeader: 'Alert header',
  alertMessage: 'Alert message',
  alertVariant: UIVariant.INFO,
  topNavBar: {
    appName: 'test App Name',
    apiVersion: '1.0.0',
    uiVersion: '1.0.1',
    brandLogo: {
      path: ADSLogo,
      alt: 'ADS logo',
    },
    onBackHome: () => {},
    onToggleClicked: () => {},
  },
  sideMenu: {
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
    onLinkClicked: () => {},
    onToggleChange: () => {},
    onCollapseChange: () => {},
    onLoggedOut: () => {},
  },
  children: <H1 text="Layout content" level="1" />,
};
