import { combineReducers } from "redux";
import { questionPageReducer } from "./questionPagereducer";



export const rootReducer = combineReducers({
    questionPage:questionPageReducer,
})