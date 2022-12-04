import { useState, useRef, HTMLAttributes } from "react";
import styled from "styled-components/macro";
import clsx from "clsx";

export interface InputBaseComponentProps
  extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  // Accommodate arbitrary additional props coming from the `inputProps` prop
  [arbitrary: string]: any;
}

export interface InputProps
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "children" | "onChange" | "onKeyUp" | "onKeyDown" | "onBlur" | "onFocus"
  > {
  "aria-describedby"?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue?: string | number | readonly string[];
  disabled?: boolean;
  error?: boolean;
  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth?: boolean;
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
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps?: InputBaseComponentProps;
  /**
   * Pass a ref to the `input` element.
   */
  inputRef?: React.Ref<any>;
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin?: "dense" | "none";
  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline?: boolean;
  /**
   * Name attribute of the `input` element.
   */
  name?: string;
  /**
   * Callback fired when the input is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onKeyUp?: React.KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
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
}

function Input(props: InputProps) {
  const {
    "aria-describedby": ariaDescribedby,
    autoComplete,
    autoFocus,
    className,
    defaultValue,
    disabled,
    error,
    fullWidth = false,
    id,
    inputComponent = "input",
    inputProps: inputPropsProp = {},
    inputRef: inputRefProp,
    margin,
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
    type = "text",
    value,
    ...other
  } = props;

  const [focused, setFocused] = useState(false);

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>();

  const { current: isControlled } = useRef(value != null);

  const handleFocus = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Fix a bug with IE 11 where the focus/blur events are triggered
    // while the input is disabled.
    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onFocus) {
      onFocus(event);
    }
    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }

    setFocused(true);
  };

  const handleBlur = (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (onBlur) {
      onBlur(event);
    }
    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }

    setFocused(false);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (!isControlled) {
      const element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(
          "SberUser-UI: Expected valid input target. " +
            "Did you use a custom `inputComponent` and forget to forward refs? "
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
  if (multiline) {
    InputComponent = "textarea";
  } else {
    inputProps = {
      type,
      ...inputProps,
    };
  }

  return (
    <div
      onClick={handleClick}
      {...other}
      className={clsx(className, { focused, disabled, fullWidth, error })}
    >
      <InputComponent
        className={clsx("InputBase", inputPropsProp.className)}
        value={value}
        aria-describedby={ariaDescribedby}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        defaultValue={defaultValue}
        disabled={disabled}
        id={id}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        required={required}
        rows={rows}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        {...inputProps}
      />
    </div>
  );
}

export default styled(Input)`
  color: ${({ theme }) => theme.palette.text.primary};
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 10px 20px;
  line-height: 1.1876em;
  box-sizing: border-box;
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: text;

  &.disabled {
    color: ${({ theme }) => theme.palette.text.disabled};
    cursor: default;
  }
  &.fullWidth {
    width: 100%;
  }

  .InputBase {
    font: inherit;
    border: 0;
    box-sizing: border-box;
    background: none;
    margin: 0;
    display: block;
    min-width: 0;
    width: 100%;
    -webkit-tap-highlight-color: transparent;
    &::placeholder {
      color: currentColor;
      opacity: 0.5;
      transition: opacity 150ms;
    }
    &:focus {
      outline: none;
    }
  }
`;
