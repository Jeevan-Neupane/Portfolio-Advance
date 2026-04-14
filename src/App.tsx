import { lazy, Suspense, ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import Layout from "./layout/Layout";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import LoadingSpinner from "./components/loading/LoadingSpinner";
import OpenBanner from "./components/OpenBanner/OpenBanner";

// Lazy load pages
const Homepage = lazy(() => import("./pages/home/Homepage"));
const SingleProjectPage = lazy(
  () => import("./pages/singleProjectPage/SingleProjectPage")
);

// Higher-order function for wrapping lazy-loaded components in Suspense
const withSuspense = (Component: React.FC): ReactElement => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Component />
    </Suspense>
  );
};

// Define route types
interface Route {
  path: string;
  element: ReactElement;
  children?: Route[];
}

// Routes configuration
export const routes: Route[] = [
  {
    path: "/",
    element: <Layout />, // Root layout wrapper
    children: [
      {
        path: "/",
        element: <OpenBanner>{withSuspense(Homepage)}</OpenBanner>, // Homepage
      },
      {
        path: "works/:projectType/:projectName",
        element: <OpenBanner>{withSuspense(SingleProjectPage)}</OpenBanner>,
      },
      {
        path: "*",
        element: <Navigate to='/' replace />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, {
  future: {
    v7_partialHydration: true,
  },
});

// App component with theming and global styles
function App(): ReactElement {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<LoadingSpinner />}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
