import React from 'react';
import clsx from 'clsx';
import styled from 'styled-components';
import FormControlContext from './FormControlContext';

export interface FormControlProps extends React.HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  error?: boolean;
  focused?: boolean;
  required?: boolean;
  fullWidth?: boolean;
  component?: React.ElementType;
}

function FormControl(props: FormControlProps) {
  const {
    children,
    className,
    error = false,
    disabled = false,
    required = false,
    fullWidth = false,
    focused: visuallyFocused,
    component: Component = 'div',

    ...other
  } = props;

  const [_focused, setFocused] = React.useState(false);
  const focused = visuallyFocused !== undefined ? visuallyFocused : _focused;

  if (disabled && focused) {
    setFocused(false);
  }

  const childContext = {
    disabled,
    error,
    focused,
    required,
    fullWidth,
    onBlur: () => {
      setFocused(false);
    },
    onFocus: () => {
      setFocused(true);
    },
  };

  return (
    <FormControlContext.Provider value={childContext}>
      <Component className={clsx({ fullWidth }, className)} {...other}>
        {children}
      </Component>
    </FormControlContext.Provider>
  );
}

export default styled(FormControl)`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  /** Reset fieldset default style. */
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
  vertical-align: top; /** Fix alignment issue on Safari. */
  margin-top: 16px;
  margin-bottom: 8px;
  &.fullWidth {
    width: 100%;
  }
`;
