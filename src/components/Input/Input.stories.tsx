import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input from './Input';
import { IInput } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<IInput> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'default',
  id: 'default',
  label: 'Default Input',
};

export const WithMask = Template.bind({});
WithMask.args = {
  name: 'phone',
  id: 'phone',
  label: 'Phone Number',
  mask: '(##) #####-####',
};

export const WithError = Template.bind({});
WithError.args = {
  name: 'error',
  id: 'error',
  label: 'Input with Error',
  errors: 'This field is required',
};