import * as React from 'react';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { Link, BrowserRouter } from 'react-router-dom';

import reducers from './reducers'; // Or wherever you keep your reducers

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

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


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" render={() => <About />} />
          <Route path="/topics" children={() => <div>I am always there for you!</div>} />
        </div>
      </BrowserRouter >
    </Provider>);
};


const Home = (props: {}) => {
  return (
    <div>
      <p>Home is awesome!</p>
      <Link to="/about">About</Link>
    </div>
  );
};

export default App;