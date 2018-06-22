import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MovieDetails from './containers/MovieDetails';
import MovieSearch from './containers/MovieSearch';



export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='main-container'>
            <Route exact path='/' component={ MovieSearch } />
            <Route path='/movie/:id' component={ MovieDetails } />
        </div>
      </Router>    );
  }
}
