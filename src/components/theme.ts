export const theme = {
  palette: {
    type: "light",
    primary: {
      main: "#00a523",
      light: "lightgreen",
      dark: "green",
    },
    secondary: {
      main: "#6c6c6c",
      light: "lightgray",
      dark: "darkgray",
    },
    text: {
      primary: "#22222",
      secondary: "gray",
      disabled: "lightgray",
    },
    error: {
      main: "red",
    },
    action: {
      active: "#00a523",
      disabled: "lightgray",
    },
  },
} as Theme;

export interface Theme {
  palette: Palette;
}

export interface Palette {
  type: PaletteType;
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  warning: PaletteColor;
  info: PaletteColor;
  success: PaletteColor;
  background: TypeBackground;
  text: TypeText;
  action: TypeAction;
}

export interface PaletteColor {
  light: string;
  main: string;
  dark: string;
}

export type PaletteType = "light" | "dark";

export interface TypeText {
  primary: string;
  secondary: string;
  disabled: string;
  hint: string;
}

export interface TypeBackground {
  default: string;
  paper: string;
}

export interface TypeAction {
  active: string;
  hover: string;
  selected: string;
  focus: string;
  disabled: string;
}
