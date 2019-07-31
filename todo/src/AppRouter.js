import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Page from "./Route.js";
import NavBar from "./Navbar.js";

const AppRouter = () => (
  <Router>
    <div>
      <NavBar />
      <Page />
    </div>
  </Router>
);

export default AppRouter;
