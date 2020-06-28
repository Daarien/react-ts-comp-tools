import React from 'react';
import clsx from 'clsx';
import styled from '../styled-components';
import formControlState from '../FormControl/formControlState';
import useFormControl from '../FormControl/useFormControl';

export interface FormHelperTextProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  required?: boolean;
}

function FormHelperText(props: FormHelperTextProps) {
  const { children, className, disabled, error, focused, required, ...other } = props;

  const formControl = useFormControl();
  const fcs = formControlState({
    props,
    formControl,
    states: ['size', 'variant', 'disabled', 'error', 'focused', 'required'],
  });

  return (
    <p
      className={clsx(
        {
          large: fcs.size === 'large',
          focused: fcs.focused,
          disabled: fcs.disabled,
          required: fcs.required,
          error: fcs.error,
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
  text-align: left;
  margin-top: 4px;
  font-size: 0.75rem;
  line-height: 1rem;
  &.large {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  &.disabled {
    color: ${({ theme }) => theme.palette.text.disabled};
  }
  &.error {
    color: ${({ theme }) => theme.palette.error.main};
  }
`;
