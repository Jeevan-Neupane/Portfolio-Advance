import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/Theme";
import Layout from "./layout/Layout";
import Aboutpage from "./pages/about/Aboutpage";
import Projectpage from "./pages/project/Projectpage";
import Contactpage from "./pages/contact/Contactpage";
import Blogpage from "./pages/blog/Blogpage";
import WebProjects from "./components/projects/WebProjects";
import AIProjects from "./components/projects/AIProjects";
import CollegeProjects from "./components/projects/CollegeProject";
import SingleProjectPage from "./pages/singleProjectPage/SingleProjectPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/about_me",
          element: <Aboutpage />,
        },
        {
          path: "/works",
          element: <Projectpage />,
          children: [
            {
              path: "/works/web",
              element: <WebProjects />,
            },
            {
              path: "/works/ai_ml",
              element: <AIProjects />,
            },
            {
              path: "/works/college",
              element: <CollegeProjects />,
            },
          ],
        },
        {
          path: "/blogs",
          element: <Blogpage />,
        },
        {
          path: "/contact",
          element: <Contactpage />,
        },
        {
          path: "/works/:projectType/:projectName",
          element: <SingleProjectPage />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
