import React from "react";
import { SVGIcon } from "./Icon.styled";
import direction from "../../../assets/direction.svg";

const iconsMap = {
  direction,
};

console.log(direction);

export const Icon = ({ name }) => <SVGIcon src={iconsMap[name]} />;
