import React from "react";
import "./ErrorBoundry.css";
import ErrorPage from "./ErrorPage";

interface ErrorBoundaryProps {
  children: React.ReactNode[];
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  info: object;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: new Error(),
      info: { componentStack: "" },
    };
  }
  //from class component
  static getDerivedStateFromError = (error: Error) => {
    return { hasError: true };
  };
  //from class component
  componentDidCatch(error: Error | null, info: object) {
    console.log("error", error);
    this.setState({ hasError: true, error, info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <ErrorPage errMessage={"Something has gone wrong"} />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
