import { OPEN_QUESTION_PAGE, GAME_WITH_TIME, GET_ANSWER, GET_QUESTION, INCREASE_SCORE, STOP_SCORE } from "./constants";
import { API } from './API'

export const questionPageOpen = (value) => ({ type: OPEN_QUESTION_PAGE, open: value })
export const gameWithTime = (time) => ({ type: GAME_WITH_TIME, time })
export const stopScore =()=>({type:STOP_SCORE})


export const getQuestion = () => async dispatch => {
    const response = await API.get('/get-question')
    await dispatch({
        type: GET_QUESTION,
        payload: response.data
    })
    await dispatch({
        type: OPEN_QUESTION_PAGE,
        open: true
    })
}
export const getAnswer = (id, value) => async dispatch => {
    const response = await API.get(`/get-answer/${id}`)
    if (response.data.type === value.toString()) {
        dispatch({
            type: INCREASE_SCORE,
        })
    }
    else {
        dispatch({
            type: OPEN_QUESTION_PAGE,
            open: false
        })
        
    }
    dispatch({
        type: GET_ANSWER,
        payload: response.data
    })
}
