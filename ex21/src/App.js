
import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

import UserList from "./UserList";
import UserDetail from "./UserDetail";
import DishList from "./DishList";
import DishDetail from "./DishDetail";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <nav className="navbar">
          <div className="logo">Exercise 21</div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/dishes">Dishes</Link>
          </div>
        </nav>

        <Routes>
          <Route
            path="/"
            element={<Navigate to="/dishes" replace />}
          />

          <Route
            path="/users"
            element={<UserList />}
          />

          <Route
            path="/users/:id"
            element={<UserDetail />}
          />

          <Route
            path="/dishes"
            element={<DishList />}
          />

          <Route
            path="/dishes/:id"
            element={<DishDetail />}
          />

          <Route
            path="*"
            element={<h2>404 - Page not found</h2>}
          />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
