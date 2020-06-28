import React from 'react';
import styled from '../styled-components';
import BaseButton, { ButtonBaseProps } from '../ButtonBase';
import clsx from 'clsx';

export interface IconButtonProps extends ButtonBaseProps {}

function IconButton(props: IconButtonProps) {
  const { children, className, disabled, ...other } = props;
  return (
    <BaseButton className={clsx({ disabled }, className)} disabled={disabled} {...other}>
      <span className="IconButton-label">{children}</span>
    </BaseButton>
  );
}

export default styled(IconButton)`
  flex: 0 0 auto;
  /* padding: 12px; */
  border-radius: 50%;
  overflow: visible;
  color: ${({ theme }) => theme.palette.action.active};
  &.disabled {
    background-color: transparent;
    color: ${({ theme }) => theme.palette.action.disabled};
  }
  .IconButton-label {
    width: 100%;
    display: inline-flex;
    align-items: inherit;
    justify-content: inherit;
    position: relative;
  }
`;
