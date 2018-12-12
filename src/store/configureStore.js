import thunk from 'redux-thunk';
import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import authReducer from "../reducers/auth";

const composeEnhancers = window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};