import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';
import { Theme } from './theme';

const {
  default: styled,
  css,
  keyframes,
  createGlobalStyle,
  withTheme,
  useTheme,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export { css, keyframes, createGlobalStyle, withTheme, useTheme, ThemeProvider };

export default styled;
