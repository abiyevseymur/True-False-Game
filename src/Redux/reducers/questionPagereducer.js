import { OPEN_QUESTION_PAGE, GAME_WITH_TIME, GET_QUESTION, INCREASE_SCORE, STOP_SCORE } from "../actions/constants";

const initialState = {
    open:null,
    time:null,
    question:null,
    score:0,
}
export const questionPageReducer = (state=initialState,action)=>{
    switch (action.type) {
        case OPEN_QUESTION_PAGE:
            return {
                ...state,
                open:action.open,
            }
        case GAME_WITH_TIME:
            return{
                ...state,
                time:action.time,
            }
        case GET_QUESTION:
            return{
                ...state,
                question:action.payload
            }
        case INCREASE_SCORE:
            return{
                ...state,
                score:++initialState.score
            }
        case STOP_SCORE:
            return{
                ...state,
                score:0
            }
        default:
            return state;
    }
}