import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Error from "./components/pages/Error";
import RestrauntMenu from "./components/RestrauntMenu";
// import Grocery from "./components/Grocery";
const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
};

const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading.......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestrauntMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const Title = () => <h1 className="title">Namaste title</h1>;
const HeadingCompo = () => (
  <h1 className="head">
    <Title />
    Namaste
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
