import { lazy } from "react";
import withErrorBoundary from "./withErrorBundaries";

const TestRemote = lazy(() => import("mfConceptRemoteAppTest/Todos"));

const Test = () => withErrorBoundary(TestRemote);

export default Test;
