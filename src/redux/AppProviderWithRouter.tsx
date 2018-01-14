import * as React from "react";

import { Provider } from "react-redux";

// add push function is for dispatcher 
// import { routerReducer, routerMiddleware, push } from 'react-router-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createHistory from "history/createBrowserHistory";

import reducers from "./index"; // Or wherever you keep your reducers

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

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

export const AppProviderWithRouter = (props: { children?: React.ReactNode }) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {props.children}
        </ConnectedRouter>
    </Provider>
);

export default AppProviderWithRouter;