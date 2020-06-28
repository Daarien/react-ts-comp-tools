export const theme = {
  palette: {
    type: 'light',
    primary: {
      main: '#00a523',
      light: 'lightgreen',
      dark: 'green',
    },
    secondary: {
      main: '#6C6C6C',
      light: 'lightgray',
      dark: 'darkgray',
    },
    text: {
      primary: '#464646',
      secondary: '#6C6C6C',
      disabled: '#B1B1B1',
    },
    error: {
      main: '#DB2C2C',
    },
    border: {
      primary: '#0096FF',
      secondary: '#B1B1B1',
      disabled: '#CACACA',
    },
    action: {
      active: '#00a523',
      disabled: 'lightgray',
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
  border: TypeBorder;
  background: TypeBackground;
  text: TypeText;
  action: TypeAction;
}

export interface PaletteColor {
  light: string;
  main: string;
  dark: string;
}

export type PaletteType = 'light' | 'dark';

export interface TypeText {
  primary: string;
  secondary: string;
  disabled: string;
  hint: string;
}
export interface TypeBorder {
  primary: string;
  secondary: string;
  disabled: string;
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
