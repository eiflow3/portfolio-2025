import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import MyCV from "../pages/my-cv";

export default function RouterProviderWrapper() {
  const router = createBrowserRouter([
    {
     path: "/",
        element: <Home />,
    },
    {
        path:"/my-cv",
        element: <MyCV />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
