import * as React from "react";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";

import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";

// add push function is for dispatcher 
// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import { Link } from "react-router-dom";

import reducers from "./reducers"; // Or wherever you keep your reducers
import Slider from "rc-slider";
import { Order } from "./Order/Order";

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

declare global {
  // tslint:disable:interface-name
  // tslint:disable-next-line:no-any
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  composeEnhancers(
    applyMiddleware(middleware),
  )
);

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

require("./style/style");

const Home = (props: {}) => {
  return (
    <div>
      <p>Home is awesome!</p>
      <Link to="/about">About</Link>
      <Link to="/order">Order</Link>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <div>
            <Link to="/order">Order Something</Link>
          </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/order" component={Order} />
          <Route path="/about" render={() => <div>I am about this website</div>} />
          <Route path="/topics" children={() => <div>I am always there for you!</div>} />
          <Slider  />

        </div>
      </ConnectedRouter >
    </Provider>);
};

export default App;