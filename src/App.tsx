import { lazy, Suspense, ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import Layout from "./layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoadingSpinner from "./components/loading/LoadingSpinner";
import OpenBanner from "./components/OpenBanner/OpenBanner";

// Lazy load pages
const Homepage = lazy(() => import("./pages/home/Homepage"));
const Aboutpage = lazy(() => import("./pages/about/Aboutpage"));
const JourneyPage = lazy(() => import("./pages/journey/JourneyPage"));
const Projectpage = lazy(() => import("./pages/project/Projectpage"));
const Contactpage = lazy(() => import("./pages/contact/Contactpage"));
const Blogpage = lazy(() => import("./pages/blog/Blogpage"));
const WebProjects = lazy(() => import("./components/projects/WebProjects"));
const AIProjects = lazy(() => import("./components/projects/AIProjects"));
const CollegeProjects = lazy(
  () => import("./components/projects/CollegeProject")
);
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
        path: "about_me",
        element: <OpenBanner>{withSuspense(Aboutpage)}</OpenBanner>, // About page
      },
      {
        path: "journey",
        element: <OpenBanner>{withSuspense(JourneyPage)}</OpenBanner>, // Journey page
      },
      {
        path: "works",
        element: <OpenBanner>{withSuspense(Projectpage)}</OpenBanner>, // Project page
        children: [
          {
            path: "web",
            element: withSuspense(WebProjects), // Web projects
          },
          {
            path: "ai_ml",
            element: withSuspense(AIProjects), // AI/ML projects
          },
          {
            path: "college",
            element: withSuspense(CollegeProjects), // College projects
          },
        ],
      },
      {
        path: "blogs",
        element: <OpenBanner>{withSuspense(Blogpage)}</OpenBanner>, // Blog page
      },
      {
        path: "contact",
        element: <OpenBanner>{withSuspense(Contactpage)}</OpenBanner>, // Contact page
      },
      {
        path: "works/:projectType/:projectName",
        element: <OpenBanner>{withSuspense(SingleProjectPage)}</OpenBanner>, // Single project page
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
    <ThemeProvider theme={darkTheme}>
      <Suspense fallback={<LoadingSpinner />}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
