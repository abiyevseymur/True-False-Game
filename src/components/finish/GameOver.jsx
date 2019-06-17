import React from 'react'
import logo from '../../assets/logo.png'
import css from  './GameOver.module.css'

const GameOver = (props) => {
    function showScore(){
        (localStorage.setItem('score',props.score))
        return props.score
    }
    function render() {
        return (
            <div>
            <div className="header">
                <div className="row">
                    <div className="col highScore"> High score <span>{(localStorage.getItem('score')>=props.score)?localStorage.getItem('score'):
                    showScore()}</span></div>
                    {/* <div className="col login">login </div> */}
                </div>
            </div>
            <div className="content">
                <div className='backgroundImage'>
                </div>
                <div className='backgroundImage-overlay'></div>
                <div className="logo"><img src={logo} alt="" /></div>
                <div className={css.yourScore}><h1>Your Score:</h1><h1>{props.score}</h1></div>
                <button className={css.button} onClick={() => props.question()} >Play Again</button>

                <button className={css.button} onClick={() => props.open(null)} >Back to Menu</button>
            </div>
            <div className="footer">

            </div>
        </div>
            )
    }
    return (
        (props.showPage === false) ? render() : null
    )
}

export default GameOver