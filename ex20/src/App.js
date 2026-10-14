
import React from "react";

import {
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

import { renderRoutes } from "./routes";
import NavigationMenu from "./NavigationMenu";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Exercise 20: Decoupling Route</h1>

        <NavigationMenu />

        <div className="content">
          <Routes>
            {renderRoutes()}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
