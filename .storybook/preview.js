import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";
import { defaultTheme } from "../src/theme/defaultTheme.js";
import { withThemes } from "@react-theming/storybook-addon";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

addDecorator(withThemes(ThemeProvider, [defaultTheme]));
