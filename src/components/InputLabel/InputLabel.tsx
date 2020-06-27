import React from 'react';
import styled from 'styled-components/macro';
import clsx from 'clsx';
import FormLabel, { FormLabelProps } from '../FormLabel';

export interface InputLabelProps extends FormLabelProps {}

function InputLabel(props: InputLabelProps) {
  const { className, ...other } = props;
  return <FormLabel className={clsx('SuuiInputLabel', className)} {...other} />;
}

export default styled(InputLabel)`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 10px;
`;
