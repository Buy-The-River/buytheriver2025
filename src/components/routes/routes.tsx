import Home from "./Home";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
