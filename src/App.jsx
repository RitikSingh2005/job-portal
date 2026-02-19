import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { ThemeProvider } from "@/components/theme-provider"

import { Button } from "./components/ui/button";
import AppLayout from "./layouts/AppLayout";
import LandingPage from "./pages/LandingPage";
import OnBoarding from "./pages/OnBoarding";
import JobListing from "./pages/JobListing";
import JobPage from "./pages/JobPage";
import PostJob from "./pages/PostJob";
import SavedJob from "./pages/SavedJob";
import MyJobs from "./pages/MyJobs";
import ProtectedRoute from "./components/ProtectedRoute";



const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element:(
         <ProtectedRoute>
           <OnBoarding />
         </ProtectedRoute>
        ),
      },
      {
        path: "/jobs",
         element:(
         <ProtectedRoute>
           <JobListing />
         </ProtectedRoute>
        ),
      },
      {
        path: "/post-job",
         element:(
         <ProtectedRoute>
           <PostJob />
         </ProtectedRoute>
        ),
      },
        {
        path: "/my-jobs",
        element:(
         <ProtectedRoute>
            <MyJobs />
         </ProtectedRoute>
        ),
      },    
      {
        path: "/saved-jobs",
        element:(
         <ProtectedRoute>
           <SavedJob />
         </ProtectedRoute>
        ),
      },
       {
        path: "/job/:id",
        element:(
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
          ) ,       
      },    
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
