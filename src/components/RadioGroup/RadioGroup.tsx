import React, { ChangeEvent } from 'react';
import styled from '../styled-components';
import FormGroup, { FormGroupProps } from '../FormGroup';
import useControlled from '../utils/useControlled';
import RadioGroupContext from './RadioGroupContext';

export interface RadioGroupProps extends Omit<FormGroupProps, 'onChange'> {
  name?: string;
  value?: any;
  defaultValue?: any;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function RadioGroup(props: RadioGroupProps) {
  const { children, name: nameProp, value: valueProp, onChange, ...other } = props;

  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: props.defaultValue,
    name: 'RadioGroup',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <RadioGroupContext.Provider value={{ name: nameProp, value, onChange: handleChange }}>
      <FormGroup role="radiogroup" {...other}>
        {children}
      </FormGroup>
    </RadioGroupContext.Provider>
  );
}

export default styled(RadioGroup)``;
