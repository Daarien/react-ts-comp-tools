import React, { FocusEvent } from 'react';
import clsx from 'clsx';
import styled from '../styled-components';
import IconButton, { IconButtonProps } from '../IconButton';
import useControlled from '../utils/useControlled';
import useFormControl from '../FormControl/useFormControl';

export interface SwitchBaseProps
  extends Omit<IconButtonProps, 'children' | 'onChange' | 'type' | 'value'> {
  autoFocus?: boolean;
  icon: React.ReactNode;
  checkedIcon: React.ReactNode;
  /**
   * Attribute of the `input` element.
   */
  name?: string;
  tabIndex?: number;
  checked?: boolean;
  readOnly?: boolean;
  required?: boolean;
  defaultChecked?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  value?: React.InputHTMLAttributes<HTMLInputElement>['value'];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function SwitchBase(props: SwitchBaseProps) {
  const {
    autoFocus,
    defaultChecked,
    readOnly,
    required,
    tabIndex,
    className,
    checked: checkedProp,
    disabled: disabledProp,
    checkedIcon,
    icon,
    name,
    id,
    type,
    value,
    inputRef,
    inputProps,
    onChange,
    onFocus,
    onBlur,
    ...other
  } = props;

  const [checked, setCheckedState] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'SwitchBase',
    state: 'checked',
  });

  const muiFormControl = useFormControl();

  const handleFocus = (event: FocusEvent<HTMLButtonElement>) => {
    if (onFocus) {
      onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };

  const handleBlur = (event: FocusEvent<HTMLButtonElement>) => {
    if (onBlur) {
      onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      onChange(event);
    }
  }

  let disabled = disabledProp;

  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }

  return (
    <IconButton
      component="span"
      className={clsx({ checked, disabled }, className)}
      disabled={disabled}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...other}
    >
      <input
        autoFocus={autoFocus}
        checked={checkedProp}
        defaultChecked={defaultChecked}
        disabled={disabled}
        id={id}
        name={name}
        onChange={handleInputChange}
        readOnly={readOnly}
        ref={inputRef}
        required={required}
        tabIndex={tabIndex}
        type={type}
        value={value}
        {...inputProps}
      />
      {checked ? checkedIcon : icon}
    </IconButton>
  );
}

export default styled(SwitchBase)`
  padding: 9px;
  input {
    cursor: inherit;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    opacity: 0;
    z-index: 1;
  }
`;
