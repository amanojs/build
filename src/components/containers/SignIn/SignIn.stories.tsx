import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SignIn } from './index';

export default {
  title: 'PageContainer/SignIn',
  component: SignIn,
} as Meta;

const Template: Story = () => <SignIn />;

export const Normal = Template.bind({});
