import React from 'react';
import clsx from 'clsx';
import styled from '../styled-components';
import FormLabel, { FormLabelProps } from '../FormLabel';
import formControlState from '../FormControl/formControlState';
import useFormControl from '../FormControl/useFormControl';

export interface InputLabelProps extends FormLabelProps {
  variant?: 'default' | 'outline';
}

function InputLabel(props: InputLabelProps) {
  const { className, variant, ...other } = props;

  const formControl = useFormControl();

  const fcs = formControlState({
    props,
    formControl,
    states: ['variant', 'size'],
  });

  return (
    <FormLabel
      className={clsx({ formControl, large: fcs.size === 'large' }, className)}
      {...other}
    />
  );
}

export default styled(InputLabel)`
  display: block;
  position: absolute;
  left: 0;
  top: -18px;
  font-size: 0.75rem;
  line-height: 1rem;
  &.large {
    top: -24px;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;
