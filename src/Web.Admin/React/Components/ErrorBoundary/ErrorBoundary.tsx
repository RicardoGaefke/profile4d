import React, { Component } from 'react';
import Error from './Error';

interface IErrorBoundaryProps {
  children?: JSX.Element
}

interface IErrorBoundaryState {
  hasError: boolean,
}

export default class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState, any> {
  constructor(props: IErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): any {
    return { hasError: true };
  }

  clearError = (): void => {
    this.setState({
      hasError: false,
    });
  };

  componentDidCatch = (error: any, info: any): void => {
    // eslint-disable-next-line no-console
    console.log(error, info);
  };

  render(): any {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) return <Error clearError={this.clearError} />;
    return children;
  }
}
