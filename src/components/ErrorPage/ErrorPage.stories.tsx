import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ErrorPage from './ErrorPage';

export default {
  title: 'ErrorPage',
  component: ErrorPage,
  code: 500,
  errorTitle: 'Error title',
  errorMessage: 'Error message',
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) => <ErrorPage {...args} />;

export const Error500 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error500.args = {
  code: 500,
  errorTitle: 'Error title',
  errorMessage: 'Error message',
};

export const Error404 = Template.bind({});
Error404.args = {
  code: 404,
  errorTitle: 'Error title',
  errorMessage: 'Error message',
};
