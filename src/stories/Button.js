import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

export const Button = ({ label, ...props }) => {
  return (
    <Root type='button' {...props}>
      {label}
    </Root>
  );
};

const Root = styled.button`
  color: ${({ theme }) => theme.color};
`;
