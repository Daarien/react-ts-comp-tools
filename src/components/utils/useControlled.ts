/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState, useRef, useEffect } from 'react';

export interface UseControlledProps<T = unknown> {
  /**
   * This prop contains the component value when it's controlled.
   */
  controlled: T | undefined;
  /**
   * The default value when uncontrolled.
   */
  default: T | undefined;
  /**
   * The component name displayed in warnings.
   */
  name: string;
  /**
   * The name of the state variable displayed in warnings.
   */
  state?: string;
}

export default function useControlled<T = unknown>({
  name,
  controlled,
  state = 'value',
  default: defaultProp,
}: UseControlledProps<T>): [T, (newValue: T) => void] {
  const { current: isControlled } = useRef(controlled !== undefined);
  const [valueState, setValue] = useState(defaultProp);
  const value = isControlled ? controlled : valueState;

  if (process.env.NODE_ENV !== 'production') {
    useEffect(() => {
      if (isControlled !== (controlled !== undefined)) {
        console.error(
          [
            `SU-UI: A component is changing the ${
              isControlled ? '' : 'un'
            }controlled ${state} state of ${name} to be ${isControlled ? 'un' : ''}controlled.`,
            'Elements should not switch from uncontrolled to controlled (or vice versa).',
            `Decide between using a controlled or uncontrolled ${name} ` +
              'element for the lifetime of the component.',
            "The nature of the state is determined during the first render, it's considered controlled if the value is not `undefined`.",
          ].join('\n')
        );
      }
    }, [controlled, isControlled, name, state]);

    const { current: defaultValue } = useRef(defaultProp);

    useEffect(() => {
      if (!isControlled && defaultValue !== defaultProp) {
        console.error(
          [
            `SU-UI: A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` +
              `To suppress this warning opt to use a controlled ${name}.`,
          ].join('\n')
        );
      }
    }, [defaultProp, defaultValue, isControlled, name, state]);
  }

  const setValueIfUncontrolled = React.useCallback(
    (newValue) => {
      if (!isControlled) {
        setValue(newValue);
      }
    },
    [isControlled]
  );

  return [value!, setValueIfUncontrolled];
}
