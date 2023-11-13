import { lazy } from "react";
import withErrorBoundary from "./withErrorBundaries";

const CustomButton = lazy(() => import("mfConceptRemoteAppTest/CustomButton"));

const Button = () => withErrorBoundary(CustomButton);

export default Button;
