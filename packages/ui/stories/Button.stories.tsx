import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../lib";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Click me",
  primary: true,
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  children: "Click me",
  disabled: true,
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Click me",
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  children: "Click me",
  disabled: true,
};
