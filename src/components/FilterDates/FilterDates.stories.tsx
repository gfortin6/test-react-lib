import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import FilterDates from './FilterDates';

export default {
  title: 'FilterDates',
  component: FilterDates,
  argTypes: { onChangeDateFrom: { action: 'dateFrom' }, onChangeDateTo: { action: 'dateTo' } },
} as ComponentMeta<typeof FilterDates>;

const Template: ComponentStory<typeof FilterDates> = (args) => <FilterDates {...args} />;

export const Default = Template.bind({});
Default.args = {
  isDefaultDateFrom: false,
  isDefaultDateTo: false,
};

export const FilterWithDefaultDates = Template.bind({});
FilterWithDefaultDates.args = {
  ...Default.args,
  defaultDateFrom: '2010-12-12',
  defaultDateTo: '2010-12-31',
  isDefaultDateFrom: true,
  isDefaultDateTo: true,
};
