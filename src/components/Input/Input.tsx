import React from 'react';
import clsx from 'clsx';
import styled from '../styled-components';
import formControlState from '../FormControl/formControlState';
import FormControlContext from '../FormControl/FormControlContext';
import { useFormControl } from '../FormControl';

export interface InputBaseComponentProps
  extends React.HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  // Accommodate arbitrary additional props coming from the `inputProps` prop
  [arbitrary: string]: any;
}

export interface InputProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'children' | 'onChange' | 'onKeyUp' | 'onKeyDown' | 'onBlur' | 'onFocus'
  > {
  'aria-describedby'?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  error?: boolean;
  fullWidth?: boolean;
  variant?: 'default' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  /**
   * The id of the `input` element.
   */
  id?: string;
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent?: React.ElementType<InputBaseComponentProps>;
  /**
   * [Attributes] applied to the `input` element.
   */
  inputProps?: InputBaseComponentProps;
  /**
   * Pass a ref to the `input` element.
   */
  inputRef?: React.Ref<any>;
  /**
   * If `true`, a textarea element will be rendered.
   */
  name?: string;
  onBlur?: (e?: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onFocus?: (e?: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  multiline?: boolean;
  /**
   * Name attribute of the `input` element.
   */
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows?: number;
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax?: string | number;
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  rowsMin?: string | number;
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type?: string;
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value?: string | number | readonly string[];
  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue?: string | number | readonly string[];
}

function Input(props: InputProps) {
  const {
    'aria-describedby': ariaDescribedby,
    autoComplete,
    autoFocus,
    className,
    defaultValue,
    disabled,
    error,
    fullWidth = false,
    id,
    inputComponent = 'input',
    variant = 'default',
    size,
    inputProps: inputPropsProp = {},
    inputRef: inputRefProp,
    multiline = false,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    readOnly,
    rows,
    rowsMax,
    rowsMin,
    required,
    type = 'text',
    value: valueProp,
    ...other
  } = props;

  const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
  const { current: isControlled } = React.useRef(value != null);

  const inputRef = React.useRef<HTMLInputElement | HTMLTextAreaElement>();

  const [focused, setFocused] = React.useState(false);

  const formControl = useFormControl();

  const fcs = formControlState({
    props,
    formControl,
    states: ['disabled', 'error', 'required', 'variant', 'size'],
  });

  fcs.focused = formControl ? formControl.focused : focused;
  console.log('Input -> fcs', fcs);

  // The blur won't fire when the disabled state is set on a focused input.
  // We need to book keep the focused state manually.
  React.useEffect(() => {
    if (!formControl && disabled && focused) {
      setFocused(false);
      if (onBlur) {
        onBlur();
      }
    }
  }, [formControl, disabled, focused, onBlur]);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Fix a bug with IE 11 where the focus/blur events are triggered
    // while the input is disabled.
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }

    if (onFocus) {
      onFocus(event);
    }
    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }

    if (formControl && formControl.onFocus) {
      formControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onBlur) {
      onBlur(event);
    }
    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }

    if (formControl && formControl.onBlur) {
      formControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!isControlled) {
      const element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(
          'SU-UI: Expected valid input target. ' +
            'Did you use a custom `inputComponent` and forget to forward refs? ' +
            'See https://material-ui.com/r/input-component-ref-interface for more info.'
        );
      }
    }

    if (inputPropsProp.onChange) {
      inputPropsProp.onChange(event);
    }

    if (onChange) {
      onChange(event);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }

    if (onClick) {
      onClick(event);
    }
  };

  let InputComponent = inputComponent;
  let inputProps: InputBaseComponentProps = {
    ...inputPropsProp,
    ref: inputRef,
  };

  if (typeof InputComponent !== 'string') {
    inputProps = {
      // Rename ref to inputRef as we don't know the
      // provided `inputComponent` structure.
      inputRef,
      type,
      ...inputProps,
      ref: null,
    };
  } else if (multiline) {
    InputComponent = 'textarea';
    inputProps = {
      rows,
      rowsMax,
      ...inputProps,
    };
  } else {
    inputProps = {
      type,
      ...inputProps,
    };
  }

  return (
    <div
      onClick={handleClick}
      className={clsx(
        {
          small: fcs.size === 'small',
          large: fcs.size === 'large',
          outlined: fcs.variant === 'outlined',
          focused: fcs.focused,
          disabled: fcs.disabled,
          error: fcs.error,
          fullWidth,
          multiline,
        },
        className
      )}
      {...other}
    >
      <FormControlContext.Provider value={undefined}>
        <InputComponent
          aria-invalid={fcs.error}
          aria-describedby={ariaDescribedby}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          defaultValue={defaultValue}
          disabled={fcs.disabled}
          id={id}
          name={name}
          placeholder={placeholder}
          readOnly={readOnly}
          required={fcs.required}
          rows={rows}
          value={value}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleChange}
          className={clsx(
            'InputBase',
            {
              disabled: fcs.disabled,
              inputTypeSearch: type === 'search',
              inputMultiline: multiline,
            },
            inputPropsProp.className
          )}
          {...inputProps}
        />
      </FormControlContext.Provider>
    </div>
  );
}

export default styled(Input)`
  color: ${({ theme }) => theme.palette.text.primary};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px 16px;
  font-size: 0.875rem;
  line-height: 1.25rem;
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: text;
  &.small {
    padding: 6px 12px;
  }
  &.large {
    padding: 12px 20px;
    font-size: 1rem;
    line-height: 1.5rem;
  }
  &.outlined {
    border: 2px solid;
    border-color: ${({ theme }) => theme.palette.border.secondary};
    &.focused {
      border-color: ${({ theme }) => theme.palette.border.primary};
    }
    &.disabled {
      border-color: ${({ theme }) => theme.palette.border.disabled};
    }
  }
  &.disabled {
    color: ${({ theme }) => theme.palette.text.disabled};
    cursor: default;
  }
  &.multiline {
    padding: 6px 0;
  }
  &.fullWidth {
    width: 100%;
  }

  .InputBase {
    font: inherit;
    letter-spacing: inherit;
    color: currentColor;
    padding: 0;
    border: 0;
    box-sizing: content-box;
    background: none;
    margin: 0; /** Reset for Safari */
    display: block;
    min-width: 0;
    width: 100%; /** Fix IE 11 width issue */
    -webkit-tap-highlight-color: transparent;
    &::placeholder {
      color: currentColor;
      opacity: 0.5;
      transition: opacity 150ms;
    }
    &:focus {
      outline: none;
    }
    &.disabled {
      opacity: 1; /** Reset iOS opacity */
    }
    &.inputMultiline {
      height: auto;
      resize: none;
      padding: 0;
    }
    &.inputTypeSearch {
      appearance: textfield;
    }
  }
`;
