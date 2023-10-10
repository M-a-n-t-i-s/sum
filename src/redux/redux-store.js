import {applyMiddleware, combineReducers, compose} from "redux";
import thunkMiddleware  from "redux-thunk";
import authReducer from "./reducers/authReducer";


const {createStore} = require("redux");

let reducers = combineReducers({
    authPage: authReducer
})

const store = createStore(reducers,compose(applyMiddleware(thunkMiddleware)))
export default store