import { ButtonRoot } from "./Button.styled";
import PropTypes from "prop-types";
import React from "react";

export const Button = ({ label, ...props }) => {
  return (
    <ButtonRoot type='button' {...props}>
      {label}
    </ButtonRoot>
  );
};
