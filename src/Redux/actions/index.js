import { OPEN_QUESTION_PAGE, GAME_WITH_TIME, GET_ANSWER, GET_QUESTION, INCREASE_SCORE, STOP_SCORE, FILL_BUTTON, SWIPE_ON_TOUCH, SWIPE_STARTED, GET_ALL_ID } from "./constants";
import { API } from './API'

export const questionPageOpen = (value) => ({ type: OPEN_QUESTION_PAGE, open: value })
export const gameWithTime = (time) => ({ type: GAME_WITH_TIME, time })
export const stopScore = () => ({ type: STOP_SCORE })
export const swipe = (pixel) => ({ type: SWIPE_ON_TOUCH, pixel })
export const startSwipe = () => ({ type: SWIPE_STARTED })

export const getQuestion = () => async (dispatch,getState) => {
    var items=getState().questionPage.IDs
    var randomId = items[Math.floor(Math.random()*items.length)];
    const response = await API.get(`/get-question/${randomId}`)
    await dispatch({
        type: GET_QUESTION,
        remove:randomId,
        payload: response.data
    })
    if(items.length<2){
        await dispatch(getAllQuestionsId())
    }
    await dispatch(questionPageOpen(true))
}
export const playAgain = () => async dispatch => {
    await dispatch(getQuestion());
    await dispatch(stopScore())
}
export const getAnswer = (id, value) => async dispatch => {
    const response = await API.get(`/get-answer/${id}`)
    if (response.data.type === value.toString()) {
        dispatch({ type: FILL_BUTTON, answer: response.data.type })
        dispatch(getQuestion())
        setTimeout(() => {
            dispatch({ type: INCREASE_SCORE })
            dispatch({ type: FILL_BUTTON, answer: null })
            dispatch(swipe(0))
        }, 1000);
    }
    else {
        dispatch({ type: FILL_BUTTON, answer: response.data.type, desc: response.data.answer })
        setTimeout(() => {
            dispatch(questionPageOpen(false))
            dispatch({ type: FILL_BUTTON, answer: null, desc: response.data.answer })
            dispatch(swipe(0))
        }, 1500);
    }
    dispatch({
        type: GET_ANSWER,
        payload: response.data
    })
}

export const getAllQuestionsId = () => async dispatch => {
    const response = await API.get("/all-questions/")
    dispatch({
        type: GET_ALL_ID,
        payload: response.data
    })
}