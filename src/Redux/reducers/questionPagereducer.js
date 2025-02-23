import { OPEN_QUESTION_PAGE, GAME_WITH_TIME, GET_QUESTION, INCREASE_SCORE, STOP_SCORE, 
    FILL_BUTTON, SWIPE_ON_TOUCH, SWIPE_STARTED, GET_ALL_ID } from "../actions/constants";

const initialState = {
    open: null,
    time: null,
    question: null,
    score: 0,
    answer: null,
    pixel: 0,
    swiped: false,
    desc: null,
    IDs: 0,
    removeId:null,
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
                question: action.payload,
                IDs: (state.IDs)?state.IDs.filter(array=>array !== action.remove):state.IDs
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
            return {
                ...state,
                answer: action.answer,
                desc: action.desc
            }
        case SWIPE_ON_TOUCH:
            return {
                ...state,
                pixel: action.pixel
            }
        case SWIPE_STARTED:
            return {
                ...state,
                swiped: true
            }
        case GET_ALL_ID:
            return {
                ...state,
                IDs: action.payload
            }
        default:
            return state;
    }
}