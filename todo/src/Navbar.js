import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>/
      </li>
      <li>
        <Link to="/todo">ToDo</Link>/
      </li>
      <li>
        <Link to="/users">Users</Link>/
      </li>
      <li>
        <Link to="/kim">Kim (dynamic)</Link>/
      </li>
      <li>
        <Link to="/chris">Chris (dynamic)</Link>/
      </li>
    </ul>
    <hr />
  </nav>
);
export default NavBar;
