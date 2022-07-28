﻿import { Component, ReactNode } from 'react';
import Flex from './Flex';

export default class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: any, info: any) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    console.error(error, info);
  }

  render() {
    return (
      <div>
        {this.state.hasError ? (
          // You can render any custom fallback UI
          <Flex justify="center">
            <h4>Всё будет хорошо! Детальная информация в консоли.</h4>
          </Flex>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}
