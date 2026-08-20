import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layouts/MainLayout";
import About from './pages/About'
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element:<About/>,
      },
      {
        path:'/portfolio',
        element:<Portfolio/>
      },
      {
        path:'/resume',
        element:<Resume/>
      },
      {
        path:'/skills',
        element:<Skills/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/services',
        element:<Services/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
