import { combineReducers } from "redux";
import { loginReducer } from "./login";
import { usersReducer } from "./users";

// RootReducer combina ambos reducers
const rootReducer = combineReducers({
    // state.login.data
    login: loginReducer,
    // Para acceder a ñps datos del usuario --> state.users.data
    users: usersReducer
})

export default rootReducer;