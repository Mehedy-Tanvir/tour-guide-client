import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Register from "../Pages/Register/Register";
import MyServices from "../Pages/MyServices/MyServices";
import AddServices from "../Pages/AddServices/AddServices";
import MySchedules from "../Pages/MySchedules/MySchedules";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import EditMyServices from "../Pages/EditMyServices/EditMyServices";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "services",
        element: <Services></Services>,
        loader: () => fetch("http://localhost:3000/services"),
      },
      {
        path: "myServices",
        element: <MyServices></MyServices>,
      },
      {
        path: "addServices",
        element: <AddServices></AddServices>,
      },
      {
        path: "mySchedules",
        element: <MySchedules></MySchedules>,
      },
      {
        path: "editMyService/:id",
        element: <EditMyServices></EditMyServices>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/myService/${params.id}`),
      },
    ],
  },
]);

export default Routes;
