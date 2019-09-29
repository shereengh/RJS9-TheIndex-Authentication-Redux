import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { checkForExpiredToken } from "./actions/authentication";
import reducer from "./reducers";

// Actions
import { fetchAuthors, fetchBooks } from "./actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
store.dispatch(checkForExpiredToken());
store.dispatch(fetchAuthors());
store.dispatch(fetchBooks());

export default store;
