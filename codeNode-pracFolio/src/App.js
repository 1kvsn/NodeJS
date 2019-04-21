import React, { Component } from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />

        </Switch>
      </Router>
    );
  }
}

export default App;
