import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AuthForm } from "../lib";

export default {
  title: "Example/AuthForm",
  component: AuthForm,
} as ComponentMeta<typeof AuthForm>;

const Template: ComponentStory<typeof AuthForm> = (args) => (
  <AuthForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};
