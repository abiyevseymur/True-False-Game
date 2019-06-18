import { OPEN_QUESTION_PAGE, GAME_WITH_TIME, GET_QUESTION, INCREASE_SCORE, STOP_SCORE, FILL_BUTTON } from "../actions/constants";

const initialState = {
    open: null,
    time: null,
    question: null,
    score: 0,
    answer:null
}
export const questionPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_QUESTION_PAGE:
            return {
                ...state,
                open: action.open,
            }
        case GAME_WITH_TIME:
            return {
                ...state,
                time: action.time,
            }
        case GET_QUESTION:
            return {
                ...state,
                question: action.payload
            }
        case INCREASE_SCORE:
            return {
                ...state,
                score: ++initialState.score
            }
        case STOP_SCORE:
            return {
                ...state,
                score: initialState.score = 0
            }
        case FILL_BUTTON:
            return{
                ...state,
                answer:action.answer,
            }
        default:
            return state;
    }
}