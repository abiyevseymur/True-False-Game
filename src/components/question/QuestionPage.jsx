import React from 'react'
import '../../style/QuestionPage.css'
import True from '../../assets/true.svg'
import False from '../../assets/false.svg'

const QuestionPage = () => {
    return (
        <div>
            <div className="header">
                <div className="row">
                    <div className="col highScore"> score <span>0</span></div>
                    <div className="col login">login </div>
                </div>
            </div>
            <div className="content">
                <div className='backgroundImage'></div>
                <div className='backgroundImage-overlay'></div>
                <div className="question">"Walt disnet origianlly wanted to call Mickey MOuse Mortimer Mouse"</div>
                <div className="answer">
                    <button><img src={True} alt="isTrue"/> True</button>
                    <label id='or'>or</label>
                    <button><img src={False} alt="isFalse"/> False</button>
                </div>
            </div>
            <div className="footer">
                <div className="time">
                    <label id='timeTitle'>Time:</label>
                    <div className='timeCount'>33.78</div>
                    <div id='seconds'>seconds</div>
                </div>
            </div>
        </div>
    )
}

export default QuestionPage