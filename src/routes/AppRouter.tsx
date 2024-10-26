import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { lazy, Suspense } from "react";
import Error from "@pages/Error";
import PageSuspenseFallback from "@components/feedback/PageSuspenseFallback/PageSuspenseFallback";
import ProtectedRoute from "@components/auth/ProtectedRoute";
import ProfileLayout from "@layouts/ProfileLayout/ProfileLayout";

const MainLayout = lazy(() => import("@layouts/MainLayout/MainLayout"));
const Home = lazy(() => import("@pages/Home"));
const About = lazy(() => import("@pages/About"));
const Products = lazy(() => import("@pages/Products"));
const Account = lazy(() => import("@pages/Account"));
const Contact = lazy(() => import("@pages/Contact"));
const Blogs = lazy(() => import("@pages/Blogs"));
const Cart = lazy(() => import("@pages/Cart"));
const Wishlist = lazy(() => import("@pages/Wishlist"));
const Login = lazy(() => import("@pages/Login"));
const Register = lazy(() => import("@pages/Register"));
const Orders = lazy(() => import("@pages/Orders"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback="Loading... Please wait.">
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <PageSuspenseFallback>
            <Home />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "/about",
        element: (
          <PageSuspenseFallback>
            <About />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "/contact",
        element: (
          <PageSuspenseFallback>
            <Contact />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "/blogs",
        element: (
          <PageSuspenseFallback>
            <Blogs />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "/products/:categoryPrefix",
        element: (
          <PageSuspenseFallback>
            <Products />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "/cart",
        element: (
          <PageSuspenseFallback>
            <Cart />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <ProtectedRoute>
            <PageSuspenseFallback>
              <Wishlist />
            </PageSuspenseFallback>
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <PageSuspenseFallback>
            <Login />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "/register",
        element: (
          <PageSuspenseFallback>
            <Register />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <PageSuspenseFallback>
              <ProfileLayout />
            </PageSuspenseFallback>
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: (
              <PageSuspenseFallback>
                <Account />
              </PageSuspenseFallback>
            ),
          },
          {
            path: "orders",
            element: (
              <PageSuspenseFallback>
                <Orders />
              </PageSuspenseFallback>
            ),
          },
        ],
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
