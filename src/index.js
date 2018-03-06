import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import customHistory from "./history";
import {loginSuccess} from "./actions/auth";
import setAuthorizationHeader from "./utils/setAuthorizationHeader";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

if(localStorage.rhinoJWT){
    const user = JSON.parse(localStorage.getItem("rhinoJWT"));
    setAuthorizationHeader(user.access_token);
    store.dispatch(loginSuccess(user));
}

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Router history={customHistory}>
        <Provider store={store}>
            <Route component={App}/>
        </Provider>
    </Router>, document.getElementById('root'));
registerServiceWorker();
