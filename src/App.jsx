import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./features/body/Body";
import Header from "./features/header/Header";
import Video from "./features/videos/Video";
import WatchPage from "./features/watch/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Video />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="">
      <Header />
      <RouterProvider router={appRouter} />{" "}
    </div>
  );
}

export default App;
