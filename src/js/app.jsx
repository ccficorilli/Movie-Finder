import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';




import MovieDetailContainer from './containers/MovieDetailContainer';
import MovieSearchContainer from './containers/MovieSearchContainer';



export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'>
            <Route exact path='/' component={ MovieSearchContainer } />
            <Route path='/movie/:id' component={ MovieDetailContainer } />
        </div>
      </Router>    );
  }
}
