import React from "react";
import styled from "../styled-components";
import SwitchBase, { SwitchBaseProps } from "../internal/SwitchBase";
import CheckOnIcon from "../svg/check_on.svg";
import CheckOffIcon from "../svg/check_off.svg";
import clsx from "clsx";

const defaultCheckedIcon = <img src={CheckOnIcon} alt="check-on" />;
const defaultIcon = <img src={CheckOffIcon} alt="check-off" />;

export interface CheckboxProps
  extends Omit<SwitchBaseProps, "checkedIcon" | "icon" | "type"> {
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
  size?: "small" | "medium";
}

function Checkbox(props: CheckboxProps) {
  const {
    checked,
    disabled,
    className,
    checkedIcon = defaultCheckedIcon,
    icon = defaultIcon,
    // size = "medium",
    ...other
  } = props;
  return (
    <SwitchBase
      type="checkbox"
      className={clsx({ checked, disabled }, className)}
      icon={icon}
      checkedIcon={checkedIcon}
      {...other}
    />
  );
}

export default styled(Checkbox)``;
