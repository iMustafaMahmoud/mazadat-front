import { createTheme } from "@material-ui/core/styles";
import { CSSProperties } from "@material-ui/core/styles/withStyles";

interface Fonts {
  h1?: CSSProperties;
  h2?: CSSProperties;
  h3?: CSSProperties;
  h4?: CSSProperties;
  h5?: CSSProperties;
  h6?: CSSProperties;
  body1?: CSSProperties;
  body2?: CSSProperties;
  button?: CSSProperties;
  subtitle1?: CSSProperties;
  subtitle2?: CSSProperties;
  caption?: CSSProperties;
  overline?: CSSProperties;
}

const fonts: Fonts = {
  h1: {
    // 42px
    fontSize: "2.625rem",
    fontWeight: 300,
  },
  h2: {
    // 34px
    fontSize: "2.125rem",
    fontWeight: 700,
  },
  h3: {
    // 20px
    fontSize: "1.25rem",
    fontWeight: 400,
  },
  body1: {
    // 16px
    fontSize: "1rem",
    fontWeight: 400,
  },
  body2: {
    // 14px
    fontSize: "0.875rem",
    fontWeight: 400,
  },
  subtitle1: {
    // 28px
    fontSize: "1.75rem",
    fontWeight: 500,
  },
  subtitle2: {
    // 22px
    fontSize: "1.375rem",
    fontWeight: 400,
  },
  button: {
    // 16px
    color: "#2884FF",
    fontSize: "1rem",
    fontWeight: 500,
    textTransform: "unset",
  },
  h5: {
    // 18px
    fontSize: "1.125rem",
    fontWeight: 400,
  },
};

const { h1, h2, h3, h5, body1, body2, button, subtitle1, subtitle2 } = fonts;

const defaultTheme = createTheme();

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    // fontFamily: ["Poppins", "sans-serif"].join(","),
    h1,
    h2,
    h3,
    h5,
    body1,
    body2,
    subtitle1,
    subtitle2,
    button,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          [defaultTheme.breakpoints.up("xs")]: {
            fontSize: "7px",
          },
          [defaultTheme.breakpoints.up("sm")]: {
            fontSize: "9px",
          },
          [defaultTheme.breakpoints.up("md")]: {
            fontSize: "11px",
          },
          [defaultTheme.breakpoints.up("lg")]: {
            fontSize: "12px",
          },
          [defaultTheme.breakpoints.up("xl")]: {
            fontSize: "16px",
          },
        },
      },
    },
  },
});
