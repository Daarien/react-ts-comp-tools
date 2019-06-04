import { ComponentProps } from 'react';
import styled from 'styled-components';

type Justify = 'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between';
type Align = 'flex-start' | 'center' | 'flex-end' | 'stretch';

type TFlexBox = ComponentProps<'div'> & {
  justify?: Justify;
  alignItems?: Align;
  direction?: 'row' | 'column';
  wrap?: boolean;
  spacing?: string | number;
};

export default styled.div<TFlexBox>`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : '')};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : '')};
  flex-wrap: ${({ wrap }) => wrap && 'wrap'};
  > * {
    margin: ${({ spacing }) => spacing && `0 ${spacing}px`};
  }
`;
