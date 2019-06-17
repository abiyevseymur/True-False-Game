import React, { Component } from 'react';
import './style/bootstrap.min.css';
import './style/HomePage.css'
import HomePageContainer from './components/home/HomePageContainer';
import QuestionContainer from './components/question/QuestionContainer';
import GameOverContainer from './components/finish/GameOverContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePageContainer/>
        <QuestionContainer/>
        <GameOverContainer/>
      </div>
    );
  }
}

export default App;
