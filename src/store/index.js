// import { createDispatchHook } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { loginReducer } from "./login";

const store = createStore(loginReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store;