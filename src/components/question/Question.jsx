import React from 'react'
import css from  './QuestionPage.module.css'
import True from '../../assets/true.svg'
import False from '../../assets/false.svg'
import Time from './Time';

const Question = (props) => {
    function render() {
        return (<div>
            <div className="header">
                <div className="row">
                    <div className="col highScore"> score <span>{props.score}</span></div>
                    {/* <div className="col login">login </div> */}
                </div>
            </div>
            <div className="content">
                <div className='backgroundImage'></div>
                <div className='backgroundImage-overlay'></div>
                <div className={css.question}>{(props.question)?props.question.q:null}</div>
                <div className={css.answer}>
                    <button onClick={()=>props.answer(props.question.id,true)}><img src={True} alt="isTrue" /> True</button>
                    <label id={css.or}>or</label>
                    <button onClick={()=>props.answer(props.question.id,false)}><img src={False} alt="isFalse" /> False</button>
                </div>
            </div>
            {(props.time)?<div className={css.footer}>
                <Time {...props} />
                
            </div>:null}
        </div>)
    }
    return (
        (props.showPage === true) ? render() : null

    )
}

export default Question