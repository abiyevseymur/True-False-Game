import React,{Component} from 'react'
import GameOver from './GameOver';
import {questionPageOpen,getQuestion,stopScore} from '../../Redux/actions'
import { connect } from "react-redux";

class GameOverContainer extends Component{
    componentDidMount(){
        localStorage.setItem('score',this.props.score)
        console.log('test')
        this.props.stopScore()
    }
    render(){
        return(
            <GameOver
            showPage={this.props.open} 
            open={this.props.questionPageOpen}
            question={this.props.getQuestion}
            score= {this.props.score}
            stopScore={this.props.stopScore}
            />
        )
    }
}
const mapsStateToProps =(state)=>{
    return{
        open: state.questionPage.open,
        score:state.questionPage.score
    }
}

export default connect(mapsStateToProps,{questionPageOpen,getQuestion,stopScore})(GameOverContainer)