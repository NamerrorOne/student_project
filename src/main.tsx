import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { UserContextProvider } from "./context/user-context.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layouts/Layout/Layout";
import { Search } from "./pages/Search/Search.js";
import { Login } from "./pages/Login/Login";
import { Movie } from "./pages/Movie/Movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Search />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
      {
        path: "/favorites",
        element: (
          <div
            style={{
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            FAVORITES
          </div>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <div
        style={{
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        WRONG ROUTE <br />
        ERROR PAGE
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>,
);
