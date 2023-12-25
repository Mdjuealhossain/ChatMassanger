import type { Preview } from "@storybook/react";
import {  ThemeProvider, createTheme } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import * as locales from "@mui/material/locale";
import {theme} from "../src/app/ThemingStory&Mui/createTheme"









const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      
    },
    options: {
      storySort: {
        order: [
          "Overview",
          "Installation",
          "Usage",
          "Deployment",
          "Dependencies",
          "Package & License",
          "Environment Variables",
        ],
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        theme
      },
      Provider: ThemeProvider,
    }),
  ] as any,
};

export default preview;
