import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { UIVariant } from '../..';
import ButtonWithModal from './ButtonWithModal';

export default {
  title: 'ButtonWithModal',
  component: ButtonWithModal,
  argTypes: { onConfirm: { action: 'Confirmed' } },
} as ComponentMeta<typeof ButtonWithModal>;

const Template: ComponentStory<typeof ButtonWithModal> = (args) => <ButtonWithModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonText: 'Click me',
  modalTitle: 'Test - Header',
  modalText: 'Test - Text',
  confirmButtonText: 'Ok',
};

export const ButtonWithAllArgs = Template.bind({});
ButtonWithAllArgs.args = {
  ...Default.args,
  variant: UIVariant.SUCCESS,
  disabled: false,
  closeButtonText: 'Cancel',
};

export const ButtonDisable = Template.bind({});
ButtonDisable.args = {
  ...Default.args,
  disabled: true,
};
