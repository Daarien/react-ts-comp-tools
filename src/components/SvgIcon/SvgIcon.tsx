import React from 'react';
import clsx from 'clsx';
import styled from '../styled-components';

export interface SvgIconProps extends React.SVGAttributes<SVGElement> {
  children: React.ReactElement<{ fill: string }, 'path'>[];
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   */
  fontSize?: 'inherit' | 'default' | 'small' | 'large';
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  variant?: 'primary' | 'secondary' | 'action' | 'disabled' | 'error';
  /**
   * Applies a color attribute to the SVG element.
   */
  color?: string;
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess?: string;
}

function getFillColor(variant?: 'primary' | 'secondary' | 'action' | 'disabled' | 'error') {
  return variant === 'primary'
    ? '#00a523'
    : variant === 'secondary'
    ? 'gray'
    : variant === 'disabled'
    ? 'lightgray'
    : variant === 'error'
    ? 'red'
    : undefined;
}

function SvgIcon(props: SvgIconProps) {
  const {
    children,
    className,
    color,
    variant,
    fontSize = 'default',
    titleAccess,
    viewBox = '0 0 24 24',
    ...other
  } = props;

  return (
    <svg
      className={clsx(
        {
          [`color-${color}`]: color !== 'inherit',
          [`fontSize-${fontSize}`]: fontSize !== 'default',
        },
        className
      )}
      focusable="false"
      viewBox={viewBox}
      color={color}
      aria-hidden={titleAccess ? undefined : true}
      role={titleAccess ? 'img' : undefined}
      {...other}
    >
      {!!variant
        ? React.Children.map(children, (path) => {
            return React.cloneElement(path, { fill: getFillColor(variant) });
          })
        : children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </svg>
  );
}

export default styled(SvgIcon)`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  font-size: 1.5rem;
  transition: fill 150ms;
  &.color-primary {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  &.color-secondary {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
  &.color-disabled {
    color: ${({ theme }) => theme.palette.action.disabled};
  }
  &.color-error {
    color: ${({ theme }) => theme.palette.error.main};
  }
  &.fontSize-inherit {
    font-size: inherit;
  }
  &.fontSize-small {
    font-size: 1.25rem;
  }
  &.fontSize-large {
    font-size: 2rem;
  }
`;
