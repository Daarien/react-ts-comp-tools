import React from 'react';
import clsx from 'clsx';
import styled from '../styled-components';
import SwitchBase, { SwitchBaseProps } from '../internal/SwitchBase';
import RadioOnIcon from '../svg-icons/RadioButtonChecked';
import RadioOffIcon from '../svg-icons/RadioButtonUnchecked';
import useRadioGroup from '../RadioGroup/useRadioGroup';
// import createChainedFunction from '../utils/createChainedFunction';

const defaultRadioOnIcon = <RadioOnIcon />;
const defaultRadioOffIcon = <RadioOffIcon />;

export interface RadioProps extends Omit<SwitchBaseProps, 'icon' | 'checkedIcon' | 'type'> {
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
  size?: 'small' | 'medium';
}

function Radio(props: RadioProps) {
  const {
    className,
    name: nameProp,
    checked: checkedProp,
    checkedIcon = defaultRadioOnIcon,
    icon = defaultRadioOffIcon,
    onChange,
    // size = "medium",
    ...other
  } = props;

  let checked = checkedProp;
  let name = nameProp;

  const radioGroup = useRadioGroup();
  if (radioGroup) {
    if (typeof checked === 'undefined') {
      checked = radioGroup.value === props.value;
    }
    if (typeof name === 'undefined') {
      name = radioGroup.name;
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange && onChange(e);
    radioGroup?.onChange && radioGroup.onChange(e);
  }

  return (
    <SwitchBase
      type="radio"
      name={name}
      checked={checked}
      onChange={handleChange}
      className={clsx(className)}
      icon={icon}
      checkedIcon={checkedIcon}
      {...other}
    />
  );
}

export default styled(Radio)``;
