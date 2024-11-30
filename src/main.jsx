import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./components/Home";
import LogIn from "./pages/LogIn";
import SignIn from "./pages/SignIn";
import AuthContext from "./Context/AuthContext";
import Abount from "./pages/Abount";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"login",
        element:<LogIn></LogIn>
      },
      {
        path:'signin',
        element:<SignIn></SignIn>
      },
      {
        path:"login",
        element:<LogIn></LogIn>
      },
      {
        path:"about",
        element:<Abount></Abount>
      }
      , {
        path:"contact",
        element:<Contact></Contact>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
   <AuthContext>
   <RouterProvider router={router} />
   </AuthContext>
  </StrictMode>
);
