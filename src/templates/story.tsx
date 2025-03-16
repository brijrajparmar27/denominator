import React from 'react';
import { Story, Meta } from '@storybook/react';
import { {{Component}} } from './{{Component}}';
import { {{Component}}Props } from './{{Component}}.types';

export default {
    title: 'Components/{{Component}}',
    component: {{Component}},
} as Meta;

const Template: Story<{{Component}}Props> = (args) => <{{Component}} {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default {{Component}}'
};

export const WithCustomContent = Template.bind({});
WithCustomContent.args = {
    children: 'Custom Content'
}; 