import React, { Component } from 'react'
import css from './QuestionPage.module.css'

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 300,
            running: false,
        }
    }
    componentDidMount() {
        this.handleCountdown(this.state.count)
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.running !== prevState.running) {
            switch (this.state.running) {
                case true:
                    this.handleStart();
                    break;
                default:

                    break;
            }
        }
    }
    componentWillUnmount() {
        this.handleStop()
    }
    handleStart() {

        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            this.setState(
                { count: newCount >= -1 ? newCount : 0 }
            );
            if (this.state.count === 0) {
               this.props.open(false)
            }
        }, 10);

    }
    handleStop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.setState(
                { running: false }
            );
        }
    }
    handleCountdown(seconds) {
        this.setState({
            count: seconds,
            running: true
        })
    }
    format(time) {
        let milliseconds = time % 60;
        let seconds = Math.floor(time / 100);
        seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
        milliseconds = milliseconds.toString().length === 1 ? "0" + milliseconds : milliseconds;
        return seconds + ',' + milliseconds;
    }
    render() {
        return (
            <>
                <div className={css.time}>
                    <label id={css.timeTitle}>Time:</label>
                    <div className={css.timeCount}>{this.format(this.state.count)}</div>
                    <div id={css.seconds}>seconds</div>
                </div>
            </>
        )
    }
}

export default Time