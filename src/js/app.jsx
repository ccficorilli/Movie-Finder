import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Details from './containers/MovieDetailContainer';
import Search from './containers/MovieSearchContainer';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='main-container'>
            <Route exact path='/' component={ Search } />
            <Route path='/movie/:id' component={ Details } />
        </div>
      </Router>
    );
  }
}
