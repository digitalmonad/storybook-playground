import { LinkButtonRoot } from "./LinkButton.styled";
import React from "react";

export const LinkButton = ({ label, href }) => {
  return <LinkButtonRoot {...{ href }}>{label}</LinkButtonRoot>;
};
