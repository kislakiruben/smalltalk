import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input, InputGroup, Label } from "../lib";

export default {
  title: "Example/InputGroup",
  component: InputGroup,
} as ComponentMeta<typeof InputGroup>;

const Template: ComponentStory<typeof InputGroup> = (args) => (
  <InputGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Label htmlFor="input">Label:</Label>
      <Input id="input" placeholder="Type here..." type="text" />
    </>
  ),
};
