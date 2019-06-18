import { OPEN_QUESTION_PAGE, GAME_WITH_TIME, GET_ANSWER, GET_QUESTION, INCREASE_SCORE, STOP_SCORE, FILL_BUTTON } from "./constants";
import { API } from './API'

export const questionPageOpen = (value) => ({ type: OPEN_QUESTION_PAGE, open: value })
export const gameWithTime = (time) => ({ type: GAME_WITH_TIME, time })
export const stopScore = () => ({ type: STOP_SCORE })


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
    console.log(response.data, value)
    if (response.data.type === value.toString()) {
        dispatch({ type: FILL_BUTTON, answer: response.data.type })
        setTimeout(() => {
            dispatch({ type: INCREASE_SCORE })
            dispatch(getQuestion())
            dispatch({ type: FILL_BUTTON, answer:null })
        }, 500);
    }
    else {
        dispatch({ type: FILL_BUTTON, answer: response.data.type })
        setTimeout(() => {
            dispatch(questionPageOpen(false))
        }, 500);
    }
    dispatch({
        type: GET_ANSWER,
        payload: response.data
    })
}
