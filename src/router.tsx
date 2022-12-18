import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "@app/shared/components/Layout";

const Home = lazy(() => import("@app/pages/home"));
const Todo = lazy(() => import("@app/pages/todo/todo"));
const About = lazy(() => import("@app/pages/about/about"));
const Contatct = lazy(() => import("@app/pages/contact/contact"));
const NotFound = lazy(() => import("@app/pages/404"));

export default createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "todo", element: <Todo /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contatct /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
