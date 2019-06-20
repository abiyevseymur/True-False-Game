import React from 'react'
import css from './QuestionPage.module.css'
import True from '../../assets/true.svg'
import False from '../../assets/false.svg'
import Time from './Time';
import SwipeItem from './swipe/SwipeItem';

const Question = (props) => {
    function onClickHandler(id, value) {
        props.answer(id, value)
    }
    function showQuestion(){
        if(props.question && props.realAnswer===null) 
        return props.question.q
        else
        return
    }
    function showBackImage(){
        if(props.question && props.realAnswer===null) 
        return ({ backgroundImage: `url(${props.question.i})` ,
        transform: `translateX(${props.pixel}px)`} )
        else{
            return ({ transition: `all 0.5s ease`,backgroundImage:`url${props.question.i}`} )
        }
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
                <div className={css.trueButton} style={(props.pixel>0)?{backgroundColor:'var(--customGreen)',textAlign:'left'}:{display:'none'}}>
                    <label id={css.trueLabel}><img src={True} alt="isTrue"/> <div>True</div></label> </div>
                <div className={css.backgroundImage} style={showBackImage()}
                    > <div className='backgroundImage-overlay'></div></div>
                <div className={css.falseButton} style={(props.pixel<0)?{backgroundColor:'var(--customRed)',textAlign:'right'}:{display:'none'}}>
                <label id={css.falseLabel}><img src={False} alt="isFalse" /> <div>False</div></label>
                </div>

               
                <div className={css.question} style={{ transform: `translateX(${props.pixel}px)` }} >{showQuestion()}</div>
                <div className={`${css.answer} 	d-none d-sm-block`}>
                    <button onClick={() => onClickHandler(props.question.id, true)} className={(props.realAnswer === 'true') ? css.fill : null}>
                        <img src={True} alt="isTrue" /> True</button>
                    <label id={css.or}>or</label>
                    <button onClick={() => onClickHandler(props.question.id, false)} className={`${css.false} ${(props.realAnswer === 'false') ? css.fill : null}`}>
                        <img src={False} alt="isFalse" /> False</button>
                </div>
                <div className={`${css.answer} 	d-block d-sm-none`}>
                    <SwipeItem {...props}/>
                </div>
            </div>
            {(props.time) ? <div className={css.footer}>
                <Time {...props} />
            </div> : null}
        </div>)
    }
    return (
        (props.showPage === true) ? render() : null

    )
}

export default Question