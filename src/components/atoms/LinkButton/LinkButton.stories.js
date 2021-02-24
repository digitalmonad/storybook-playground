import { LinkButton } from "./LinkButton.component";
import React from "react";

export default {
  title: "Example/LinkButton",
  component: LinkButton,
};

const Template = (args) => <LinkButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Take me out",
  href: "#",
};
