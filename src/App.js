import React, { Component } from 'react';
import './style/bootstrap.min.css';
import './style/HomePage.css'
import HomePageContainer from './components/home/HomePageContainer';
import QuestionContainer from './components/question/QuestionContainer';
import GameOverContainer from './components/finish/GameOverContainer';

class App extends Component {
  gifs = [
    "https://media.giphy.com/media/bPCwGUF2sKjyE/giphy.gif",
    "https://media.giphy.com/media/10yT6sPuhCQK2I/giphy.gif",
    "https://media.giphy.com/media/FXGoDrsgrNLj2/giphy.gif",
    "https://media.giphy.com/media/EXHHMS9caoxAA/giphy.gif",
    "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif"
];
  render() {
    return (
      <div className="App">
        <HomePageContainer/>
        <QuestionContainer/>
        <GameOverContainer gifs={this.gifs}/>
        <div className='d-none'>{this.gifs.map((img,index)=><img src={img} alt='true-false' key={index}/>)}</div>
      </div>
    );
  }
}

export default App;
