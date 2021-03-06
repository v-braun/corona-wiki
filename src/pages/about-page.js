import { Component } from 'react';
import './about-page.scss'

export default class AboutPage extends Component{


  render(){
    return (
      <div id="about-page">
        <section className="section">
          <div className="section-title">Allgemein</div>
          <div className="section-content">
            Im Corona Wiki finden Sie aktuelle Corona Fallzahlen für alle Bundesländer und Landkreise.
          </div>
        </section>

        <section className="section">
          <div className="section-title">Danke ❤️</div>
          <div className="section-content">
            <span>Ein Dank geht an:</span>
            <ul>
              <li>
                <a href="https://marlon-lueckert.de/">Marlon Lückert</a> für das Bereitstellen der <a href="https://github.com/marlon360/rki-covid-api">rki-covid-api</a>
              </li>
              <li>
                <a href="https://icons8.de/">icons8</a> und <a href="https://www.flaticon.com/" title="Flaticon">flaticon</a> für die tolle Sammlung an Icons
              </li>
              <li>
                <a href="https://www.heraldik-wiki.de/">Heraldik-Wiki</a> für die Sammlung an Wappen der Bundesländer und Landkreise
              </li>
            </ul>
          </div>
        </section>

        <section className="section">
          <div className="section-title">Open Source</div>
          <div className="section-content">
            Mehr bei <a href="https://github.com/v-braun/corona-wiki">
              GitHub
              <img className="inline-ico" alt="github" src="https://img.icons8.com/fluent/48/000000/github.png" />
            </a>
          </div>
        </section>        

        <section className="section">
          <div className="section-title">Kontakt</div>
          <div className="section-content">
            Entwickelt von  <a href="https://www.viktor-braun.de">
              Viktor Braun
            </a>
          </div>
        </section>                
        
      </div>
    )
  }
}