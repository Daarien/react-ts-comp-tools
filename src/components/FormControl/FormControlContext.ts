import React from 'react';
import { FormControlProps } from './FormControl';

type ContextFromPropsKey = 'error' | 'required' | 'disabled' | 'fullWidth';

export interface FormControlState extends Pick<FormControlProps, ContextFromPropsKey> {
  focused: boolean;
  onBlur: () => void;
  onFocus: () => void;
}

const FormControlContext = React.createContext<FormControlState | undefined>(undefined);

if (process.env.NODE_ENV !== 'production') {
  FormControlContext.displayName = 'FormControlContext';
}

export default FormControlContext;
