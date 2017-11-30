import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import About from './About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Route exact path='/' component={Home}/>
        <Route path='/game' component={Game}/>
        <Route path='/about' component={About}/>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/game'>Game</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </nav>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <h3>This is home page.</h3>
    );
  }
}

export default App;
