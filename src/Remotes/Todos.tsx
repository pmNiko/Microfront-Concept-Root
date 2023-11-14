import { lazy } from "react";
import withErrorBoundary from "./withErrorBundaries";

const ParcelTest = lazy(() => import("mfConceptRemoteAppTest/ParcelTest"));

const Test = () => withErrorBoundary(ParcelTest);

export default Test;
