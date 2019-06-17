import React,{Component} from 'react'
import Question from './Question';
import {connect} from 'react-redux'
import {questionPageOpen,getAnswer} from '../../Redux/actions'

class QuestionContainer extends Component{

    render(){
        return(
            <Question
            showPage={this.props.open} 
            open={this.props.questionPageOpen}
            time={this.props.time}
            answer ={this.props.getAnswer}
            question={this.props.question}
            score = {this.props.score}
            />
        )
    }
}
const mapsStateToProps =(state)=>{
    return{
        open: state.questionPage.open,
        time:state.questionPage.time,
        question:state.questionPage.question,
        score:state.questionPage.score
    }
}

export default connect(mapsStateToProps,{questionPageOpen,getAnswer})(QuestionContainer)