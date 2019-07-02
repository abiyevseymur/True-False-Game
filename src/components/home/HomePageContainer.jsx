import React, { Component } from 'react'
import { connect } from 'react-redux';
import { questionPageOpen, gameWithTime, getQuestion, stopScore,getAllQuestionsId } from '../../Redux/actions'
import HomePage from './HomePage';


class HomePageContainer extends Component {
    componentDidMount() {
        this.props.getAllQuestionsId()
        if (localStorage.getItem('swipeStart') !== 'true')
            localStorage.setItem('swipeStart', 'false')
    }
    render() {
        return (
            <>
                <HomePage
                    open={this.props.questionPageOpen}
                    showPage={this.props.open}
                    time={this.props.gameWithTime}
                    questions={this.props.getQuestion}
                    stopScore={this.props.stopScore}
                />
            </>
        )
    }
}
const mapsStateToProps = (state) => {
    return {
        open: state.questionPage.open,
    }
}
export default connect(mapsStateToProps, { questionPageOpen, gameWithTime, getQuestion, stopScore,getAllQuestionsId })(HomePageContainer)