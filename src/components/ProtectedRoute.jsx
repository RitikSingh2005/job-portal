import { useUser, RedirectToSignIn } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const location = useLocation();

  if (!isLoaded) return <div>Loading...</div>;

  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  if (
    !user?.unsafeMetadata?.role &&
    location.pathname !== "/onboarding"
  ) {
    return <Navigate to="/onboarding" replace />;
  }

  return children;
};

export default ProtectedRoute;
