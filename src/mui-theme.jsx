import '@fontsource-variable/space-grotesk';
import '@fontsource-variable/source-code-pro';
import '@fontsource/reenie-beanie';
import '@fontsource/special-elite';
import { createTheme, ThemeProvider } from "@mui/material";

const colors = {
  primary: "#E7473C",
  secondary: "#000",
  bg: "#F0F0F0"
}

export default function ThemeProviderWrapper({ children }) {
  const theme = createTheme({
    typography: {
      two: {
        fontSize: ".8rem",
      },
      three: {
        fontSize: "1.2rem",
      },
      four: {
        fontSize: "1.6rem",
      },
      five: {
        fontSize: "1.8rem",
      },
      six: {
        fontSize: "2rem",
      },
      seven: {
        fontSize: "2.2rem",
      },
      eight: {
        fontSize: "3rem",
      },
    },
    components: {
      MuiTypography: {
        styleOverrides: {
          root: {
            // fontFamily: 'Space Grotesk Variable',
            fontFamily: 'Source Code Pro Variable',
            color: "#fff"
          },
        },
      },
      defaultProps: {
        variantMapping: {
          two: "span",
          three: "span",
          four: "p",
          five: "h4",
          six: "h3",
          seven: "h2",
          eight: "h1",
        },
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
