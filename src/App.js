import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Agenda from './scenes/Agenda'
import Grades from './scenes/Grades'
import NavigationBar from './components/NavigationBar'

class App extends Component {
  render() {
    return (
        <div className="App">
          <NavigationBar />
          <Switch>
            <Route exact path='/' component={ Agenda } />
            <Route path='/agenda' component={ Agenda } />
            <Route path='/grades' component={ Grades } />
          </Switch>
        </div>
    );
  }
}

export default App;
