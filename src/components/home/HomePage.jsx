import React from 'react'
import logo from '../../assets/logo.png'
import css from './HomePage.module.css'

const HomePage = (props) => {
    function onClickHandlerWithTime(){
        props.time(true)
        props.stopScore()
        props.questions();
    }
    function onClickHandler(){
        props.time(false)
        props.stopScore()
        props.questions();
    }
    function render() {
        return (
            <div>
                <div className="header">
                    <div className="row">
                        <div className="col highScore"> High score <span>{localStorage.getItem('score')}</span></div>
                        {/* <div className="col login">login </div> */}
                    </div>
                </div>
                <div className="content">
                    <div className='backgroundImage'>
                    </div>
                    <div className='backgroundImage-overlay'></div>
                    <div className="logo"><img src={logo} alt="" /></div>
                    <div><button className={css.button} onClick={() => onClickHandler()} >Classic Game</button></div>
                    <div><button className={css.button} onClick={() => onClickHandlerWithTime()} >Play with Time</button></div>
                </div>
                <div className="footer">

                </div>
            </div>
        )
    }
    return (
        (props.showPage === null) ? render():null

    )
}

export default HomePage