
import React from "react";
import { Route, useParams } from "react-router-dom";

// Trang Home
const Home = () => <h1>Home Page</h1>;

// Trang Products
const Products = () => <h1>Products Page</h1>;

// Trang About
const About = () => <h1>About Page</h1>;

// Trang Contact
const Contact = () => <h1>Contact Page</h1>;

// Trang User Profile
const UserProfile = () => {
  const { userId } = useParams();

  return <h1>User Profile: {userId || "No User ID"}</h1>;
};

// Danh sách các đường dẫn
export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
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
    path: "/users",
    element: <UserProfile />,
  },
  {
    path: "/users/:userId",
    element: <UserProfile />,
  },
];

// Hàm tạo các Route tự động
export const renderRoutes = () => {
  return routes.map((route) => (
    <Route
      key={route.path}
      path={route.path}
      element={route.element}
    />
  ));
};
