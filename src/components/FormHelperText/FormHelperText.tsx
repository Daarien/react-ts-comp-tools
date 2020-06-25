import React from "react";
import styled from "styled-components/macro";
import clsx from "clsx";

export interface FormHelperTextProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  required?: boolean;
}

function FormHelperText(props: FormHelperTextProps) {
  const {
    children,
    className,
    disabled,
    error,
    focused,
    required,
    ...other
  } = props;

  return (
    <p
      className={clsx(
        {
          focused,
          disabled,
          error,
          required,
        },
        className
      )}
      {...other}
    >
      {children}
    </p>
  );
}

export default styled(FormHelperText)`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 10px;
  text-align: left;
  margin: 3px 0 0 0;
  &.disabled {
    color: ${({ theme }) => theme.palette.text.disabled};
  }
  &.error {
    color: ${({ theme }) => theme.palette.error.main};
  }
`;
