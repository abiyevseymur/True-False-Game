import React from 'react'
import css from './QuestionPage.module.css'
import True from '../../assets/true.svg'
import False from '../../assets/false.svg'
import Time from './Time';
import SwipeItem from './swipe/SwipeItem';
import swipe from '../../assets/swipe.svg'

const Question = (props) => {
    function onClickHandler(id, value) {
        if(props.realAnswer===null)
        props.answer(id, value)
    }
    function showQuestion(){
        if(props.question && props.realAnswer===null) 
        return  <div className={css.question} style={{ transform: `translate(${props.pixel}px, -50%)`}} ><span>{props.question.q}</span></div>
        else
        return  <div className={css.question} style={{ transition: `all 0.4s ease`,opacity:'0.2' }} ><span>{props.question.q}</span></div>
    }
    function showBackImage(){
        if(props.question && props.realAnswer===null) 
        return ({ backgroundImage: `url(${props.question.i})` ,
        transform: `translateX(${props.pixel}px)`} )
        else{
            return ({ transition: `all 0.5s ease`,backgroundImage:`url${props.question.i}`} )
        }
    }
    function onTouchStartHandler(){
        localStorage.setItem('swipeStart','true')
        props.startSwipe()
    }
    function render() {
        return (<div>
            <div className="header">
                <div className="row">
                    <div className="col highScore" style={(props.realAnswer)?{fontSize:'26px'}:{fontSize:'16px'}}> Score: <span>{props.score}</span></div>
                    {/* <div className="col login">login </div> */}
                    <div className="col highScore" style={{textAlign:'right',paddingRight:'30px'}}> High Score: <span>{(localStorage.getItem('score')>=props.score)?
                    localStorage.getItem('score'):props.score}</span></div>
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

               
                {showQuestion()}
                <div className={`${css.answer} 	d-none d-sm-block`}>
                    <button onClick={() => onClickHandler(props.question.id, true)} className={(props.realAnswer === 'true') ? css.fill : null}>
                        <img src={True} alt="isTrue" /> True</button>
                    <label id={css.or}>or</label>
                    <button onClick={() => onClickHandler(props.question.id, false)} className={`${css.false} ${(props.realAnswer === 'false') ? css.fill : null}`}>
                        <img src={False} alt="isFalse" /> False</button>
                </div>
                <div className={`${css.answer} 	d-block d-sm-none`}>
                    <SwipeItem {...props} onSwipeHandler={onClickHandler}/>
                    {(localStorage.getItem('swipeStart')==='false')? <div className={css.swipeIcon} style ={(props.swipeStarted)?{display:'none'}:null} 
                     onTouchStart={()=>onTouchStartHandler()}><img src={swipe} alt="swipe"/></div>:null}
                </div>
               
            </div>
            {(props.time) ? <div className={css.footer}>
                <Time {...props} />
            </div> : null}
            <a href={props.question.il}><h6 id={css.author}>{props.question.io}</h6></a>
        </div>)
    }
    return (
        (props.showPage === true) ? render() : null

    )
}

export default Question