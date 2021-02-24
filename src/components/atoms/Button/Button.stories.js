import { Button } from "./Button.component";
import React from "react";

export default {
  title: "Example/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};

Primary.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/QUZgU9GTsKD5DZZnjpV0dW/Basic-Design-System?node-id=3%3A53",
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  label: "Button",
};
