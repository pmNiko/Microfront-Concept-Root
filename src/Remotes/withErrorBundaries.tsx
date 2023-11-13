import { ErrorBoundary } from "react-error-boundary";
import ResourceNotAvailable from "../ResourceNotAvailable";
import { ComponentType, LazyExoticComponent } from "react";
// import { ComponentType, LazyExoticComponent } from "react";
//   Component: LazyExoticComponent<ComponentType<any>>

const withErrorBoundary = (
  Component: LazyExoticComponent<ComponentType<any>>
) => {
  return (
    <ErrorBoundary fallback={<ResourceNotAvailable />}>
      <Component />
    </ErrorBoundary>
  );
};

export default withErrorBoundary;
