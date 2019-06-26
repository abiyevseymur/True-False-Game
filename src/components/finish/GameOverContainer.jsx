import React,{Component} from 'react'
import GameOver from './GameOver';
import {questionPageOpen,playAgain,stopScore} from '../../Redux/actions'
import { connect } from "react-redux";

class GameOverContainer extends Component{
    shareOnFb=()=>{
        let url = 'http://truefalse.app'
        window.FB.ui({
            app_id: '913458315693278',
            method: 'share',
            href: url,
            display: 'popup',
            hashtag: '#truefalse',
          }, function (response) {
          });
    }
    
    componentDidUpdate=()=>{
        this.randomGif = this.props.gifs[Math.floor(Math.random() * this.props.gifs.length)];
    }
    render(){
        return(
            <GameOver
            showPage={this.props.open} 
            open={this.props.questionPageOpen}
            question={this.props.playAgain}
            score= {this.props.score}
            stopScore={this.props.stopScore}
            desc = {this.props.desc}
            shareOnFb = {this.shareOnFb}
            randomGif={this.randomGif}
            />
        )
    }
}
const mapsStateToProps =(state)=>{
    return{
        open: state.questionPage.open,
        score:state.questionPage.score,
        desc:state.questionPage.desc
    }
}

export default connect(mapsStateToProps,{questionPageOpen,playAgain,stopScore})(GameOverContainer)