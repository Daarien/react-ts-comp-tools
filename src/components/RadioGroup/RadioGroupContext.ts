import React from 'react';
import { RadioGroupProps } from './RadioGroup';

/**
 * @ignore - internal component.
 */

export interface RadioGroupState extends Pick<RadioGroupProps, 'name' | 'value' | 'onChange'> {}

const RadioGroupContext = React.createContext<RadioGroupState | undefined>(undefined);

if (process.env.NODE_ENV !== 'production') {
  RadioGroupContext.displayName = 'RadioGroupContext';
}

export default RadioGroupContext;
