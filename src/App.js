import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Init from './views/init/Init';
import Layout from './views/layout/Layout';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='' component={Init}/>
          <Route path='Layout' component={Layout}/>
        </Switch>
      </main>
    );
  }
}

export default App;
