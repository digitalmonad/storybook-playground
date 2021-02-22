import PropTypes from "prop-types";
import React from "react";
import { Root } from "./Button.styled";

export const Button = ({ label, ...props }) => {
  return (
    <Root type='button' {...props}>
      {label}
    </Root>
  );
};
