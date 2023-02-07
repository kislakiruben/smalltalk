import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Link } from "../lib";

export default {
  title: "Example/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Click me",
  href: "javascript:;",
};
