import React from 'react'

import logo from '../../assets/logo.png'

const HomePage = () => {
    return (
        <div>
            <div className="header">
                    <div className="row">
                        <div className="col highScore"> high score <span>0</span></div>
                        <div className="col login">login </div>
                    </div>
            </div>
            <div className="content">
                <div className='backgroundImage'>
                </div>
                <div className='backgroundImage-overlay'></div>
                <div className="logo"><img src={logo} alt=""/></div>
                <button className='start'>Start New Game</button>
            </div>
            <div className="footer">

            </div>
        </div>
    )
}

export default HomePage