import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from "./App";


const Index = () => <h2>Home</h2>;
const Page = () => (
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/todo" component={App} />
    {/* <Route path="/users" component={Users} /> */}
    <Route path="/:user" component={Users} />
    <Route component={NoMatch} />
  </Switch>
);

function Users({ match }) {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${match.url}/ToDo`}>ToDo</Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
  
        <Route path={`${match.path}/:user`} component={User} />
        <Route
          exact
          path={match.path}
          render={() => <h3>{match.params.user} Please select a topic.</h3>}
        />
      </div>
    );
}
  
function User({ match }) {
  return (
    <div>
      <h3>{match.params.user}</h3>
    </div>
  );
}

function NoMatch({ location }) {
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
export default Page;
