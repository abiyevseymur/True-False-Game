import React, { Component } from 'react';
import HomePage from './components/home/HomePage';
import QuestionPage from './components/question/QuestionPage';
import { Route } from 'react-router-dom'
import './style/bootstrap.min.css';
import './style/HomePage.css'

class App extends Component {
  render() {
    return (
      <div className="App">
         <Route path="/" exact render={(props) => (<HomePage {...props} />)} />
         <Route path="/question/" exact render={(props) => (<QuestionPage {...props} />)} />
         {/* <Route path="/game-over/" exact render={(props) => (<HomePage {...props} />)} /> */}
       
      </div>
    );
  }
}

export default App;
