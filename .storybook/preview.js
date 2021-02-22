import { GlobalStyle } from "../src/theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";
import { theme } from "../src/theme/defaultTheme.js";
import { withThemes } from "@react-theming/storybook-addon";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

const GlobalStyleDecorator = (fn) => (
  <>
    <GlobalStyle />
    {fn()}
  </>
);

// const DummyDecorator = (fn) => (
//   <div>
//     <h1>Ba Dum Tsss...</h1>
//     {fn()}
//   </div>
// );
// addDecorator(DummyDecorator);
addDecorator(GlobalStyleDecorator);
addDecorator(withThemes(ThemeProvider, [theme]));
