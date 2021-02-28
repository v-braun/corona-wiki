import { Component } from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom";
import HomePage from './pages/home-page';
import './app.scss';


export default class App extends Component{
  render() {
    return (
      <Router>
        <div className="app">
          <header className="app-header">
            <img alt="Corona Wiki" src="https://img.icons8.com/nolan/96/coronavirus.png"/>
            <span className="app-title">Corona Wiki</span>
          </header>
          <main className="app-content">

            <Switch>
              {/* <Route path={`/:state/:district`}>
                <div>Hello</div>
              </Route> */}

              <Route path={`/:state?/:district?/:area?/:idx?`} component={HomePage} />
            </Switch>            
          </main>
        </div>
      </Router>
    );
  }
}
