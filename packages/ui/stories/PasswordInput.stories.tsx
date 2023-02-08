import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PasswordInput } from "../lib";

export default {
  title: "Example/PasswordInput",
  component: PasswordInput,
} as ComponentMeta<typeof PasswordInput>;

const Template: ComponentStory<typeof PasswordInput> = (args) => (
  <PasswordInput {...args} />
);

export const Default = Template.bind({});

export const WithValue = Template.bind({});
WithValue.args = {
  value: "someone@example.com",
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: "Type your password here...",
};
