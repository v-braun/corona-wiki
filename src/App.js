import { Component } from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom";

import AppMenu from './components/app-menu';




import HomePage from './pages/home-page';
import './app.scss';
import AboutPage from './pages/about-page';


export default class App extends Component{
  render() {
    return (
      <Router>
        <div id="app-main" className="app">
          <header className="app-header">
            <div className="title">
              <img alt="Corona Wiki" src="https://img.icons8.com/nolan/96/coronavirus.png"/>
              <span className="app-title">Corona Wiki</span>              
            </div>
            
            <AppMenu />
              
          </header>
          <main id="app-main-content" className="app-content">

            <Switch>
              <Route path={`${process.env.PUBLIC_URL}/about`} component={AboutPage} />
              <Route path={`${process.env.PUBLIC_URL}/:state?/:district?/:area?/:idx?`} component={HomePage} />
            </Switch>            
          </main>
        </div>
      </Router>
    );
  }
}
