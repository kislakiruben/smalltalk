import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Label } from "../lib";

export default {
  title: "Example/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Password:",
};
