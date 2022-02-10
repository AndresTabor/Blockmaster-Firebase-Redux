import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { loginReducer, registroReducer } from "../reducers/userReducer";
import thunk from "redux-thunk";


const reducers = combineReducers({
    login: loginReducer,
    registro: registroReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)        
    )

)