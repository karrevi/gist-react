import user from "./user";
import snnipets from "./snnipets";
import {
    combineReducers
} from "redux";

const rootReducer = combineReducers({
    user,
    snnipets
})

export default rootReducer;