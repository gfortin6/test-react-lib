import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ButtonSubmitAndClear from './ButtonSubmitAndClear';

export default {
  title: 'ButtonSubmitAndClear',
  component: ButtonSubmitAndClear,
  argTypes: { onClickClear: { action: 'Clear' } },
} as ComponentMeta<typeof ButtonSubmitAndClear>;

const Template: ComponentStory<typeof ButtonSubmitAndClear> = (args) => <ButtonSubmitAndClear {...args} />;

export const Default = Template.bind({});
Default.args = { btnSubmitText: 'Confirm', isFormValid: true };
