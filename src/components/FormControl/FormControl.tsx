import React from "react";
import styled from "styled-components";
import clsx from "clsx";

export interface FormControlProps {
  children?: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  className?: string;
}
export type FormControlClassKey = "root" | "fullWidth";

function FormControl(props: FormControlProps) {
  const {
    children,
    className,
    disabled = false,
    // error = false,
    fullWidth = false,
    focused: visuallyFocused,
    // required = false,
    ...other
  } = props;

  const [_focused, setFocused] = React.useState(false);
  const focused = visuallyFocused !== undefined ? visuallyFocused : _focused;

  if (disabled && focused) {
    setFocused(false);
  }

  return (
    <div className={clsx({ fullWidth }, className)} {...other}>
      {children}
    </div>
  );
}

export default styled(FormControl)`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  /** Reset fieldset default style. */
  min-width: 0;
  margin: 0;
  border: 0;
  vertical-align: top; /** Fix alignment issue on Safari. */
  margin-top: 16px;
  margin-bottom: 8px;
  padding: 14px 0;
  &.fullWidth {
    width: 100%;
  }
`;
