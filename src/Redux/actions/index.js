import { OPEN_QUESTION_PAGE, GAME_WITH_TIME, GET_ANSWER, GET_QUESTION, INCREASE_SCORE, STOP_SCORE, FILL_BUTTON, SWIPE_ON_TOUCH, SWIPE_STARTED } from "./constants";
import { API } from './API'

export const questionPageOpen = (value) => ({ type: OPEN_QUESTION_PAGE, open: value })
export const gameWithTime = (time) => ({ type: GAME_WITH_TIME, time })
export const stopScore = () => ({ type: STOP_SCORE })
export const swipe = (pixel) =>({type:SWIPE_ON_TOUCH,pixel})
export const startSwipe = ()=>({type:SWIPE_STARTED})

export const getQuestion = () => async dispatch => {
    const response = await API.get('/get-question')
    await dispatch({
        type: GET_QUESTION,
        payload: response.data
    })
    await dispatch(questionPageOpen(true))
}
export const getAnswer = (id, value) => async dispatch => {
    const response = await API.get(`/get-answer/${id}`)
    if (response.data.type === value.toString()) {
        dispatch({ type: FILL_BUTTON, answer: response.data.type })
        dispatch(getQuestion())

        setTimeout(() => {
            dispatch({ type: INCREASE_SCORE })
            dispatch({ type: FILL_BUTTON, answer:null })
            dispatch(swipe(0))
        }, 500);
    }
    else {
        dispatch({ type: FILL_BUTTON, answer: response.data.type })
        setTimeout(() => {
            dispatch(questionPageOpen(false))
            dispatch({ type: FILL_BUTTON, answer:null })
            dispatch(swipe(0))
        }, 1500);
    }
    dispatch({
        type: GET_ANSWER,
        payload: response.data
    })
}
