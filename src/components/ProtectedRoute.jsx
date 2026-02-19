import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const location = useLocation();

  // 🔹 Wait until Clerk fully loads
  if (!isLoaded) {
    return null; // prevents flashing + loops
  }

  // 🔹 If not signed in → redirect to landing with modal
  if (!isSignedIn) {
    if (location.pathname !== "/") {
      return <Navigate to="/?sign-in=true" replace />;
    }
    return null;
  }

  // 🔹 If signed in but role missing → force onboarding
  if (
    isSignedIn &&
    user &&
    !user.unsafeMetadata?.role &&
    location.pathname !== "/onboarding"
  ) {
    return <Navigate to="/onboarding" replace />;
  }

  // 🔹 Otherwise allow access
  return children;
};

export default ProtectedRoute;
