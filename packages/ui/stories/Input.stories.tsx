import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from "../lib";

export default {
  title: "Example/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const WithValue = Template.bind({});
WithValue.args = {
  value: "someone@example.com",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: "Type here...",
};
