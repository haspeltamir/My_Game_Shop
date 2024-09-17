/*
Customize The colors of the website. , To toggle between light and dark mode, you can use the following Steps:
*/
// step 1: create a new file called theme.ts in the src folder: My_Game_Shop/src/theme.ts
// step 2: Add the following code to the theme.ts file:

import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",

  // useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      // 50: "#f7fafc",
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111",
    },
    // gray: {
    //   50: "#f7fafc",
    //   100: "#edf2f7",
    //   200: "#e2e8f0",
    //   300: "#cbd5e0",
    //   400: "#a0aec0",
    //   500: "#718096",
    //   600: "#4a5568",
    //   700: "#2d3748",
    //   800: "#1a202c",
    //   900: "#171923",
    // },
  },
});

// step 3: export the theme object from the theme.ts file:
export default theme;

//step 4: import the theme object in the main.tsx file:

// const theme = extendTheme({
//   colors: {
//     brand: {
//       900: "#1a365d",
//       800: "#153e75",
//       700: "#2a69ac",
//     },
//   },
// });
