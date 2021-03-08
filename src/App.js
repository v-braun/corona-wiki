import { Component } from 'react';
import {
  HashRouter as Router, 
  Switch, 
  Route
} from "react-router-dom";

import AppMenu from './components/app-menu';
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import * as GTagOptIn from 'gtag-opt-in';

import HomePage from './pages/home-page';
import './app.scss';
import AboutPage from './pages/about-page';
import logo from './logo.png'


export default class App extends Component{

  cookieAccepted(){
    try{
      this.injectAnalytics();
    } catch(e){
      console.error(e);
    }    
  }
  cookieDeclined(){
    try{
      this.injectAnalytics();
    } catch(e){
      console.error(e);
    }
  }

  injectAnalytics(){
    if(process.env.NODE_ENV !== 'production') return;
    
    let val = getCookieConsentValue('consent');
    if(val === true || val === 'true') {
      GTagOptIn.optIn();      
    } else{
      GTagOptIn.optOut();      
    }

  }

  componentDidMount(){
    GTagOptIn.register('G-11HR0GD49W');
    this.injectAnalytics();
  }

  render() {
    return (
      <Router>
        <div id="app-main" className="app">
          <header className="app-header">
            <div className="title">
              <img alt="Corona Wiki" src={logo} />
              <span className="app-title">Corona Wiki</span>              
            </div>
            
            <AppMenu />
              
          </header>
          <main id="app-main-content" className="app-content">
          <CookieConsent
            enableDeclineButton
              location="top"
              buttonText="Cookies akzeptieren"
              declineButtonText="Cookies ablehnen"
              overlay={true}

              onAccept={() => this.cookieAccepted()}
              onDecline={() => this.cookieDeclined()}

              cookieName="consent"
              containerClasses="consentBody"
              contentClasses="consentContent"

              buttonClasses="consentAccept"
              declineButtonClasses="consentDecline"
              
              
              expires={150}
            >
              <h1>Wir verwenden Cookies</h1>
              ... um die Zugriffe auf unsere Website zu analysieren. 
              <br />
              Außerdem geben wir Informationen zu Ihrer Verwendung unserer Website an unsere Partner für Analysen weiter. 
              <br />
              Unsere Partner führen diese Informationen möglicherweise mit weiteren Daten zusammen, die Sie ihnen bereitgestellt haben oder die sie im Rahmen Ihrer Nutzung der Dienste gesammelt haben.
            </CookieConsent>

            <Switch>
              <Route path={`/about`} component={AboutPage} />
              <Route path={`/:state?/:district?/:area?/:idx?`} component={HomePage} />
            </Switch>            
          </main>
        </div>
      </Router>
    );
  }
}
