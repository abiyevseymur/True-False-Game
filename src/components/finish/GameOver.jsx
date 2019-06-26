import React from 'react'
import css from './GameOver.module.css'
import fbLogo from '../../assets/f_logo_RGB-White_58.png'

const GameOver = (props) => {
    function onPlayClickHandler() {
        props.question()
    }
    function showScore() {
        (localStorage.getItem('score') >= props.score) ? localStorage.getItem('score') : (localStorage.setItem('score', props.score))
    }
    function render() {
        return (
            <>
                <div className={css.backgroundImage} style={{backgroundImage:`url(${props.randomGif})`}}>
                </div>
                <div className='backgroundImage-overlay'></div>
                <div className={css.AppContent}>

                    <div className="header">
                        <div className="row">
                            {/* <div className="col highScore"> High score <span>{(localStorage.getItem('score')>=props.score)?localStorage.getItem('score'): */}
                            {/* showScore()}</span></div> */}
                            {/* <div className="col login">login </div> */}
                            {showScore()}
                            <div className={css.yourScore}><h1>Your Score:</h1><span>{props.score}</span></div>

                        </div>
                    </div>
                    <div className="content">

                        {/* <div className="logo"><img src={logo} alt="" /></div> */}
                        <div id={css.answerMessage}>{props.desc}</div>
                        <button className={css.fbButton} onClick={props.shareOnFb}><img src={fbLogo} alt="fb" /><span> Share With Your Result</span></button>

                        <button className={css.button} onClick={() => onPlayClickHandler()} >Play Again</button>

                        <button className={css.button} onClick={() => props.open(null)} >Back to Menu</button>

                    </div>
                    <div className="footer">

                    </div>
                </div>
            </>
        )
    }
    return (
        (props.showPage === false) ? render() : null
    )
}

export default GameOver