import styled, { css } from "../styled-components";
// import { css } from "styled-components";
import BaseButton, { BaseButtonProps } from "../BaseButton";
// import { Theme } from "../theme";

export interface ButtonProps extends BaseButtonProps {
  primary?: boolean;
  variant?: "contained" | "outlined";
}

const colorMixin = css<ButtonProps>`
  color: ${({ primary, variant, theme }) => {
    if (variant === "contained") {
      return "#fff";
    }
    if (variant === "outlined") {
      return primary
        ? theme.palette.primary.main
        : theme.palette.secondary.main;
    }
    if (primary) {
      return theme.palette.primary.main;
    }
    return theme.palette.secondary.main;
  }};
`;

const backgroundColorMixin = css<ButtonProps>`
  background-color: ${({ variant, theme }) => {
    if (variant === "contained") {
      return theme.palette.primary.main;
    }
    return "#fff";
  }};
`;

const Button = styled(BaseButton)<ButtonProps>`
  ${colorMixin};
  ${backgroundColorMixin};
  display: flex;
  font-size: 0.875rem;
  border: 1px solid;
  border-radius: 4px;
  padding: 7px 15px;
  transition: all 150ms;
  border-color: ${({ primary, variant, theme }) => {
    if (variant) {
      return primary
        ? theme.palette.primary.main
        : theme.palette.secondary.main;
    }
    return "transparent";
  }};
  &:hover {
    color: ${({ primary, variant, theme }) => {
      if (variant === "outlined") {
        return "#fff";
      }
      if (primary && !variant) {
        return theme.palette.primary.main;
      }
    }};
    background-color: ${({ variant, theme }) => {
      if (variant === "contained") {
        return theme.palette.primary.dark;
      }
      if (variant === "outlined") {
        return theme.palette.primary.main;
      }
      return "#fafafa";
    }};
  }
`;

Button.defaultProps = {
  primary: false,
};

export default Button;
