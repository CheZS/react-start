import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <h3>This is About page</h3>
        <Link to='/about/help'>Help</Link>
        <Route path='/about/help' component={Help}/>
      </div>
    );
  }
};

// Nest Route
class Help extends Component {
  render() {
    return (
      <h3>This is Help page (Nest Route)</h3>
    );
  }
}
