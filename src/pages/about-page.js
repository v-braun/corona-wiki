import { Component } from 'react';
import { Cookies } from "react-cookie-consent";
import * as GTagOptIn from 'gtag-opt-in';

import './about-page.scss'


export default class AboutPage extends Component{

  optOutGoogleAnalutics(){
    try{
      Cookies.set('consent', 'false');
      GTagOptIn.optOut();
    }catch(e){

    }
  }

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
          <div className="section-title">Haftungsausschluss</div>
          <div className="section-content">
            Das Corona Wiki ist auf externe Datenquellen und auf manuell gepflegte redaktionelle Inhalte angewiesen.
            <br />
            Daher kann keinerlei Haftung für die Aktualität, Richtigkeit und Vollständigkeit übernommen werden.
            <br />
            Im Zweifel sollten offizielle Verlautbarungen der einschlägigen Behörden konsultiert und ihr Verhalten danach ausgerichtet werden.
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
            <br />
            <br />

            <span>Anregungen und Kritik an: 
              <br />
              <small><b>corona-wiki[at]viktor-braun.de</b></small>
            </span>
          </div>
        </section>         

        <section className="section">
          <div className="section-title">Impressum</div>
          <div className="section-content">
            <br />
            Angaben gemäß § 5 TMG
            <br />
            <br />
            Viktor Braun
            <br />
            Friedrichstr. 52
            <br />
            38102 Braunschweig
            <br />
            <small>Tel.: +49 176 621 90 661</small>
            <br />
            <small>USt-ID: DE311374999</small>
          </div>
        </section>        

        <section className="section dsgvo-section">

        <h1>Datenschutzerklärung</h1>
        <div className="dsgvo-container">
<p>Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:</p>
<p>Viktor Braun
    <br />
    <br />
Friedrichstr. 52
    <br />
38102 Braunschweig
    <br />
Tel.: +49 176 621 90 661</p>
<h2>Ihre Betroffenenrechte</h2>
<p>Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:</p>
<ul>
    <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
    <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
    <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
    <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</li>
    <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>
    <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).</li>
</ul>
<p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
<p>Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.</p>
<p>Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" rel="nofollow noopener noreferrer">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.
</p>
<p></p>
<h2>Cookies</h2>
<p>Wie viele andere Webseiten verwenden wir auch so genannte „Cookies“. Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Webseite besuchen. </p>
<p>Sie können Sie einzelne Cookies oder den gesamten Cookie-Bestand löschen. Darüber hinaus erhalten Sie Informationen und Anleitungen, wie diese Cookies gelöscht oder deren Speicherung vorab blockiert werden können. Je nach Anbieter Ihres Browsers finden Sie die notwendigen Informationen unter den nachfolgenden Links:</p>
<ul>
    <li>Mozilla Firefox: <a href="https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen" target="_blank" rel="nofollow noopener noreferrer">https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen</a>
    </li>
    <li>Internet Explorer: <a href="https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="nofollow noopener noreferrer">https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies</a>
    </li>
    <li>Google Chrome: <a href="https://support.google.com/accounts/answer/61416?hl=de" target="_blank" rel="nofollow noopener noreferrer">https://support.google.com/accounts/answer/61416?hl=de</a>
    </li>
    <li>Opera: <a href="http://www.opera.com/de/help" target="_blank" rel="nofollow noopener noreferrer">http://www.opera.com/de/help</a>
    </li>
    <li>Safari: <a href="https://support.apple.com/kb/PH17191?locale=de_DE&viewlocale=de_DE" target="_blank" rel="nofollow noopener noreferrer">https://support.apple.com/kb/PH17191?locale=de_DE&viewlocale=de_DE</a>
    </li>
</ul>
<h3>Speicherdauer und eingesetzte Cookies:</h3>
<p>Soweit Sie uns durch Ihre Browsereinstellungen oder Zustimmung die Verwendung von Cookies erlauben, können folgende Cookies auf unseren Webseiten zum Einsatz kommen:</p>
<p></p>
<h2>Technisch notwendige Cookies </h2>
<h3>Art und Zweck der Verarbeitung: </h3>
<p>Wir setzen Cookies ein, um unsere Website nutzerfreundlicher zu gestalten. Einige Elemente unserer Internetseite erfordern es, dass der aufrufende Browser auch nach einem Seitenwechsel identifiziert werden kann.</p>
<p>Der Zweck der Verwendung technisch notwendiger Cookies ist, die Nutzung von Websites für die Nutzer zu vereinfachen. Einige Funktionen unserer Internetseite können ohne den Einsatz von Cookies nicht angeboten werden. Für diese ist es erforderlich, dass der Browser auch nach einem Seitenwechsel wiedererkannt wird.</p>
<p>Für folgende Anwendungen benötigen wir Cookies:</p>
<p></p>
<h3>Rechtsgrundlage und berechtigtes Interesse: </h3>
<p>Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an einer nutzerfreundlichen Gestaltung unserer Website.</p>
<h3>Empfänger: </h3>
<p>Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Website als Auftragsverarbeiter tätig werden.</p>
<p></p>
<h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
<p>Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne diese Daten ist jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder eingeschränkt sein.</p>
<h3>Widerspruch</h3>
<p>Lesen Sie dazu die Informationen über Ihr Widerspruchsrecht nach Art. 21 DSGVO weiter unten.</p>
<p></p>
<h2>Technisch nicht notwendige Cookies</h2>
<p>Des Weiteren setzen wir Cookies ein, um das Angebot auf unserer Website besser auf die Interessen unserer Besucher abzustimmen oder auf Basis statistischer Auswertungen allgemein zu verbessern.</p>
<p>Welche Anbieter Cookies setzen, entnehmen Sie bitte den unten aufgeführten Informationen zu den eingesetzten Darstellungs-, Tracking-, Remarketing- und Webanalyse-Technologien.</p>
<h3>Rechtsgrundlage:</h3>
<p>Rechtsgrundlage für diese Verarbeitungen ist jeweils Ihre Einwilligung, Art. 6 Abs. 1 lit. a DSGVO.</p>
<h3>Empfänger:</h3>
<p>Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Website als Auftragsverarbeiter tätig werden. </p>
<p>Weitere Empfänger entnehmen Sie bitte den unten aufgeführten Informationen zu den eingesetzten Darstellungs-, Tracking-, Remarketing- und Webanalyse-Technologien.</p>
<h3>Drittlandtransfer:</h3>
<p>Informationen hierzu entnehmen Sie bitte aus den Auflistungen der einzelnen Darstellungs-, Tracking-, Remarketing- und Webanalyse-Anbietern.</p>
<h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
<p>Natürlich können Sie unsere Website grundsätzlich auch ohne Cookies betrachten. Webbrowser sind regelmäßig so eingestellt, dass sie Cookies akzeptieren. Im Allgemeinen können Sie die Verwendung von Cookies jederzeit über die Einstellungen Ihres Browsers deaktivieren (siehe Widerruf der Einwilligung).</p>
<p>Bitte beachten Sie, dass einzelne Funktionen unserer Website möglicherweise nicht funktionieren, wenn Sie die Verwendung von Cookies deaktiviert haben.</p>
<h3>Widerruf der Einwilligung:</h3>
<p>Sie können Ihre Einwilligung jederzeit über unser Cookie-Consent-Tool widerrufen. </p>
<h3>Profiling:</h3>
<p>Inwiefern wir das Verhalten von Websitebesuchern mit pseudonymisierten Nutzerprofilen analysieren, entnehmen Sie bitte den unten aufgeführten Informationen zu den eingesetzten Darstellungs-, Tracking-, Remarketing- und Webanalyse-Technologien.</p>
<p></p>
<h2>Verwendung von Google Analytics</h2>
<p>Soweit Sie ihre Einwilligung gegeben haben, wird auf dieser Website Google Analytics eingesetzt, ein Webanalysedienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA (nachfolgend: „Google“). Google Analytics verwendet sog. „Cookies“, also Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Webseite durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Aufgrund der Aktivierung der IP-Anonymisierung auf diesen Webseiten, wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. </p>
<p>Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden Sie unter <a href="https://www.google.com/analytics/terms/de.html und unter https://policies.google.com/?hl=de" rel="noopener noreferrer" target="_blank">https://www.google.com/analytics/terms/de.html und unter https://policies.google.com/?hl=de</a>. 
</p>
<p>Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Webseite auszuwerten, um Reports über die Webseitenaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Webseitenbetreiber zu erbringen. </p>
<p>Die von uns gesendeten und mit Cookies, Nutzerkennungen (z. B. User-ID) oder Werbe-IDs verknüpften Daten werden nach 14 Monaten automatisch gelöscht. Die Löschung von Daten, deren Aufbewahrungsdauer erreicht ist, erfolgt automatisch einmal im Monat.</p>
<h3>Widerruf der Einwilligung:</h3>
<p>Sie können das Tracking durch Google Analytics auf unserer Website unterbinden, indem Sie <a title="Google Analytics Opt-Out-Cookie setzen" href="#/about" onClick={() => this.optOutGoogleAnalutics()} >diesen Link anklicken</a>. Dabei wird ein Opt-out-Cookie auf Ihrem Gerät installiert. Damit wird die Erfassung durch Google Analytics für diese Website und für diesen Browser zukünftig verhindert, solange das Cookie in Ihrem Browser installiert bleibt.</p>
<p>Sie können darüber hinaus die Speicherung der Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können. </p>
<p>Sie können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a href="http://tools.google.com/dlpage/gaoptout?hl=de" rel="noopener noreferrer" target="_blank">Browser Add On zur Deaktivierung von Google Analytics</a>.
</p>
<p></p>
<h2>Verwendung von Scriptbibliotheken (Google Webfonts)</h2>
<p>Um unsere Inhalte browserübergreifend korrekt und grafisch ansprechend darzustellen, verwenden wir auf dieser Website „Google Web Fonts“ der Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA; nachfolgend „Google“) zur Darstellung von Schriften.</p>
<p>Weitere Informationen zu Google Web Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq" rel="noopener nofollow noreferrer" target="_blank">https://developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a href="https://www.google.com/policies/privacy/" rel="noopener nofollow" target="_blank">https://www.google.com/policies/privacy/</a>.
</p>
<p></p>
<h2>Google AdWords</h2>
<p>Unsere Website nutzt das Google Conversion-Tracking. Betreibergesellschaft der Dienste von Google AdWords ist die Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Sind Sie über eine von Google geschaltete Anzeige auf unsere Webseite gelangt, wird von Google Adwords ein Cookie auf Ihrem Rechner gesetzt. Das Cookie für Conversion-Tracking wird gesetzt, wenn ein Nutzer auf eine von Google geschaltete Anzeige klickt.</p>
<p>Besucht der Nutzer bestimmte Seiten unserer Website und das Cookie ist noch nicht abgelaufen, können wir und Google erkennen, dass der Nutzer auf die Anzeige geklickt hat und zu dieser Seite weitergeleitet wurde. Jeder Google AdWords-Kunde erhält ein anderes Cookie. Cookies können somit nicht über die Websites von AdWords-Kunden nachverfolgt werden. Die mithilfe des Conversion-Cookies eingeholten Informationen dienen dazu, Conversion-Statistiken für AdWords-Kunden zu erstellen, die sich für Conversion-Tracking entschieden haben. Die Kunden erfahren die Gesamtanzahl der Nutzer, die auf ihre Anzeige geklickt haben und zu einer mit einem Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. Sie erhalten jedoch keine Informationen, mit denen sich Nutzer persönlich identifizieren lassen.</p>
<p>Nähere Informationen über die Datenverarbeitung durch Google können Sie den Google-Datenschutzhinweisen entnehmen: <a href="https://policies.google.com/privacy" rel="noopener nofollow noreferrer" target="_blank">https://policies.google.com/privacy</a>. Dort können Sie im Datenschutzcenter auch Ihre persönlichen Datenschutz-Einstellungen verändern.</p>
<h3>Widerruf der Einwilligung:</h3>
<p>Vom Anbieter wird derzeit keine Möglichkeit für einen einfachen Opt-out oder ein Blockieren der Datenübertragung angeboten. Wenn Sie eine Nachverfolgung Ihrer Aktivitäten auf unserer Website verhindern wollen, widerrufen Sie bitte im Cookie-Consent-Tool Ihre Einwilligung für die entsprechende Cookie-Kategorie oder alle technisch nicht notwendigen Cookies und Datenübertragungen. In diesem Fall können Sie unsere Website jedoch ggfs. nicht oder nur eingeschränkt nutzen.</p>
<p></p>
<h2>Einsatz von Google Remarketing</h2>
<p>Diese Website verwendet die Remarketing-Funktion der Google Inc. Betreibergesellschaft der Dienste von Google Remarketing ist die Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (nachfolgend „Google“).</p>
<p>Die Funktion dient dazu, Websitebesuchern innerhalb des Google-Werbenetzwerks interessenbezogene Werbeanzeigen zu präsentieren. Im Browser des Websitebesuchers wird ein sog. „Cookie“ gespeichert, der es ermöglicht, den Besucher wiederzuerkennen, wenn dieser Webseiten aufruft, die dem Werbenetzwerk von Google angehören. Auf diesen Seiten können dem Besucher Werbeanzeigen präsentiert werden, die sich auf Inhalte beziehen, die der Besucher zuvor auf Webseiten aufgerufen hat, die die Remarketing Funktion von Google verwenden.</p>
<p>Nähere Informationen über die Datenverarbeitung durch Google können Sie den Google-Datenschutzhinweisen entnehmen: <a href="https://policies.google.com/privacy" rel="noopener nofollow noreferrer" target="_blank">https://policies.google.com/privacy</a>. Dort können Sie im Datenschutzcenter auch Ihre persönlichen Datenschutz-Einstellungen verändern. </p>
<h3>Widerruf der Einwilligung:</h3>
<p>Vom Anbieter wird derzeit keine Möglichkeit für einen einfachen Opt-out oder ein Blockieren der Datenübertragung angeboten. Wenn Sie eine Nachverfolgung Ihrer Aktivitäten auf unserer Website verhindern wollen, widerrufen Sie bitte im Cookie-Consent-Tool Ihre Einwilligung für die entsprechende Cookie-Kategorie oder alle technisch nicht notwendigen Cookies und Datenübertragungen. In diesem Fall können Sie unsere Website jedoch ggfs. nicht oder nur eingeschränkt nutzen.</p>
<p></p>
<h2>SSL-Verschlüsselung</h2>
<p>Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.</p>
<p></p>
<hr />
<h2>Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO</h2>
<h3>Einzelfallbezogenes Widerspruchsrecht</h3>
<p>Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit. f DSGVO (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.</p>
<p>Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.</p>
<h3>Empfänger eines Widerspruchs</h3>
<p>Viktor Braun
    <br />
Friedrichstr. 52
    <br />
38102 Braunschweig
    <br />
Tel.: +49 176 621 90 661</p>
<hr />
<h2>Änderung unserer Datenschutzbestimmungen</h2>
<p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
<h2>Fragen an den Datenschutzbeauftragten</h2>
<p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:</p>
<p></p>
<p>
    <em>Die Datenschutzerklärung wurde mithilfe der activeMind AG erstellt, den Experten für <a href="https://www.activemind.de/datenschutz/datenschutzbeauftragter/" target="_blank" rel="noopener noreferrer">externe Datenschutzbeauftragte</a> (Version #2020-09-30).</em>
</p>
</div>

        </section>        

        
      </div>
    )
  }
}