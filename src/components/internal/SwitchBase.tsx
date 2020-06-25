import React from "react";
import styled from "../styled-components";
import IconButton, { IconButtonProps } from "../IconButton";
import clsx from "clsx";

export interface SwitchBaseProps
  extends Omit<IconButtonProps, "children" | "onChange" | "type" | "value"> {
  autoFocus?: boolean;
  checked?: boolean;
  icon: React.ReactNode;
  checkedIcon: React.ReactNode;
  defaultChecked?: boolean;
  disabled?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  inputRef?: React.Ref<HTMLInputElement>;
  /**
   * Name attribute of the `input` element.
   */
  name?: string;
  readOnly?: boolean;
  /**
   * If `true`, the `input` element will be required.
   */
  required?: boolean;
  tabIndex?: number;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value?: React.InputHTMLAttributes<HTMLInputElement>["value"];
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
    disabled,
    checkedIcon,
    icon,
    name,
    id,
    type,
    value,
    inputRef,
    inputProps,
    onChange,
    ...other
  } = props;

  const isControlled = !!checkedProp;
  const isChecked = isControlled ? checkedProp : !!defaultChecked;

  const [checked, setCheckedState] = React.useState(isChecked);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newChecked = event.target.checked;
    setCheckedState(newChecked);
    if (onChange) {
      onChange(event);
    }
  }

  return (
    <IconButton
      component="span"
      className={clsx({ checked, disabled }, className)}
      disabled={disabled}
      {...other}
    >
      <input
        autoFocus={autoFocus}
        checked={checked}
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
