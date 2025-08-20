import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { UserContextProvider } from "./context/user-context.jsx";
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
        path: "/",
        element: <Search />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/movie/:id",
        element: (
          <Movie
            feedbackTitle="Not as good as infinity war.."
            feedbackDate="2019-04-12"
            feedbackText="But its a pretty good film. A bit of a mess in some parts, lacking the cohesive and effortless feel infinity war somehow managed to accomplish. Some silly plot holes and characters that could've been cut (Ahem, captain marvel and thanos). The use of Captain marvel in this film was just ridiculous. Shes there at the start, bails for some reason? And then pops up at the end to serve no purpose but deux ex machina a space ship..."
            title="Avengers: Endgame"
            description="After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store."
            rating={8.3}
            image={"/shangChiFilm.png"}
            inFavor={false}
            dateCreate="2019-04-24"
            type="Movie"
            duration={181}
            janre={["Adventure", "Science Fiction", "Action"]}
          />
        ),
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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </UserContextProvider>
  </StrictMode>,
);
