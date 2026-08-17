import React from "react";
import Header from "./Header";
import Login from "./Login";
import Browse from "./Browse";
import{createBrowserRouter, RouterProvider} from "react-router-dom";

const Body = () => {
    const appRouter = createBrowserRouter([
  {
    path: "/header",
    element: <Header />
  },
    {
    path: "/",
    element: <Login />
  },
    {
    path: "/browse",
    element: <Browse />
  }
])
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
