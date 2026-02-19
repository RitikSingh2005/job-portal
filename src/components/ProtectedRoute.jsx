import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, user, isLoaded } = useUser();
  const location = useLocation();

  // 🔹 Wait for Clerk to load completely
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // 🔹 If not signed in → go to landing page
  if (!isSignedIn) {
    return <Navigate to="/?sign-in=true" replace />;
  }

  // 🔹 If signed in but no role → force onboarding
  if (
    isSignedIn &&
    !user?.unsafeMetadata?.role &&
    location.pathname !== "/onboarding"
  ) {
    return <Navigate to="/onboarding" replace />;
  }

  return children;
};

export default ProtectedRoute;
