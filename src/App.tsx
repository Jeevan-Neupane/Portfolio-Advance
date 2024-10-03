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
        },
        {
          path: "/blogs",
          element: <Blogpage />,
        },
        {
          path: "/contact",
          element: <Contactpage />,
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
