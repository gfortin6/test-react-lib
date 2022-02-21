import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Header from './Heading';

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const H1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
H1.args = {
  level: '1',
  text: 'This is a header H1',
};

export const H2 = Template.bind({});
H2.args = {
  level: '2',
  text: 'This is a header H2',
};

export const H3 = Template.bind({});
H3.args = {
  level: '3',
  text: 'This is a header H3',
};

export const H4 = Template.bind({});
H4.args = {
  level: '4',
  text: 'This is a header H4',
};

export const H5 = Template.bind({});
H5.args = {
  level: '5',
  text: 'This is a header H5',
};

export const H6 = Template.bind({});
H6.args = {
  level: '6',
  text: 'This is a header H6',
};
