import React from 'react';
import clsx from 'clsx';
import styled from '../styled-components';
import useFormControl from '../FormControl/useFormControl';

export interface FormControlLabelProps
  extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children' | 'onChange'> {
  checked?: boolean;
  disabled?: boolean;
  label: string;
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  name?: string;
  value?: unknown;
  /**
   * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: React.ReactElement<any, any>;
  onChange?: (event: React.ChangeEvent<unknown>, checked: boolean) => void;
  [key: string]: any;
}

function FormControlLabel(props: FormControlLabelProps) {
  const {
    className,
    label,
    checked,
    disabled: disabledProp,
    labelPlacement = 'end',
    control,
    onChange,
    ...other
  } = props;

  const formControlState = useFormControl();

  let disabled = disabledProp;
  if (typeof disabled === 'undefined' && typeof control.props.disabled !== 'undefined') {
    disabled = control.props.disabled;
  }
  if (typeof disabled === 'undefined' && formControlState) {
    disabled = formControlState.disabled;
  }

  const controlProps: Record<string, any> = {
    disabled,
  };

  ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach((key) => {
    if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
      controlProps[key] = props[key];
    }
  });

  return (
    <label
      className={clsx(
        { [`labelPlacement-${labelPlacement}`]: labelPlacement !== 'end', disabled },
        className
      )}
      {...other}
    >
      {React.cloneElement(control, controlProps)}
      <span className={clsx('label', { disabled })}>{label}</span>
    </label>
  );
}

export default styled(FormControlLabel)`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  --webkit-tap-highlight-color: transparent;
  margin-left: -11px;
  margin-right: 16px;
  &.disabled {
    cursor: default;
  }
  &.labelPlacement-start {
    flex-direction: row-reverse;
    margin-left: 16px;
    margin-right: -11px;
  }
  .label {
    &.disabled {
      color: ${({ theme }) => theme.palette.text.disabled};
    }
  }
`;
