import React from 'react'
import css from  './QuestionPage.module.css'
import True from '../../assets/true.svg'
import False from '../../assets/false.svg'
import Time from './Time';

const Question = (props) => {
    console.log((props.realAnswer)?props.realAnswer:null)
    function onClickHandler(id,value){
        props.answer(id,value)
    }
    function render() {
        return (<div>
            <div className="header">
                <div className="row">
                    <div className="col highScore"> score <span>{props.score}</span></div>
                    {/* <div className="col login">login </div> */}
                </div>
            </div>
            <div className="content">
                <div className={css.backgroundImage} style = {(props.question)?{backgroundImage:`url(${props.question.i})`}:null}></div>
                <div className='backgroundImage-overlay'></div>
                <div className={css.question}>{(props.question)?props.question.q:null}</div>
                <div className={css.answer}>
                    <button onClick={()=>onClickHandler(props.question.id,true)}  className={(props.realAnswer==='true')?css.fill:null}>
                        <img src={True} alt="isTrue" /> True</button>
                    <label id={css.or}>or</label>
                    <button onClick={()=>onClickHandler(props.question.id,false)} className={`${css.false} ${(props.realAnswer==='false')?css.fill:null}`}>
                        <img src={False} alt="isFalse" /> False</button>
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