import React from "react";
import styled from "styled-components/macro";
import clsx from "clsx";

export interface FormLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  required?: boolean;
  classes?: Record<FormLabelClassKey, string>;
}

export type FormLabelClassKey =
  | "root"
  | "focused"
  | "disabled"
  | "error"
  | "required"
  | "asterisk";

function FormLabel(props: FormLabelProps) {
  const {
    children,
    classes,
    className,
    color,
    disabled,
    error,
    focused,
    required,
    ...other
  } = props;
  return (
    <label className={clsx(className)} {...other}>
      {children}
    </label>
  );
}

export default styled(FormLabel)`
  color: ${({ theme }) => theme.palette.text.secondary};
  line-height: 1;
  padding: 0;
  &.focused {
    color: ${({ theme }) => theme.palette.text.primary};
  }
  &.disabled {
    color: ${({ theme }) => theme.palette.text.disabled};
  }
  &.error {
    color: ${({ theme }) => theme.palette.error.main};
  }
`;
