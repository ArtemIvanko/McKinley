import {
  createBreakpoints,
  createStyled,
  MUIStyledCommonProps,
} from "@mui/system";
import { createTheme, responsiveFontSizes } from "@mui/material";

export enum FontFamily {
  Primary = "'DM Sans', sans-serif",
  Secondary = "'DM Serif Text', sans-serif",
}

const basicHeadingStyles = {
  fontFamily: FontFamily.Secondary,
  fontWeight: 500,
};

const breakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
});

const scrollbarStyles = {
  "*::-webkit-scrollbar": {
    display: "none",
  },
};

let defaultTheme = createTheme({
  breakpoints,
  palette: {
    primary: {
      main: "#00486D",
      light: "#99B6C5",
      dark: "#002B41",
    },
    secondary: {
      main: "#F2F6F7",
      light: "#E4ECF0",
    },
    error: {
      main: "#B51010",
    },
    info: {
      main: "rgba(0,0,0,0.1)",
    },
    success: {
      main: "#148314",
    },
    warning: {
      main: "#FFD700",
    },
    text: {
      primary: "#00486D",
    },
    background: {
      default: "#FAFAFA",
    },
    divider: "#CECDCD70",
  },
  typography: {
    fontFamily: FontFamily.Primary,
    h1: basicHeadingStyles,
    h2: { fontWeight: 600 },
    h3: basicHeadingStyles,
    h4: basicHeadingStyles,
    h5: basicHeadingStyles,
    h6: basicHeadingStyles,
    subtitle1: {
      fontWeight: 600,
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: "1rem",
    },
    button: {
      fontFamily: FontFamily.Secondary,
      fontWeight: 600,
    },
    overline: {
      fontFamily: FontFamily.Secondary,
      fontWeight: 600,
    },
    caption: {
      fontFamily: FontFamily.Secondary,
      textTransform: "uppercase",
      fontSize: "0.5rem",
      fontWeight: 200,
      letterSpacing: "0.5rem",
      textAlign: "center",
    },
    body2: {
      fontSize: "1.25rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: scrollbarStyles,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "0.75rem 1.5rem",
          fontFamily: FontFamily.Primary,
          textTransform: "none",
          width: "fit-content",
        },
        fullWidth: {
          width: "100%",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#CECDCD70",
          "& .MuiInputBase-input": {
            color: "#FFFFFF",
            "&::placeholder": {
              color: "#FFFFFF",
              opacity: 1,
            },
          },
        },
      },
    },
  },
});

defaultTheme = responsiveFontSizes(defaultTheme);

const _styled = createStyled({ defaultTheme });

const styled = ((component: any, config: any) => {
  config = {
    shouldForwardProp: (prop: string) => !prop.startsWith("$"),
    ...config,
  };
  return _styled(component, config);
}) as typeof _styled;

export type ThemeType = typeof defaultTheme;

export interface IStyledCommonProps extends MUIStyledCommonProps<ThemeType> {
  theme: ThemeType;
}

export { defaultTheme };

export default styled;
