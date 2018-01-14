import * as React from "react";

import AppProviderWithRouter from "./redux/AppProviderWithRouter";

import { Route, Redirect } from "react-router";
import { Link } from "react-router-dom";
import { Order } from "./Order/Order";

require("./style/style");

const App = () => {
  return (
    <AppProviderWithRouter>
      <div>
        <div>
          <Link to="/order">Order Something</Link>
        </div>
        <Route
          exact
          path="/"
          render={
            () => {
              return <Redirect
                to={{
                  pathname: "/order"
                }}
              />;
            }}
        />
        <Route exact path="/order" component={Order} />
        <Route path="/about" render={() => <div>I am about this website</div>} />
        <Route path="/topics" children={() => <div>I am always there for you!</div>} />
      </div>
    </AppProviderWithRouter>);
};

export default App;