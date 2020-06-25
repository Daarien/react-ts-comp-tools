import React from "react";
import styled from "../styled-components";
import clsx from "clsx";

export interface BaseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  component?: React.ElementType;
  href?: string;
}

function BaseButton(props: BaseButtonProps) {
  const {
    children,
    className,
    component = "button",
    type = "button",
    disabled,
    ...other
  } = props;

  let ComponentProp = component;

  if (ComponentProp === "button" && other.href) {
    ComponentProp = "a";
  }

  const buttonProps = {} as React.ButtonHTMLAttributes<HTMLButtonElement>;
  if (ComponentProp === "button") {
    buttonProps.type = type;
    buttonProps.disabled = disabled;
  } else {
    if (ComponentProp !== "a" || !other.href) {
      buttonProps.role = "button";
    }
    buttonProps["aria-disabled"] = disabled;
  }

  return (
    <ComponentProp
      className={clsx(
        {
          disabled,
        },
        className
      )}
      {...buttonProps}
      {...other}
    >
      {children}
    </ComponentProp>
  );
}

export default styled(BaseButton)<BaseButtonProps>`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  outline: 0;
  border: 0;
  margin: 0;
  padding: 0;
  border-radius: 0;
  user-select: none;
  text-decoration: none;
  outline: none;
  &:focus {
    outline: none;
  }
  &.disabled {
    pointer-events: none;
    cursor: default;
  }
`;
