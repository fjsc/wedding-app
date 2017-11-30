import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Calendar from '../calendar/Calendar';
import Home from '../home/Home';
import Music from '../music/Music';
import NavMenu from '../../components/nav-menu/NavMenu'
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <main>
          Layout
        <Switch>
          <Route path='/layout/calendar' component={Calendar}/>
          <Route path='/layout/home' component={Home}/>
          <Route path='/layout/music' component={Music}/>
        </Switch>
        <NavMenu></NavMenu>
      </main>
    );
  }
}

export default Layout;
