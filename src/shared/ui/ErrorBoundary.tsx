import React from 'react';
import type { ReactNode } from 'react';
// Для поддержки PropTypes в TypeScript можно установить @types/prop-types
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './ErrorBoundary.module.css';
import { Button } from './Button';

interface ErrorBoundaryProps {
  children: ReactNode;
  location?: object;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Можно логировать ошибку на сервер
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    if (this.props.location !== prevProps.location && this.state.hasError) {
      this.setState({ hasError: false });
    }
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
};

function ErrorFallback() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Что-то пошло не так 😢</h1>
      <div className={styles.actions}>
        <Button secondary onClick={() => navigate(-1)}>
          Назад
        </Button>
        <Button onClick={() => navigate('/requests')}>
          На главную
        </Button>
      </div>
    </div>
  );
}

function ErrorBoundaryWithLocation(props: { children: ReactNode }) {
  const location = useLocation();
  return <ErrorBoundary {...props} location={location} />;
}

export default ErrorBoundaryWithLocation;
