import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPages";
import Blogs from "../pages/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
]);
