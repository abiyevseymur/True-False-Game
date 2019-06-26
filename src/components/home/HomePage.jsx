import React from 'react'
import logo from '../../assets/logo.png'
import css from './HomePage.module.css'

const HomePage = (props) => {
    function onClickHandlerWithTime() {
        props.time(true)
        props.stopScore()
        props.questions();
    }
    function onClickHandler() {
        props.time(false)
        props.stopScore()
        props.questions();
    }
    function render() {
        return (
            <>
              <div className="header">
                        <div className="row">
                            <div className="col highScore"> High score <span>{localStorage.getItem('score')}</span></div>
                           
                        </div>
                    </div>
                <div className={css.backgroundImage}>
                </div>
                <div className='backgroundImage-overlay'></div>
                <div className={css.AppContent}>
                    <div className="content">
                        <div className="logo"><img src={logo} alt="" /></div>
                        <div><button className={css.button} onClick={() => onClickHandler()} >Classic Game</button></div>
                        <div><button className={css.button} onClick={() => onClickHandlerWithTime()} >Play with Time</button></div>
                    </div>
                </div>
                <div className="footer">
                    <a href='https://www.shutterstock.com/g/Giulio_Fornasar'><h6 id={css.author}>Giulio_Fornasar / Shutterstock</h6></a>
                    </div>
            </>
        )
    }
    return (
        (props.showPage === null) ? render() : null

    )
}

export default HomePage