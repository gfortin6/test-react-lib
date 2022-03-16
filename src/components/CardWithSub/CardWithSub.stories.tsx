import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import CardWithSub from './CardWithSub';

export default {
  title: 'CardWithSub',
  component: CardWithSub,
  argTypes: { onDelete: { action: 'Delete' } },
} as ComponentMeta<typeof CardWithSub>;

const Template: ComponentStory<typeof CardWithSub> = (args) => <CardWithSub {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Default Title',
  isDeletable: true,
};
