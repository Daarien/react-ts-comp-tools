import { Component, HTMLAttributes, ReactNode } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Paper from './Paper';
// import { Theme } from '../../store/theme/themeSettings';
import styled from 'styled-components';
import { rgb, rgba } from 'polished';

const Wrapper = styled('div')`
  width: 1120px;
  margin: 0 auto;
`;
const Header = styled('header')`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
const Title = styled('h5')`
  margin: 0;
  padding: 6px 250px 6px 20px;
  flex-grow: 1;
  display: inline-flex;
  align-items: center;
  color: #fff;
  background: ${({ theme: { mainColorRGB } }) =>
    `linear-gradient(to right, ${rgb(mainColorRGB)}, ${rgba({
      ...mainColorRGB,
      alpha: 0.7,
    })}, #fff)`};
  border-radius: 3px;
`;
const Body = styled('div')`
  margin: auto;
  /* width: 800px; */
  width: ${({ width }: any) => (width ? `${width}px` : '')};
`;

interface IContent {
  children: ReactNode;
}
interface IBody extends HTMLAttributes<HTMLDivElement> {
  width?: number;
}

export default class Content extends Component<IContent> {
  static Header = (props: IContent) => <Header {...props} />;

  static Title = (props: IContent) => <Title {...props} />;

  static Body = (props: IBody) => <Body {...props} />;

  render() {
    const { children, ...other } = this.props;
    return (
      <Wrapper {...other}>
        <Paper>
          <ErrorBoundary>{children}</ErrorBoundary>
        </Paper>
      </Wrapper>
    );
  }
}
