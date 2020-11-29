import React from "react"
import Layout from "../components/generic/layout/layout"
import SEO from "../components/seo/seo"
import Section from "../components/container/section"

const IndexPage = props => (
  <Layout title={"TheImprint"}>
    <SEO title="Impressum" path={props.location.pathname} />

    <Section backgroundColor={"lila"}>
      {/* <div style={{ paddingTop: "30vh" }}>
        <p>
          <strong>Impressum</strong>
        </p>
        <p>Informationspflicht laut § 5 TMG.</p>
        <p>
          Schwan Communications
          <br />
          Valentinskamp 45a,
          <br />
          20355 Hamburg,
          <br />
          Deutschland
        </p>
        <p>
          <strong>UID-Nummer:</strong>
          DE297759011
        </p>
        <p>
          <strong>Tel.:</strong>
          040 / 466 372 94
          <br />
          <strong>Fax:</strong>
          040 / 466 372 96
          <br />
          <strong>E-Mail:</strong>
          <a href="mailto:info@schwan-communications.com">
            <u>info@schwan-communications.com</u>
          </a>
        </p>
        <p>
          Quelle: Erstellt mit dem
          <a
            href="https://www.adsimple.de/impressum-generator/"
            target="Impressum Generator Deutschland"
          >
            <u>Impressum Generator</u>
          </a>
          von AdSimple in Kooperation mit
          <a
            href="https://www.hashtagbeauty.de/"
            target="_blank"
            rel="noreferrer"
          >
            <u>hashtagbeauty.de</u>
          </a>
        </p>
        <p>
          <strong>EU-Streitschlichtung</strong>
        </p>
        <p>
          Gemäß Verordnung über Online-Streitbeilegung in
          Verbraucherangelegenheiten (ODR-Verordnung) möchten wir Sie über die
          Online-Streitbeilegungsplattform (OS-Plattform) informieren.
          <br />
          Verbraucher haben die Möglichkeit, Beschwerden an die Online
          Streitbeilegungsplattform der Europäischen Kommission unter
          <a
            href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&amp;lng=DE"
            target="_blank"
            rel="noreferrer"
          >
            <u>http://ec.europa.eu/odr?tid=321196660</u>
          </a>
          zu richten. Die dafür notwendigen Kontaktdaten finden Sie oberhalb in
          unserem Impressum.
        </p>
        <p>
          Wir möchten Sie jedoch darauf hinweisen, dass wir nicht bereit oder
          verpflichtet sind, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <p>
          <strong>Haftung für Inhalte dieser Website</strong>
        </p>
        <p>
          Wir entwickeln die Inhalte dieser Webseite ständig weiter und bemühen
          uns korrekte und aktuelle Informationen bereitzustellen. Laut
          Telemediengesetz
          <a
            href="https://www.gesetze-im-internet.de/tmg/__7.html?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>(TMG) §7 (1)</u>
          </a>
          sind wir als Diensteanbieter für eigene Informationen, die wir zur
          Nutzung bereitstellen, nach den allgemeinen Gesetzen verantwortlich.
          Leider können wir keine Haftung für die Korrektheit aller Inhalte auf
          dieser Webseite übernehmen, speziell für jene die seitens Dritter
          bereitgestellt wurden. Als Diensteanbieter im Sinne der §§ 8 bis 10
          sind wir nicht verpflichtet, die von ihnen übermittelten oder
          gespeicherten Informationen zu überwachen oder nach Umständen zu
          forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>
        <p>
          Unsere Verpflichtungen zur Entfernung von Informationen oder zur
          Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
          aufgrund von gerichtlichen oder behördlichen Anordnungen bleiben auch
          im Falle unserer Nichtverantwortlichkeit nach den §§ 8 bis 10
          unberührt.
        </p>
        <p>
          Sollten Ihnen problematische oder rechtswidrige Inhalte auffallen,
          bitte wir Sie uns umgehend zu kontaktieren, damit wir die
          rechtswidrigen Inhalte entfernen können. Sie finden die Kontaktdaten
          im Impressum.
        </p>
        <p>
          <strong>Haftung für Links auf dieser Website</strong>
        </p>
        <p>
          Unsere Webseite enthält Links zu anderen Webseiten für deren Inhalt
          wir nicht verantwortlich sind. Haftung für verlinkte Websites besteht
          für uns nicht, da wir keine Kenntnis rechtswidriger Tätigkeiten hatten
          und haben, uns solche Rechtswidrigkeiten auch bisher nicht aufgefallen
          sind und wir Links sofort entfernen würden, wenn uns
          Rechtswidrigkeiten bekannt werden.
        </p>
        <p>
          Wenn Ihnen rechtswidrige Links auf unserer Website auffallen, bitte
          wir Sie uns zu kontaktieren. Sie finden die Kontaktdaten im Impressum.
        </p>
        <p>
          <strong>Urheberrechtshinweis</strong>
        </p>
        <p>
          Alle Inhalte dieser Webseite (Bilder, Fotos, Texte, Videos)
          unterliegen dem Urheberrecht der Bundesrepublik Deutschland. Bitte
          fragen Sie uns bevor Sie die Inhalte dieser Website verbreiten,
          vervielfältigen oder verwerten wie zum Beispiel auf anderen Websites
          erneut veröffentlichen. Falls notwendig, werden wir die unerlaubte
          Nutzung von Teilen der Inhalte unserer Seite rechtlich verfolgen.
        </p>
        <p>
          Sollten Sie auf dieser Webseite Inhalte finden, die das Urheberrecht
          verletzen, bitten wir Sie uns zu kontaktieren.
        </p>
        <p>
          <strong>Bildernachweis</strong>
        </p>
        <p>
          Die Bilder, Fotos und Grafiken auf dieser Webseite sind
          urheberrechtlich geschützt.
        </p>
        <p>
          Die Bilderrechte liegen bei den folgenden Fotografen und Unternehmen:
        </p>
        <ul>
          <li>
            <p>Fotograf Mustermann</p>
          </li>
        </ul>
        <p>
          <strong>Datenschutzerklärung</strong>
        </p>
        <p>
          <strong>Datenschutz</strong>
        </p>
        <p>
          Wir haben diese Datenschutzerklärung (Fassung 21.07.2020-321196660)
          verfasst, um Ihnen gemäß der Vorgaben der
          <a
            href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679&amp;tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>Datenschutz-Grundverordnung (EU) 2016/679</u>
          </a>
          zu erklären, welche Informationen wir sammeln, wie wir Daten verwenden
          und welche Entscheidungsmöglichkeiten Sie als Besucher dieser Webseite
          haben.
        </p>
        <p>
          Leider liegt es in der Natur der Sache, dass diese Erklärungen sehr
          technisch klingen, wir haben uns bei der Erstellung jedoch bemüht die
          wichtigsten Dinge so einfach und klar wie möglich zu beschreiben.
        </p>
        <p>
          <strong>Automatische Datenspeicherung</strong>
        </p>
        <p>
          Wenn Sie heutzutage Webseiten besuchen, werden gewisse Informationen
          automatisch erstellt und gespeichert, so auch auf dieser Webseite.
        </p>
        <p>
          Wenn Sie unsere Webseite so wie jetzt gerade besuchen, speichert unser
          Webserver (Computer auf dem diese Webseite gespeichert ist)
          automatisch Daten wie
        </p>
        <ul>
          <li>
            <p>die Adresse (URL) der aufgerufenen Webseite</p>
          </li>
          <li>
            <p>Browser und Browserversion</p>
          </li>
          <li>
            <p>das verwendete Betriebssystem</p>
          </li>
          <li>
            <p>die Adresse (URL) der zuvor besuchten Seite (Referrer URL)</p>
          </li>
          <li>
            <p>
              den Hostname und die IP-Adresse des Geräts von welchem aus
              zugegriffen wird
            </p>
          </li>
          <li>
            <p>Datum und Uhrzeit</p>
          </li>
        </ul>
        <p>in Dateien (Webserver-Logfiles).</p>
        <p>
          In der Regel werden Webserver-Logfiles zwei Wochen gespeichert und
          danach automatisch gelöscht. Wir geben diese Daten nicht weiter,
          können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von
          rechtswidrigem Verhalten eingesehen werden.
        </p>
        <p>
          <strong>Cookies</strong>
        </p>
        <p>
          Unsere Website verwendet HTTP-Cookies um nutzerspezifische Daten zu
          speichern.
          <br />
          Im Folgenden erklären wir, was Cookies sind und warum Sie genutzt
          werden, damit Sie die folgende Datenschutzerklärung besser verstehen.
        </p>
        <p>
          <strong>Was genau sind Cookies?</strong>
        </p>
        <p>
          Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser.
          Bekannte Browser sind beispielsweise Chrome, Safari, Firefox, Internet
          Explorer und Microsoft Edge. Die meisten Webseiten speichern kleine
          Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.
        </p>
        <p>
          Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche
          Helferlein. Fast alle Webseiten verwenden Cookies. Genauer gesprochen
          sind es HTTP-Cookies, da es auch noch andere Cookies für andere
          Anwendungsbereiche gibt. HTTP-Cookies sind kleine Dateien, die von
          unserer Website auf Ihrem Computer gespeichert werden. Diese
          Cookie-Dateien werden automatisch im Cookie-Ordner, quasi dem “Hirn”
          Ihres Browsers, untergebracht. Ein Cookie besteht aus einem Namen und
          einem Wert. Bei der Definition eines Cookies müssen zusätzlich ein
          oder mehrere Attribute angegeben werden.
        </p>
        <p>
          Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise
          Sprache oder persönliche Seiteneinstellungen. Wenn Sie unsere Seite
          wieder aufrufen, übermittelt Ihr Browser die „userbezogenen“
          Informationen an unsere Seite zurück. Dank der Cookies weiß unsere
          Website, wer Sie sind und bietet Ihnen Ihre gewohnte
          Standardeinstellung. In einigen Browsern hat jedes Cookie eine eigene
          Datei, in anderen wie beispielsweise Firefox sind alle Cookies in
          einer einzigen Datei gespeichert.
        </p>
        <p>
          Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies.
          Erstanbieter-Cookies werden direkt von unserer Seite erstellt,
          Drittanbieter-Cookies werden von Partner-Webseiten (z.B. Google
          Analytics) erstellt. Jedes Cookie ist individuell zu bewerten, da
          jedes Cookie andere Daten speichert. Auch die Ablaufzeit eines Cookies
          variiert von ein paar Minuten bis hin zu ein paar Jahren. Cookies sind
          keine Software-Programme und enthalten keine Viren, Trojaner oder
          andere „Schädlinge“. Cookies können auch nicht auf Informationen Ihres
          PCs zugreifen.
        </p>
        <p>So können zum Beispiel Cookie-Daten aussehen:</p>
        <ul>
          <li>
            <p>Name: _ga</p>
          </li>
          <li>
            <p>Ablaufzeit: 2 Jahre</p>
          </li>
          <li>
            <p>Verwendung: Unterscheidung der Webseitenbesucher</p>
          </li>
          <li>
            <p>Beispielhafter Wert: GA1.2.1326744211.152321196660</p>
          </li>
        </ul>
        <p>Ein Browser sollte folgende Mindestgrößen unterstützen:</p>
        <ul>
          <li>
            <p>Ein Cookie soll mindestens 4096 Bytes enthalten können</p>
          </li>
          <li>
            <p>
              Pro Domain sollen mindestens 50 Cookies gespeichert werden können
            </p>
          </li>
          <li>
            <p>
              Insgesamt sollen mindestens 3000 Cookies gespeichert werden können
            </p>
          </li>
        </ul>
        <p>
          <strong>Welche Arten von Cookies gibt es?</strong>
        </p>
        <p>
          Die Frage welche Cookies wir im Speziellen verwenden, hängt von den
          verwendeten Diensten ab und wird in der folgenden Abschnitten der
          Datenschutzerklärung geklärt. An dieser Stelle möchten wir kurz auf
          die verschiedenen Arten von HTTP-Cookies eingehen.
        </p>
        <p>Man kann 4 Arten von Cookies unterscheiden:</p>
        <p>
          <strong>
            Unbedingt notwendige Cookies
            <br />
          </strong>
          Diese Cookies sind nötig, um grundlegende Funktionen der Website
          sicherzustellen. Zum Beispiel braucht es diese Cookies, wenn ein User
          ein Produkt in den Warenkorb legt, dann auf anderen Seiten weitersurft
          und später erst zur Kasse geht. Durch diese Cookies wird der Warenkorb
          nicht gelöscht, selbst wenn der User sein Browserfenster schließt.
        </p>
        <p>
          <strong>
            Funktionelle Cookies
            <br />
          </strong>
          Diese Cookies sammeln Infos über das Userverhalten und ob der User
          etwaige Fehlermeldungen bekommt. Zudem werden mithilfe dieser Cookies
          auch die Ladezeit und das Verhalten der Website bei verschiedenen
          Browsern gemessen.
        </p>
        <p>
          <strong>
            Zielorientierte Cookies
            <br />
          </strong>
          Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit.
          Beispielsweise werden eingegebene Standorte, Schriftgrößen oder
          Formulardaten gespeichert.
        </p>
        <p>
          <strong>
            Werbe-Cookies
            <br />
          </strong>
          Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu
          dem User individuell angepasste Werbung zu liefern. Das kann sehr
          praktisch, aber auch sehr nervig sein.
        </p>
        <p>
          Üblicherweise werden Sie beim erstmaligen Besuch einer Webseite
          gefragt, welche dieser Cookiearten Sie zulassen möchten. Und natürlich
          wird diese Entscheidung auch in einem Cookie gespeichert.
        </p>
        <p>
          <strong>Wie kann ich Cookies löschen?</strong>
        </p>
        <p>
          Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst.
          Unabhängig von welchem Service oder welcher Website die Cookies
          stammen, haben Sie immer die Möglichkeit Cookies zu löschen, nur
          teilweise zuzulassen oder zu deaktivieren. Zum Beispiel können Sie
          Cookies von Drittanbietern blockieren, aber alle anderen Cookies
          zulassen.
        </p>
        <p>
          Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser
          gespeichert wurden, wenn Sie Cookie-Einstellungen ändern oder löschen
          wollen, können Sie dies in Ihren Browser-Einstellungen finden:
        </p>
        <p>
          <a
            href="https://support.google.com/chrome/answer/95647?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>Chrome: Cookies in Chrome löschen, aktivieren und verwalten</u>
          </a>
        </p>
        <p>
          <a
            href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>Safari: Verwalten von Cookies und Websitedaten mit Safari</u>
          </a>
        </p>
        <p>
          <a
            href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>
              Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf
              Ihrem Computer abgelegt haben
            </u>
          </a>
        </p>
        <p>
          <a
            href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>Internet Explorer: Löschen und Verwalten von Cookies</u>
          </a>
        </p>
        <p>
          <a
            href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>Microsoft Edge: Löschen und Verwalten von Cookies</u>
          </a>
        </p>
        <p>
          Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren
          Browser so einrichten, dass er Sie immer informiert, wenn ein Cookie
          gesetzt werden soll. So können Sie bei jedem einzelnen Cookie
          entscheiden, ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise
          ist je nach Browser verschieden. Am besten ist es Sie suchen die
          Anleitung in Google mit dem Suchbegriff “Cookies löschen Chrome” oder
          “Cookies deaktivieren Chrome” im Falle eines Chrome Browsers oder
          tauschen das Wort “Chrome” gegen den Namen Ihres Browsers, z.B. Edge,
          Firefox, Safari aus.
        </p>
        <p>
          <strong>Wie sieht es mit meinem Datenschutz aus?</strong>
        </p>
        <p>
          Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist
          festgehalten, dass das Speichern von Cookies eine Einwilligung von
          Ihnen verlangt. Innerhalb der EU-Länder gibt es allerdings noch sehr
          unterschiedliche Reaktionen auf diese Richtlinien. In Deutschland
          wurden die Cookie-Richtlinien nicht als nationales Recht umgesetzt.
          Stattdessen erfolgte die Umsetzung dieser Richtlinie weitgehend in §
          15 Abs.3 des Telemediengesetzes (TMG).
        </p>
        <p>
          Wenn Sie mehr über Cookies wissen möchten und technischen
          Dokumentationen nicht scheuen, empfehlen wir
          <a
            href="https://tools.ietf.org/html/rfc6265"
            target="_blank"
            rel="noreferrer"
          >
            <u>https://tools.ietf.org/html/rfc6265</u>
          </a>
          , dem Request for Comments der Internet Engineering Task Force (IETF)
          namens “HTTP State Management Mechanism”.
        </p>
        <p>
          <strong>Speicherung persönlicher Daten</strong>
        </p>
        <p>
          Persönliche Daten, die Sie uns auf dieser Website elektronisch
          übermitteln, wie zum Beispiel Name, E-Mail-Adresse, Adresse oder
          andere persönlichen Angaben im Rahmen der Übermittlung eines Formulars
          oder Kommentaren im Blog, werden von uns gemeinsam mit dem Zeitpunkt
          und der IP-Adresse nur zum jeweils angegebenen Zweck verwendet, sicher
          verwahrt und nicht an Dritte weitergegeben.
        </p>
        <p>
          Wir nutzen Ihre persönlichen Daten somit nur für die Kommunikation mit
          jenen Besuchern, die Kontakt ausdrücklich wünschen und für die
          Abwicklung der auf dieser Webseite angebotenen Dienstleistungen und
          Produkte. Wir geben Ihre persönlichen Daten ohne Zustimmung nicht
          weiter, können jedoch nicht ausschließen, dass diese Daten beim
          Vorliegen von rechtswidrigem Verhalten eingesehen werden.
        </p>
        <p>
          Wenn Sie uns persönliche Daten per E-Mail schicken – somit abseits
          dieser Webseite – können wir keine sichere Übertragung und den Schutz
          Ihrer Daten garantieren. Wir empfehlen Ihnen, vertrauliche Daten
          niemals unverschlüsselt per E-Mail zu übermitteln.
        </p>
        <p>
          Die Rechtsgrundlage besteht nach
          <a
            href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>Artikel 6 Absatz 1 a DSGVO</u>
          </a>
          (Rechtmäßigkeit der Verarbeitung) darin, dass Sie uns die Einwilligung
          zur Verarbeitung der von Ihnen eingegebenen Daten geben. Sie können
          diesen Einwilligung jederzeit widerrufen – eine formlose E-Mail reicht
          aus, Sie finden unsere Kontaktdaten im Impressum.
        </p>
        <p>
          <strong>Rechte laut Datenschutzgrundverordnung</strong>
        </p>
        <p>
          Ihnen stehen laut den Bestimmungen der DSGVO grundsätzlich die
          folgende Rechte zu:
        </p>
        <ul>
          <li>
            <p>Recht auf Berichtigung (Artikel 16 DSGVO)</p>
          </li>
          <li>
            <p>
              Recht auf Löschung („Recht auf Vergessenwerden“) (Artikel 17
              DSGVO)
            </p>
          </li>
          <li>
            <p>Recht auf Einschränkung der Verarbeitung (Artikel 18 DSGVO)</p>
          </li>
          <li>
            <p>
              Recht auf Benachrichtigung – Mitteilungspflicht im Zusammenhang
              mit der Berichtigung oder Löschung personenbezogener Daten oder
              der Einschränkung der Verarbeitung (Artikel 19 DSGVO)
            </p>
          </li>
          <li>
            <p>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO)</p>
          </li>
          <li>
            <p>Widerspruchsrecht (Artikel 21 DSGVO)</p>
          </li>
          <li>
            <p>
              Recht, nicht einer ausschließlich auf einer automatisierten
              Verarbeitung — einschließlich Profiling — beruhenden Entscheidung
              unterworfen zu werden (Artikel 22 DSGVO)
            </p>
          </li>
        </ul>
        <p>
          Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das
          Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche
          sonst in einer Weise verletzt worden sind, können Sie sich an die
          <a href="https://www.bfdi.bund.de/" target="_blank" rel="noreferrer">
            <u>
              Bundesbeauftragte für den Datenschutz und die Informationsfreiheit
              (BfDI)
            </u>
          </a>
          wenden.
        </p>
        <p>
          <strong>Auswertung des Besucherverhaltens</strong>
        </p>
        <p>
          In der folgenden Datenschutzerklärung informieren wir Sie darüber, ob
          und wie wir Daten Ihres Besuchs dieser Website auswerten. Die
          Auswertung der gesammelten Daten erfolgt in der Regel anonym und wir
          können von Ihrem Verhalten auf dieser Website nicht auf Ihre Person
          schließen.
        </p>
        <p>
          Mehr über Möglichkeiten dieser Auswertung der Besuchsdaten zu
          widersprechen erfahren Sie in der folgenden Datenschutzerklärung.
        </p>
        <p>
          <strong>Google Fonts Datenschutzerklärung</strong>
        </p>
        <p>
          Auf unserer Website verwenden wir Google Fonts. Das sind die
          “Google-Schriften” der Firma Google Inc. Für den europäischen Raum ist
          das Unternehmen Google Ireland Limited (Gordon House, Barrow Street
          Dublin 4, Irland) für alle Google-Dienste verantwortlich.
        </p>
        <p>
          Für die Verwendung von Google-Schriftarten müssen Sie sich nicht
          anmelden bzw. ein Passwort hinterlegen. Weiters werden auch keine
          Cookies in Ihrem Browser gespeichert. Die Dateien (CSS,
          Schriftarten/Fonts) werden über die Google-Domains
          fonts.googleapis.com und fonts.gstatic.com angefordert. Laut Google
          sind die Anfragen nach CSS und Schriften vollkommen getrennt von allen
          anderen Google-Diensten. Wenn Sie ein Google-Konto haben, brauchen Sie
          keine Sorge haben, dass Ihre Google-Kontodaten, während der Verwendung
          von Google Fonts, an Google übermittelt werden. Google erfasst die
          Nutzung von CSS (Cascading Style Sheets) und der verwendeten
          Schriftarten und speichert diese Daten sicher. Wie die
          Datenspeicherung genau aussieht, werden wir uns noch im Detail
          ansehen.
        </p>
        <p>
          <strong>Was sind Google Fonts?</strong>
        </p>
        <p>
          Google Fonts (früher Google Web Fonts) ist ein Verzeichnis mit über
          800 Schriftarten, die
          <a
            href="https://de.wikipedia.org/wiki/Google_LLC?tid=321196660"
            rel="noreferrer"
          >
            <u>Google</u>
          </a>
          seinen Nutzern kostenlos zu Verfügung stellt.
        </p>
        <p>
          Viele dieser Schriftarten sind unter der SIL Open Font License
          veröffentlicht, während andere unter der Apache-Lizenz veröffentlicht
          wurden. Beides sind freie Software-Lizenzen.
        </p>
        <p>
          <strong>
            Warum verwenden wir Google Fonts auf unserer Webseite?
          </strong>
        </p>
        <p>
          Mit Google Fonts können wir auf unserer eigenen Webseite Schriften
          nutzen, doch müssen sie nicht auf unseren eigenen Server hochladen.
          Google Fonts ist ein wichtiger Baustein, um die Qualität unserer
          Webseite hoch zu halten. Alle Google-Schriften sind automatisch für
          das Web optimiert und dies spart Datenvolumen und ist speziell für die
          Verwendung mit mobilen Endgeräten ein großer Vorteil. Wenn Sie unsere
          Seite besuchen, sorgt die niedrige Dateigröße für eine schnelle
          Ladezeit. Des Weiteren sind Google Fonts sichere Web Fonts.
          Unterschiedliche Bildsynthese-Systeme (Rendering) in verschiedenen
          Browsern, Betriebssystemen und mobilen Endgeräten können zu Fehlern
          führen. Solche Fehler können teilweise Texte bzw. ganze Webseiten
          optisch verzerren. Dank des schnellen Content Delivery Networks (CDN)
          gibt es mit Google Fonts keine plattformübergreifenden Probleme.
          Google Fonts unterstützt alle gängigen Browser (Google Chrome, Mozilla
          Firefox, Apple Safari, Opera) und funktioniert zuverlässig auf den
          meisten modernen mobilen Betriebssystemen, einschließlich Android 2.2+
          und iOS 4.2+ (iPhone, iPad, iPod). Wir verwenden die Google Fonts
          also, damit wir unser gesamtes Online-Service so schön und einheitlich
          wie möglich darstellen können.
        </p>
        <p>
          <strong>Welche Daten werden von Google gespeichert?</strong>
        </p>
        <p>
          Wenn Sie unsere Webseite besuchen, werden die Schriften über einen
          Google-Server nachgeladen. Durch diesen externen Aufruf werden Daten
          an die Google-Server übermittelt. So erkennt Google auch, dass Sie
          bzw. Ihre IP-Adresse unsere Webseite besuchen. Die Google Fonts API
          wurde entwickelt, um Verwendung, Speicherung und Erfassung von
          Endnutzerdaten auf das zu reduzieren, was für eine ordentliche
          Bereitstellung von Schriften nötig ist. API steht übrigens für
          „Application Programming Interface“ und dient unter anderem als
          Datenübermittler im Softwarebereich.
        </p>
        <p>
          Google Fonts speichert CSS- und Schrift-Anfragen sicher bei Google und
          ist somit geschützt. Durch die gesammelten Nutzungszahlen kann Google
          feststellen, wie gut die einzelnen Schriften ankommen. Die Ergebnisse
          veröffentlicht Google auf internen Analyseseiten, wie beispielsweise
          Google Analytics. Zudem verwendet Google auch Daten des eigenen
          Web-Crawlers, um festzustellen, welche Webseiten Google-Schriften
          verwenden. Diese Daten werden in der BigQuery-Datenbank von Google
          Fonts veröffentlicht. Unternehmer und Entwickler nützen das
          Google-Webservice BigQuery, um große Datenmengen untersuchen und
          bewegen zu können.
        </p>
        <p>
          Zu bedenken gilt allerdings noch, dass durch jede Google Font Anfrage
          auch Informationen wie Spracheinstellungen, IP-Adresse, Version des
          Browsers, Bildschirmauflösung des Browsers und Name des Browsers
          automatisch an die Google-Server übertragen werden. Ob diese Daten
          auch gespeichert werden, ist nicht klar feststellbar bzw. wird von
          Google nicht eindeutig kommuniziert.
        </p>
        <p>
          <strong>Wie lange und wo werden die Daten gespeichert?</strong>
        </p>
        <p>
          Anfragen für CSS-Assets speichert Google einen Tag lang auf seinen
          Servern, die hauptsächlich außerhalb der EU angesiedelt sind. Das
          ermöglicht uns, mithilfe eines Google-Stylesheets die Schriftarten zu
          nutzen. Ein Stylesheet ist eine Formatvorlage, über die man einfach
          und schnell z.B. das Design bzw. die Schriftart einer Webseite ändern
          kann.
        </p>
        <p>
          Die Font-Dateien werden bei Google ein Jahr gespeichert. Google
          verfolgt damit das Ziel, die Ladezeit von Webseiten grundsätzlich zu
          verbessern. Wenn Millionen von Webseiten auf die gleichen Schriften
          verweisen, werden sie nach dem ersten Besuch zwischengespeichert und
          erscheinen sofort auf allen anderen später besuchten Webseiten wieder.
          Manchmal aktualisiert Google Schriftdateien, um die Dateigröße zu
          reduzieren, die Abdeckung von Sprache zu erhöhen und das Design zu
          verbessern.
        </p>
        <p>
          <strong>
            Wie kann ich meine Daten löschen bzw. die Datenspeicherung
            verhindern?
          </strong>
        </p>
        <p>
          Jene Daten, die Google für einen Tag bzw. ein Jahr speichert können
          nicht einfach gelöscht werden. Die Daten werden beim Seitenaufruf
          automatisch an Google übermittelt. Um diese Daten vorzeitig löschen zu
          können, müssen Sie den Google-Support auf
          <a href="https://support.google.com/?hl=de&amp;tid=321196660">
            <u>https://support.google.com/?hl=de&amp;tid=321196660</u>
          </a>
          kontaktieren. Datenspeicherung verhindern Sie in diesem Fall nur, wenn
          Sie unsere Seite nicht besuchen.
        </p>
        <p>
          Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten
          Zugriff auf alle Schriftarten. Wir können also unlimitiert auf ein
          Meer an Schriftarten zugreifen und so das Optimum für unsere Webseite
          rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie auf
          <a href="https://developers.google.com/fonts/faq?tid=321196660">
            <u>https://developers.google.com/fonts/faq?tid=321196660</u>
          </a>
          . Dort geht zwar Google auf datenschutzrelevante Angelegenheiten ein,
          doch wirklich detaillierte Informationen über Datenspeicherung sind
          nicht enthalten. Es ist relativ schwierig, von Google wirklich präzise
          Informationen über gespeicherten Daten zu bekommen.
        </p>
        <p>
          Welche Daten grundsätzlich von Google erfasst werden und wofür diese
          Daten verwendet werden, können Sie auch auf
          <a href="https://policies.google.com/privacy?hl=de&amp;tid=321196660">
            <u>https://www.google.com/intl/de/policies/privacy/</u>
          </a>
          nachlesen.
        </p>
        <p>
          <strong>Google Fonts Lokal Datenschutzerklärung</strong>
        </p>
        <p>
          Auf unserer Website nutzen wir Google Fonts der Firma Google Inc. Für
          den europäischen Raum ist das Unternehmen Google Ireland Limited
          (Gordon House, Barrow Street Dublin 4, Irland) verantwortlich. Wir
          haben die Google-Schriftarten lokal, d.h. auf unserem Webserver –
          nicht auf den Servern von Google – eingebunden. Dadurch gibt es keine
          Verbindung zu Google-Servern und somit auch keine Datenübertragung
          oder Speicherung.
        </p>
        <p>
          <strong>Was sind Google Fonts?</strong>
        </p>
        <p>
          Früher nannte man Google Fonts auch Google Web Fonts. Dabei handelt es
          sich um ein interaktives Verzeichnis mit über 800 Schriftarten, die
          <a href="https://de.wikipedia.org/wiki/Google_LLC?tid=321196660">
            <u>Google</u>
          </a>
          kostenlos bereitstellt. Mit Google Fonts könnte man Schriften nutzen,
          ohne sie auf den eigenen Server hochzuladen. Doch um diesbezüglich
          jede Informationsübertragung zu Google-Servern zu unterbinden, haben
          wir die Schriftarten auf unseren Server heruntergeladen. Auf diese
          Weise handeln wir datenschutzkonform und senden keine Daten an Google
          Fonts weiter.
        </p>
        <p>
          Anders als andere Web-Schriften erlaubt uns Google uneingeschränkten
          Zugriff auf alle Schriftarten. Wir können also unlimitiert auf ein
          Meer an Schriftarten zugreifen und so das Optimum für unsere Webseite
          rausholen. Mehr zu Google Fonts und weiteren Fragen finden Sie auf
          <a href="https://developers.google.com/fonts/faq?tid=321196660">
            <u>https://developers.google.com/fonts/faq?tid=321196660</u>
          </a>
          .
        </p>
        <p>
          <strong>Google Analytics Datenschutzerklärung</strong>
        </p>
        <p>
          Wir verwenden auf unserer Website das Analyse-Tracking Tool Google
          Analytics (GA) des amerikanischen Unternehmens Google Inc. Für den
          europäischen Raum ist das Unternehmen Google Ireland Limited (Gordon
          House, Barrow Street Dublin 4, Irland) für alle Google-Dienste
          verantwortlich. Google Analytics sammelt Daten über Ihre Handlungen
          auf unserer Website. Wenn Sie beispielsweise einen Link anklicken,
          wird diese Aktion in einem Cookie gespeichert und an Google Analytics
          versandt. Mithilfe der Berichte, die wir von Google Analytics
          erhalten, können wir unsere Website und unser Service besser an Ihre
          Wünsche anpassen. Im Folgenden gehen wir näher auf das Tracking Tool
          ein und informieren Sie vor allem darüber, welche Daten gespeichert
          werden und wie Sie das verhindern können.
        </p>
        <p>
          <strong>Was ist Google Analytics?</strong>
        </p>
        <p>
          Google Analytics ist ein Trackingtool, das der Datenverkehrsanalyse
          unserer Website dient. Damit Google Analytics funktioniert, wird ein
          Tracking-Code in den Code unserer Website eingebaut. Wenn Sie unsere
          Website besuchen, zeichnet dieser Code verschiedene Handlungen auf,
          die Sie auf unserer Website ausführen. Sobald Sie unsere Website
          verlassen, werden diese Daten an die Google-Analytics-Server gesendet
          und dort gespeichert.
        </p>
        <p>
          Google verarbeitet die Daten und wir bekommen Berichte über Ihr
          Userverhalten. Dabei kann es sich unter anderem um folgende Berichte
          handeln:
        </p>
        <ul>
          <li>
            <p>
              Zielgruppenberichte: Über Zielgruppenberichte lernen wir unsere
              User besser kennen und wissen genauer, wer sich für unser Service
              interessiert.
            </p>
          </li>
          <li>
            <p>
              Anzeigeberichte: Durch Anzeigeberichte können wir unsere
              Onlinewerbung leichter analysieren und verbessern.
            </p>
          </li>
          <li>
            <p>
              Akquisitionsberichte: Akquisitionsberichte geben uns hilfreiche
              Informationen darüber, wie wir mehr Menschen für unser Service
              begeistern können.
            </p>
          </li>
          <li>
            <p>
              Verhaltensberichte: Hier erfahren wir, wie Sie mit unserer Website
              interagieren. Wir können nachvollziehen welchen Weg Sie auf
              unserer Seite zurücklegen und welche Links Sie anklicken.
            </p>
          </li>
          <li>
            <p>
              Conversionsberichte: Conversion nennt man einen Vorgang, bei dem
              Sie aufgrund einer Marketing-Botschaft eine gewünschte Handlung
              ausführen. Zum Beispiel, wenn Sie von einem reinen Websitebesucher
              zu einem Käufer oder Newsletter-Abonnent werden. Mithilfe dieser
              Berichte erfahren wir mehr darüber, wie unsere Marketing-Maßnahmen
              bei Ihnen ankommen. So wollen wir unsere Conversionrate steigern.
            </p>
          </li>
          <li>
            <p>
              Echtzeitberichte: Hier erfahren wir immer sofort, was gerade auf
              unserer Website passiert. Zum Beispiel sehen wir wie viele User
              gerade diesen Text lesen.
            </p>
          </li>
        </ul>
        <p>
          <strong>
            Warum verwenden wir Google Analytics auf unserer Webseite?
          </strong>
        </p>
        <p>
          Unser Ziel mit dieser Website ist klar: Wir wollen Ihnen das
          bestmögliche Service bieten. Die Statistiken und Daten von Google
          Analytics helfen uns dieses Ziel zu erreichen.
        </p>
        <p>
          Die statistisch ausgewerteten Daten zeigen uns ein klares Bild von den
          Stärken und Schwächen unserer Website. Einerseits können wir unsere
          Seite so optimieren, dass sie von interessierten Menschen auf Google
          leichter gefunden wird. Andererseits helfen uns die Daten, Sie als
          Besucher besser zu verstehen. Wir wissen somit sehr genau, was wir an
          unserer Website verbessern müssen, um Ihnen das bestmögliche Service
          zu bieten. Die Daten dienen uns auch, unsere Werbe- und
          Marketing-Maßnahmen individueller und kostengünstiger durchzuführen.
          Schließlich macht es nur Sinn, unsere Produkte und Dienstleistungen
          Menschen zu zeigen, die sich dafür interessieren.
        </p>
        <p>
          <strong>Welche Daten werden von Google Analytics gespeichert?</strong>
        </p>
        <p>
          Google Analytics erstellt mithilfe eines Tracking-Codes eine
          zufällige, eindeutige ID, die mit Ihrem Browser-Cookie verbunden ist.
          So erkennt Sie Google Analytics als neuen User. Wenn Sie das nächste
          Mal unsere Seite besuchen, werden Sie als „wiederkehrender“ User
          erkannt. Alle gesammelten Daten werden gemeinsam mit dieser User-ID
          gespeichert. So ist es überhaupt erst möglich pseudonyme Userprofile
          auszuwerten.
        </p>
        <p>
          Durch Kennzeichnungen wie Cookies und App-Instanz-IDs werden Ihre
          Interaktionen auf unserer Website gemessen. Interaktionen sind alle
          Arten von Handlungen, die Sie auf unserer Website ausführen. Wenn Sie
          auch andere Google-Systeme (wie z.B. ein Google-Konto) nützen, können
          über Google Analytics generierte Daten mit Drittanbieter-Cookies
          verknüpft werden. Google gibt keine Google Analytics-Daten weiter,
          außer wir als Websitebetreiber genehmigen das. Zu Ausnahmen kann es
          kommen, wenn es gesetzlich erforderlich ist.
        </p>
        <p>Folgende Cookies werden von Google Analytics verwendet:</p>
        <p>
          <strong>Name:</strong>
          _ga
          <br />
          <strong>Wert: </strong>
          2.1326744211.152321196660-5
          <br />
          <strong>Verwendungszweck:</strong>
          Standardmäßig verwendet analytics.js das Cookie _ga, um die User-ID zu
          speichern. Grundsätzlich dient es zur Unterscheidung der
          Webseitenbesucher.
          <br />
          <strong>Ablaufdatum:</strong>
          nach 2 Jahren
        </p>
        <p>
          <strong>Name:</strong>
          _gid
          <br />
          <strong>Wert: </strong>
          2.1687193234.152321196660-1
          <br />
          <strong>Verwendungszweck:</strong>
          Das Cookie dient auch zur Unterscheidung der Webseitenbesucher.
          <br />
          <strong>Ablaufdatum:</strong>
          nach 24 Stunden
        </p>
        <p>
          <strong>Name:</strong>
          _gat_gtag_UA_&lt;property-id&gt;
          <br />
          <strong>Wert:</strong>
          1
          <br />
          <strong>Verwendungszweck:</strong>
          Wird zum Senken der Anforderungsrate verwendet. Wenn Google Analytics
          über den Google Tag Manager bereitgestellt wird, erhält dieser Cookie
          den Namen _dc_gtm_ &lt;property-id&gt;.
          <br />
          <strong>Ablaufdatum: </strong>
          nach 1 Minute
        </p>
        <p>
          <strong>Name:</strong>
          AMP_TOKEN
          <br />
          <strong>Wert:</strong>
          keine Angaben
          <br />
          <strong>Verwendungszweck:</strong>
          Das Cookie hat einen Token, mit dem eine User ID vom
          AMP-Client-ID-Dienst abgerufen werden kann. Andere mögliche Werte
          weisen auf eine Abmeldung, eine Anfrage oder einen Fehler hin.
          <br />
          <strong>Ablaufdatum:</strong>
          nach 30 Sekunden bis zu einem Jahr
        </p>
        <p>
          <strong>Name:</strong>
          __utma
          <br />
          <strong>Wert: </strong>
          1564498958.1564498958.1564498958.1
          <br />
          <strong>Verwendungszweck:</strong>
          Mit diesem Cookie kann man Ihr Verhalten auf der Website verfolgen und
          die Leistung messen. Das Cookie wird jedes Mal aktualisiert, wenn
          Informationen an Google Analytics gesendet werden.
          <br />
          <strong>Ablaufdatum:</strong>
          nach 2 Jahren
        </p>
        <p>
          <strong>Name:</strong>
          __utmt
          <br />
          <strong>Wert:</strong>
          1
          <br />
          <strong>Verwendungszweck:</strong>
          Das Cookie wird wie _gat_gtag_UA_&lt;property-id&gt; zum Drosseln der
          Anforderungsrate verwendet.
          <br />
          <strong>Ablaufdatum:</strong>
          nach 10 Minuten
        </p>
        <p>
          <strong>Name:</strong>
          __utmb
          <br />
          <strong>Wert: </strong>
          3.10.1564498958
          <br />
          <strong>Verwendungszweck:</strong>
          Dieses Cookie wird verwendet, um neue Sitzungen zu bestimmen. Es wird
          jedes Mal aktualisiert, wenn neue Daten bzw. Infos an Google Analytics
          gesendet werden.
          <br />
          <strong>Ablaufdatum:</strong>
          nach 30 Minuten
        </p>
        <p>
          <strong>Name:</strong>
          __utmc
          <br />
          <strong>Wert:</strong>
          167421564
          <br />
          <strong>Verwendungszweck:</strong>
          Dieses Cookie wird verwendet, um neue Sitzungen für wiederkehrende
          Besucher festzulegen. Dabei handelt es sich um ein Session-Cookie, und
          es wird nur solange gespeichert, bis Sie den Browser wieder schließen.
          <br />
          <strong>Ablaufdatum:</strong>
          Nach Schließung des Browsers
        </p>
        <p>
          <strong>Name:</strong>
          __utmz
          <br />
          <strong>Wert:</strong>
          m|utmccn=(referral)|utmcmd=referral|utmcct=/
          <br />
          <strong>Verwendungszweck:</strong>
          Das Cookie wird verwendet, um die Quelle des Besucheraufkommens auf
          unserer Website zu identifizieren. Das heißt, das Cookie speichert,
          von wo Sie auf unsere Website gekommen sind. Das kann eine andere
          Seite bzw. eine Werbeschaltung gewesen sein.
          <br />
          <strong>Ablaufdatum:</strong>
          nach 6 Monaten
        </p>
        <p>
          <strong>Name:</strong>
          __utmv
          <br />
          <strong>Wert:</strong>
          keine Angabe
          <br />
          <strong>Verwendungszweck:</strong>
          Das Cookie wird verwendet, um benutzerdefinierte Userdaten zu
          speichern. Es wird immer aktualisiert, wenn Informationen an Google
          Analytics gesendet werden.
          <br />
          <strong>Ablaufdatum:</strong>
          nach 2 Jahren
        </p>
        <p>
          <strong>Anmerkung:</strong>
          Diese Aufzählung kann keinen Anspruch auf Vollständigkeit erheben, da
          Google die Wahl seiner Cookies immer wieder verändert.
        </p>
        <p>
          Hier zeigen wir Ihnen einen Überblick über die wichtigsten Daten, die
          mit Google Analytics erhoben werden:
        </p>
        <p>
          <strong>Heatmaps:</strong>
          Google legt sogenannte Heatmaps an. Über Heatmaps sieht man genau jene
          Bereiche, die Sie anklicken. So bekommen wir Informationen, wo Sie auf
          unserer Seite „unterwegs“ sind.
        </p>
        <p>
          <strong>Sitzungsdauer:</strong>
          Als Sitzungsdauer bezeichnet Google die Zeit, die Sie auf unserer
          Seite verbringen, ohne die Seite zu verlassen. Wenn Sie 20 Minuten
          inaktiv waren, endet die Sitzung automatisch.
        </p>
        <p>
          <strong>Absprungrate</strong>
          (engl. Bouncerate): Von einem Absprung ist die Rede, wenn Sie auf
          unserer Website nur eine Seite ansehen und dann unsere Website wieder
          verlassen.
        </p>
        <p>
          <strong>Kontoerstellung:</strong>
          Wenn Sie auf unserer Website ein Konto erstellen bzw. eine Bestellung
          machen, erhebt Google Analytics diese Daten.
        </p>
        <p>
          <strong>IP-Adresse:</strong>
          Die IP-Adresse wird nur in gekürzter Form dargestellt, damit keine
          eindeutige Zuordnung möglich ist.
        </p>
        <p>
          <strong>Standort:</strong>
          Über die IP-Adresse kann das Land und Ihr ungefährer Standort bestimmt
          werden. Diesen Vorgang bezeichnet man auch als IP- Standortbestimmung.
        </p>
        <p>
          <strong>Technische Informationen:</strong>
          Zu den technischen Informationen zählen unter anderem Ihr Browsertyp,
          Ihr Internetanbieter oder Ihre Bildschirmauflösung.
        </p>
        <p>
          <strong>Herkunftsquelle:</strong>
          Google Analytics beziehungsweise uns, interessiert natürlich auch über
          welche Website oder welche Werbung Sie auf unsere Seite gekommen sind.
        </p>
        <p>
          Weitere Daten sind Kontaktdaten, etwaige Bewertungen, das Abspielen
          von Medien (z.B., wenn Sie ein Video über unsere Seite abspielen), das
          Teilen von Inhalten über Social Media oder das Hinzufügen zu Ihren
          Favoriten. Die Aufzählung hat keinen Vollständigkeitsanspruch und
          dient nur zu einer allgemeinen Orientierung der Datenspeicherung durch
          Google Analytics.
        </p>
        <p>
          <strong>Wie lange und wo werden die Daten gespeichert?</strong>
        </p>
        <p>
          Google hat Ihre Server auf der ganzen Welt verteilt. Die meisten
          Server befinden sich in Amerika und folglich werden Ihre Daten meist
          auf amerikanischen Servern gespeichert. Hier können Sie genau
          nachlesen wo sich die Google-Rechenzentren befinden:
          <a
            href="https://www.google.com/about/datacenters/inside/locations/?hl=de"
            target="_blank"
            rel="noreferrer"
          >
            <u>
              https://www.google.com/about/datacenters/inside/locations/?hl=de
            </u>
          </a>
        </p>
        <p>
          Ihre Daten werden auf verschiedenen physischen Datenträgern verteilt.
          Das hat den Vorteil, dass die Daten schneller abrufbar sind und vor
          Manipulation besser geschützt sind. In jedem Google-Rechenzentrum gibt
          es entsprechende Notfallprogramme für Ihre Daten. Wenn beispielsweise
          die Hardware bei Google ausfällt oder Naturkatastrophen Server
          lahmlegen, bleibt das Risiko einer Dienstunterbrechung bei Google
          dennoch gering.
        </p>
        <p>
          Standardisiert ist bei Google Analytics eine Aufbewahrungsdauer Ihrer
          Userdaten von 26 Monaten eingestellt. Dann werden Ihre Userdaten
          gelöscht. Allerdings haben wir die Möglichkeit, die Aufbewahrungsdauer
          von Nutzdaten selbst zu wählen. Dafür stehen uns fünf Varianten zur
          Verfügung:
        </p>
        <ul>
          <li>
            <p>Löschung nach 14 Monaten</p>
          </li>
          <li>
            <p>Löschung nach 26 Monaten</p>
          </li>
          <li>
            <p>Löschung nach 38 Monaten</p>
          </li>
          <li>
            <p>Löschung nach 50 Monaten</p>
          </li>
          <li>
            <p>Keine automatische Löschung</p>
          </li>
        </ul>
        <p>
          Wenn der festgelegte Zeitraum abgelaufen ist, werden einmal im Monat
          die Daten gelöscht. Diese Aufbewahrungsdauer gilt für Ihre Daten, die
          mit Cookies, Usererkennung und Werbe-IDs (z.B. Cookies der
          DoubleClick-Domain) verknüpft sind. Berichtergebnisse basieren auf
          aggregierten Daten und werden unabhängig von Nutzerdaten gespeichert.
          Aggregierte Daten sind eine Zusammenschmelzung von Einzeldaten zu
          einer größeren Einheit.
        </p>
        <p>
          <strong>
            Wie kann ich meine Daten löschen bzw. die Datenspeicherung
            verhindern?
          </strong>
        </p>
        <p>
          Nach dem Datenschutzrecht der Europäischen Union haben Sie das Recht,
          Auskunft über Ihre Daten zu erhalten, sie zu aktualisieren, zu löschen
          oder einzuschränken. Mithilfe des Browser-Add-ons zur Deaktivierung
          von Google Analytics-JavaScript (ga.js, analytics.js, dc.js)
          verhindern Sie, dass Google Analytics Ihre Daten verwendet. Das
          Browser-Add-on können Sie unter
          <a
            href="https://tools.google.com/dlpage/gaoptout?hl=de"
            target="_blank"
            rel="noreferrer"
          >
            <u>https://tools.google.com/dlpage/gaoptout?hl=de</u>
          </a>
          runterladen und installieren. Beachten Sie bitte, dass durch dieses
          Add-on nur die Datenerhebung durch Google Analytics deaktiviert wird.
        </p>
        <p>
          Falls Sie grundsätzlich Cookies (unabhängig von Google Analytics)
          deaktivieren, löschen oder verwalten wollen, gibt es für jeden Browser
          eine eigene Anleitung:
        </p>
        <p>
          <a
            href="https://support.google.com/chrome/answer/95647?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>Chrome: Cookies in Chrome löschen, aktivieren und verwalten</u>
          </a>
        </p>
        <p>
          <a
            href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>Safari: Verwalten von Cookies und Websitedaten mit Safari</u>
          </a>
        </p>
        <p>
          <a
            href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>
              Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf
              Ihrem Computer abgelegt haben
            </u>
          </a>
        </p>
        <p>
          <a
            href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>Internet Explorer: Löschen und Verwalten von Cookies</u>
          </a>
        </p>
        <p>
          <a
            href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>Microsoft Edge: Löschen und Verwalten von Cookies</u>
          </a>
        </p>
        <p>
          Google Analytics ist aktiver Teilnehmer beim EU-U.S. Privacy Shield
          Framework, wodurch der korrekte und sichere Datentransfer persönlicher
          Daten geregelt wird. Mehr Informationen dazu finden Sie auf
          <a
            href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI"
            target="_blank"
            rel="noreferrer"
          >
            <u>
              https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&amp;tid=321196660
            </u>
          </a>
          . Wir hoffen wir konnten Ihnen die wichtigsten Informationen rund um
          die Datenverarbeitung von Google Analytics näherbringen. Wenn Sie mehr
          über den Tracking-Dienst erfahren wollen, empfehlen wir diese beiden
          Links:
          <a
            href="http://www.google.com/analytics/terms/de.html"
            target="_blank"
            rel="noreferrer"
          >
            <u>http://www.google.com/analytics/terms/de.html</u>
          </a>
          und
          <a
            href="https://support.google.com/analytics/answer/6004245?hl=de"
            target="_blank"
            rel="noreferrer"
          >
            <u>https://support.google.com/analytics/answer/6004245?hl=de</u>
          </a>
          .
        </p>
        <p>
          <strong>Google Analytics IP-Anonymisierung</strong>
        </p>
        <p>
          Wir haben auf dieser Webseite die IP-Adressen-Anonymisierung von
          Google Analytics implementiert. Diese Funktion wurde von Google
          entwickelt, damit diese Webseite die geltenden Datenschutzbestimmungen
          und Empfehlungen der lokalen Datenschutzbehörden einhalten kann, wenn
          diese eine Speicherung der vollständigen IP-Adresse untersagen. Die
          Anonymisierung bzw. Maskierung der IP findet statt, sobald die
          IP-Adressen im Google Analytics-Datenerfassungsnetzwerk eintreffen und
          bevor eine Speicherung oder Verarbeitung der Daten stattfindet.
        </p>
        <p>
          Mehr Informationen zur IP-Anonymisierung finden Sie auf
          <a
            href="https://support.google.com/analytics/answer/2763052?hl=de"
            target="_blank"
            rel="noreferrer"
          >
            <u>https://support.google.com/analytics/answer/2763052?hl=de</u>
          </a>
          .
        </p>
        <p>
          <strong>
            Google Analytics Berichte zu demografischen Merkmalen und Interessen
          </strong>
        </p>
        <p>
          Wir haben in Google Analytics die Funktionen für Werbeberichte
          eingeschaltet. Die Berichte zu demografischen Merkmalen und Interessen
          enthalten Angaben zu Alter, Geschlecht und Interessen. Damit können
          wir uns – ohne diese Daten einzelnen Personen zuordnen zu können – ein
          besseres Bild von unseren Nutzern machen. Mehr über die
          Werbefunktionen erfahren Sie
          <a
            href="https://support.google.com/analytics/answer/3450482?hl=de_AT&amp;utm_id=ad"
            target="_blank"
            rel="noreferrer"
          >
            <u>
              auf
              https://support.google.com/analytics/answer/3450482?hl=de_AT&amp;utm_id=ad
            </u>
          </a>
          .
        </p>
        <p>
          Sie können die Nutzung der Aktivitäten und Informationen Ihres Google
          Kontos unter “Einstellungen für Werbung” auf
          <a href="https://adssettings.google.com/authenticated">
            <u>https://adssettings.google.com/authenticated</u>
          </a>
          per Checkbox beenden.
        </p>
        <p>
          <strong>Google Analytics Deaktivierungslink</strong>
        </p>
        <p>
          Wenn Sie auf folgenden <strong>Deaktivierungslink</strong> klicken,
          können Sie verhindern, dass Google weitere Besuche auf dieser Webseite
          erfasst. Achtung: Das Löschen von Cookies, die Nutzung des
          Inkognito/Privatmodus Ihres Browsers, oder die Nutzung eines anderen
          Browsers führt dazu, dass wieder Daten erhoben werden.
        </p>
        <p>Google Analytics deaktivieren</p>
        <p>
          <strong>Google Analytics Zusatz zur Datenverarbeitung</strong>
        </p>
        <p>
          Wir haben mit Google einen Direktkundenvertrag zur Verwendung von
          Google Analytics abgeschlossen, indem wir den “Zusatz zur
          Datenverarbeitung” in Google Analytics akzeptiert haben.
        </p>
        <p>
          Mehr über den Zusatz zur Datenverarbeitung für Google Analytics finden
          Sie hier:
          <a
            href="https://support.google.com/analytics/answer/3379636?hl=de&amp;utm_id=ad"
            target="_blank"
            rel="noreferrer"
          >
            <u>
              https://support.google.com/analytics/answer/3379636?hl=de&amp;utm_id=ad
            </u>
          </a>
        </p>
        <p>
          <strong>Google Analytics Google-Signale Datenschutzerklärung</strong>
        </p>
        <p>
          Wir haben in Google Analytics die Google-Signale aktiviert. So werden
          die bestehenden Google-Analytics-Funktionen (Werbeberichte,
          Remarketing, gerätübergreifende Berichte und Berichte zu Interessen
          und demografische Merkmale) aktualisiert, um zusammengefasste und
          anonymisierte Daten von Ihnen zu erhalten, sofern Sie personalisierte
          Anzeigen in Ihrem Google-Konto erlaubt haben.
        </p>
        <p>
          Das besondere daran ist, dass es sich dabei um ein
          Cross-Device-Tracking handelt. Das heißt Ihre Daten können
          geräteübergreifend analysiert werden. Durch die Aktivierung von
          Google-Signale werden Daten erfasst und mit dem Google-Konto
          verknüpft. Google kann dadurch zum Beispiel erkennen, wenn Sie auf
          unsere Webseite über ein Smartphone ein Produkt ansehen und erst
          später über einen Laptop das Produkt kaufen. Dank der Aktivierung von
          Google-Signale können wir gerätübergreifende Remarketing-Kampagnen
          starten, die sonst in dieser Form nicht möglich wären. Remarketing
          bedeutet, dass wir Ihnen auch auf anderen Webseiten unser Angebot
          zeigen können.
        </p>
        <p>
          In Google Analytics werden zudem durch die Google-Signale weitere
          Besucherdaten wie Standort, Suchverlauf, YouTube-Verlauf und Daten
          über Ihre Handlungen auf unserer Webseite, erfasst. Wir erhalten
          dadurch von Google bessere Werbeberichte und nützlichere Angaben zu
          Ihren Interessen und demografischen Merkmalen. Dazu gehören Ihr Alter,
          welche Sprache sie sprechen, wo Sie wohnen oder welchem Geschlecht Sie
          angehören. Weiters kommen auch noch soziale Kriterien wie Ihr Beruf,
          Ihr Familienstand oder Ihr Einkommen hinzu. All diese Merkmal helfen
          Google Analytics Personengruppen bzw. Zielgruppen zu definieren.
        </p>
        <p>
          Die Berichte helfen uns auch Ihr Verhalten, Ihre Wünsche und
          Interessen besser einschätzen zu können. Dadurch können wir unsere
          Dienstleistungen und Produkte für Sie optimieren und anpassen. Diese
          Daten laufen standardmäßig nach 26 Monaten ab. Bitte beachten Sie,
          dass diese Datenerfassung nur erfolgt, wenn Sie personalisierte
          Werbung in Ihrem Google-Konto zugelassen haben. Es handelt sich dabei
          immer um zusammengefasste und anonyme Daten und nie um Daten einzelner
          Personen. In Ihrem Google-Konto können Sie diese Daten verwalten bzw.
          auch löschen.
        </p>
        <p>
          <strong>Facebook-Pixel Datenschutzerklärung</strong>
        </p>
        <p>
          Wir verwenden auf unserer Webseite das Facebook-Pixel von Facebook.
          Dafür haben wir einen Code auf unserer Webseite implementiert. Der
          Facebook-Pixel ist ein Ausschnitt aus JavaScript-Code, der eine
          Ansammlung von Funktionen lädt, mit denen Facebook Ihre Userhandlungen
          verfolgen kann, sofern Sie über Facebook-Ads auf unsere Webseite
          gekommen sind. Wenn Sie beispielsweise ein Produkt auf unserer
          Webseite erwerben, wird das Facebook-Pixel ausgelöst und speichert
          Ihre Handlungen auf unserer Webseite in einem oder mehreren Cookies.
          Diese Cookies ermöglichen es Facebook Ihre Userdaten (Kundendaten wie
          IP-Adresse, User-ID) mit den Daten Ihres Facebook-Kontos abzugleichen.
          Dann löscht Facebook diese Daten wieder. Die erhobenen Daten sind für
          uns anonym und nicht einsehbar und werden nur im Rahmen von
          Werbeanzeigenschaltungen nutzbar. Wenn Sie selbst Facebook-User sind
          und angemeldet sind, wird der Besuch unserer Webseite automatisch
          Ihrem Facebook-Benutzerkonto zugeordnet.
        </p>
        <p>
          Wir wollen unsere Dienstleistungen bzw. Produkte nur jenen Menschen
          zeigen, die sich auch wirklich dafür interessieren. Mithilfe von
          Facebook-Pixel können unsere Werbemaßnahmen besser auf Ihre Wünsche
          und Interessen abgestimmt werden. So bekommen Facebook-User (sofern
          sie personalisierte Werbung erlaubt haben) passende Werbung zu sehen.
          Weiters verwendet Facebook die erhobenen Daten zu Analysezwecken und
          eigenen Werbeanzeigen.
        </p>
        <p>
          Im Folgenden zeigen wir Ihnen jene Cookies, die durch das Einbinden
          von Facebook-Pixel auf einer Testseite gesetzt wurden. Bitte beachten
          Sie, dass dies nur Beispiel-Cookies sind. Je nach Interaktion auf
          unserer Webseite werden unterschiedliche Cookies gesetzt.
        </p>
        <p>
          <strong>Name:</strong>
          _fbp
          <br />
          <strong>Wert:</strong>
          fb.1.1568287647279.257405483-6321196660-7
          <br />
          <strong>Verwendungszweck:</strong>
          Dieses Cookie verwendet Facebook, um Werbeprodukte anzuzeigen.
          <br />
          <strong>Ablaufdatum:</strong>
          nach 3 Monaten
        </p>
        <p>
          <strong>Name:</strong>
          fr
          <br />
          <strong>Wert:</strong>
          0aPf312HOS5Pboo2r..Bdeiuf…1.0.Bdeiuf.
          <br />
          <strong>Verwendungszweck:</strong>
          Dieses Cookie wird verwendet, damit Facebook-Pixel auch ordentlich
          funktioniert.
          <br />
          <strong>Ablaufdatum:</strong>
          nach 3 Monaten
        </p>
        <p>
          <strong>Name:</strong>
          comment_author_50ae8267e2bdf1253ec1a5769f48e062321196660-3
          <br />
          <strong>Wert:</strong>
          Name des Autors
          <br />
          <strong>Verwendungszweck:</strong>
          Dieses Cookie speichert den Text und den Namen eines Users, der
          beispielsweise einen Kommentar hinterlässt.
          <br />
          <strong>Ablaufdatum:</strong>
          nach 12 Monaten
        </p>
        <p>
          <strong>Name:</strong>
          comment_author_url_50ae8267e2bdf1253ec1a5769f48e062
          <br />
          <strong>Wert:</strong>
          https%3A%2F%2Fwww.testseite…%2F (URL des Autors)
          <br />
          <strong>Verwendungszweck:</strong>
          Dieses Cookie speichert die URL der Website, die der User in einem
          Textfeld auf unserer Webseite eingibt.
          <br />
          <strong>Ablaufdatum:</strong>
          nach 12 Monaten
        </p>
        <p>
          <strong>Name:</strong>
          comment_author_email_50ae8267e2bdf1253ec1a5769f48e062
          <br />
          <strong>Wert:</strong>
          E-Mail-Adresse des Autors
          <br />
          <strong>Verwendungszweck:</strong>
          Dieses Cookie speichert die E-Mail-Adresse des Users, sofern er sie
          auf der Website bekannt gegeben hat.
          <br />
          <strong>Ablaufdatum:</strong>
          nach 12 Monaten
        </p>
        <p>
          <strong>Anmerkung: </strong>
          Die oben genannten Cookies beziehen sich auf ein individuelles
          Userverhalten. Speziell bei der Verwendung von Cookies sind
          Veränderungen bei Facebook nie auszuschließen.
        </p>
        <p>
          Sofern Sie bei Facebook angemeldet sind, können Sie Ihre Einstellungen
          für Werbeanzeigen unter
          <a
            href="https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen"
            target="_blank"
            rel="noreferrer"
          >
            <u>
              https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen
            </u>
          </a>
          selbst verändern. Falls Sie kein Facebook-User sind, können Sie auf
          <a
            href="http://www.youronlinechoices.com/de/praferenzmanagement/?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>http://www.youronlinechoices.com/de/praferenzmanagement/</u>
          </a>
          grundsätzlich Ihre nutzungsbasierte Online-Werbung verwalten. Dort
          haben Sie die Möglichkeit, Anbieter zu deaktivieren bzw. zu
          aktivieren.
        </p>
        <p>
          Wenn Sie mehr über den Datenschutz von Facebook erfahren wollen,
          empfehlen wir Ihnen die eigenen Datenrichtlinien des Unternehmens auf
          <a
            href="https://www.facebook.com/policy.php"
            target="_blank"
            rel="noreferrer"
          >
            <u>https://www.facebook.com/policy.php</u>
          </a>
          .
        </p>
        <p>
          <strong>
            Facebook Automatischer erweiterter Abgleich Datenschutzerklärung
          </strong>
        </p>
        <p>
          Wir haben im Rahmen der Facebook-Pixel-Funktion auch den automatischen
          erweiterten Abgleich (engl. Automatic Advanced Matching) aktiviert.
          Diese Funktion des Pixels ermöglicht uns, gehashte E-Mails, Namen,
          Geschlecht, Stadt, Bundesland, Postleitzahl und Geburtsdatum oder
          Telefonnummer als zusätzliche Informationen an Facebook zu senden,
          sofern Sie uns diese Daten zur Verfügung gestellt haben. Diese
          Aktivierung ermöglicht uns Werbekampagnen auf Facebook noch genauer
          auf Menschen, die sich für unsere Dienstleistungen oder Produkte
          interessieren, anzupassen.
        </p>
        <p>
          <strong>
            Eingebettete Social Media Elemente Datenschutzerklärung
          </strong>
        </p>
        <p>
          Wir binden auf unserer Webseite Elemente von Social Media Diensten ein
          um Bilder, Videos und Texte anzuzeigen.
          <br />
          Durch den Besuch von Seiten die diese Elemente darstellen, werden
          Daten von Ihrem Browser zum jeweiligen Social Media Dienst übertragen
          und dort gespeichert. Wir haben keinen Zugriff auf diese Daten.
          <br />
          Die folgenden Links führen Sie zu den Seiten der jeweiligen Social
          Media Dienste wo erklärt wird, wie diese mit Ihren Daten umgehen:
        </p>
        <ul>
          <li>
            <p>
              Instagram-Datenschutzrichtlinie:
              <a
                href="https://help.instagram.com/519522125107875?tid=321196660"
                target="_blank"
                rel="noreferrer"
              >
                <u>https://help.instagram.com/519522125107875</u>
              </a>
            </p>
          </li>
          <li>
            <p>
              Für YouTube gilt die Google Datenschutzerklärung:
              <a
                href="https://policies.google.com/privacy?hl=de&amp;tid=321196660"
                target="_blank"
                rel="noreferrer"
              >
                <u>https://policies.google.com/privacy?hl=de</u>
              </a>
            </p>
          </li>
          <li>
            <p>
              Facebook-Datenrichtline:
              <a
                href="https://www.facebook.com/about/privacy?tid=321196660"
                target="_blank"
                rel="noreferrer"
              >
                <u>https://www.facebook.com/about/privacy</u>
              </a>
            </p>
          </li>
          <li>
            <p>
              Twitter Datenschutzrichtlinie:
              <a
                href="https://twitter.com/de/privacy?tid=321196660"
                target="_blank"
                rel="noreferrer"
              >
                <u>https://twitter.com/de/privacy</u>
              </a>
            </p>
          </li>
        </ul>
        <p>
          <strong>Facebook Datenschutzerklärung</strong>
        </p>
        <p>
          Wir verwenden auf unserer Webseite ausgewählte Tools von Facebook.
          Facebook ist ein Social Media Network des Unternehmens Facebook
          Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2
          Ireland. Mithilfe dieser Tools können wir Ihnen und Menschen, die sich
          für unsere Produkte und Dienstleistungen interessieren, das
          bestmögliche Angebot bieten. Im Folgenden geben wir einen Überblick
          über die verschiedenen Facebook Tools, welche Daten an Facebook
          gesendet werden und wie Sie diese Daten löschen können.
        </p>
        <p>
          <strong>Was sind Facebook-Tools?</strong>
        </p>
        <p>
          Neben vielen anderen Produkten bietet Facebook auch die sogenannten
          “Facebook Business Tools” an. Das ist die offizielle Bezeichnung von
          Facebook. Da der Begriff aber kaum bekannt ist, haben wir uns dafür
          entschieden, sie lediglich Facebook-Tools zu nennen. Darunter finden
          sich unter anderem:
        </p>
        <ul>
          <li>
            <p>Facebook-Pixel</p>
          </li>
          <li>
            <p>
              soziale Plug-ins (wie z.B der „Gefällt mir“- oder „Teilen“-Button)
            </p>
          </li>
          <li>
            <p>Facebook Login</p>
          </li>
          <li>
            <p>Account Kit</p>
          </li>
          <li>
            <p>APIs (Programmierschnittstelle)</p>
          </li>
          <li>
            <p>SDKs (Sammlung von Programmierwerkzeugen)</p>
          </li>
          <li>
            <p>Plattform-Integrationen</p>
          </li>
          <li>
            <p>Plugins</p>
          </li>
          <li>
            <p>Codes</p>
          </li>
          <li>
            <p>Spezifikationen</p>
          </li>
          <li>
            <p>Dokumentationen</p>
          </li>
          <li>
            <p>Technologien und Dienstleistungen</p>
          </li>
        </ul>
        <p>
          Durch diese Tools erweitert Facebook Dienstleistungen und hat die
          Möglichkeit, Informationen über User-Aktivitäten außerhalb von
          Facebook zu erhalten.
        </p>
        <p>
          <strong>
            Warum verwenden wir Facebook-Tools auf unserer Webseite?
          </strong>
        </p>
        <p>
          Wir wollen unsere Dienstleistungen und Produkte nur Menschen zeigen,
          die sich auch wirklich dafür interessieren. Mithilfe von Werbeanzeigen
          (Facebook-Ads) können wir genau diese Menschen erreichen. Damit den
          Usern passende Werbung gezeigt werden kann, benötigt Facebook
          allerdings Informationen über die Wünsche und Bedürfnisse der
          Menschen. So werden dem Unternehmen Informationen über das
          Userverhalten (und Kontaktdaten) auf unserer Webseite zur Verfügung
          gestellt. Dadurch sammelt Facebook bessere User-Daten und kann
          interessierten Menschen die passende Werbung über unsere Produkte bzw.
          Dienstleistungen anzeigen. Die Tools ermöglichen somit
          maßgeschneiderte Werbekampagnen auf Facebook.
        </p>
        <p>
          Daten über Ihr Verhalten auf unserer Webseite nennt Facebook
          „Event-Daten“. Diese werden auch für Messungs- und Analysedienste
          verwendet. Facebook kann so in unserem Auftrag „Kampagnenberichte“
          über die Wirkung unserer Werbekampagnen erstellen. Weiters bekommen
          wir durch Analysen einen besseren Einblick, wie Sie unsere
          Dienstleistungen, Webseite oder Produkte verwenden. Dadurch optimieren
          wir mit einigen dieser Tools Ihre Nutzererfahrung auf unserer
          Webseite. Beispielsweise können Sie mit den sozialen Plug-ins Inhalte
          auf unserer Seite direkt auf Facebook teilen.
        </p>
        <p>
          <strong>Welche Daten werden von Facebook-Tools gespeichert?</strong>
        </p>
        <p>
          Durch die Nutzung einzelner Facebook-Tools können personenbezogene
          Daten (Kundendaten) an Facebook gesendet werden. Abhängig von den
          benutzten Tools können Kundendaten wie Name, Adresse, Telefonnummer
          und IP-Adresse versandt werden.
        </p>
        <p>
          Facebook verwendet diese Informationen, um die Daten mit den Daten,
          die es selbst von Ihnen hat (sofern Sie Facebook-Mitglied sind)
          abzugleichen. Bevor Kundendaten an Facebook übermittelt werden,
          erfolgt ein sogenanntes „Hashing“. Das bedeutet, dass ein beliebig
          großer Datensatz in eine Zeichenkette transformiert wird. Dies dient
          auch der Verschlüsselung von Daten.
        </p>
        <p>
          Neben den Kontaktdaten werden auch „Event-Daten“ übermittelt. Unter
          „Event-Daten“ sind jene Informationen gemeint, die wir über Sie auf
          unserer Webseite erhalten. Zum Beispiel, welche Unterseiten Sie
          besuchen oder welche Produkte Sie bei uns kaufen. Facebook teilt die
          erhaltenen Informationen nicht mit Drittanbietern (wie beispielsweise
          Werbetreibende), außer das Unternehmen hat eine explizite Genehmigung
          oder ist rechtlich dazu verpflichtet. „Event-Daten“ können auch mit
          Kontaktdaten verbunden werden. Dadurch kann Facebook bessere
          personalisierte Werbung anbieten. Nach dem bereits erwähnten
          Abgleichungsprozess löscht Facebook die Kontaktdaten wieder.
        </p>
        <p>
          Um Werbeanzeigen optimiert ausliefern zu können, verwendet Facebook
          die Event-Daten nur, wenn diese mit anderen Daten (die auf andere
          Weise von Facebook erfasst wurden) zusammengefasst wurden. Diese
          Event-Daten nützt Facebook auch für Sicherheits-, Schutz-,
          Entwicklungs- und Forschungszwecken. Viele dieser Daten werden über
          Cookies zu Facebook übertragen. Cookies sind kleine Text-Dateien, die
          zum Speichern von Daten bzw. Informationen in Browsern verwendet
          werden. Je nach verwendeten Tools und abhängig, ob Sie
          Facebook-Mitglied sind, werden unterschiedlich viele Cookies in Ihrem
          Browser angelegt. In den Beschreibungen der einzelnen Facebook Tools
          gehen wir näher auf einzelne Facebook-Cookies ein. Allgemeine
          Informationen über die Verwendung von Facebook-Cookies erfahren Sie
          auch auf
          <a
            href="https://www.facebook.com/policies/cookies?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>https://www.facebook.com/policies/cookies</u>
          </a>
          .
        </p>
        <p>
          <strong>Wie lange und wo werden die Daten gespeichert?</strong>
        </p>
        <p>
          Grundsätzlich speichert Facebook Daten bis sie nicht mehr für die
          eigenen Dienste und Facebook-Produkte benötigt werden. Facebook hat
          auf der ganzen Welt Server verteilt, wo Ihre Daten gespeichert werden.
          Kundendaten werden allerdings, nachdem sie mit den eigenen Userdaten
          abgeglichen wurden, innerhalb von 48 Stunden gelöscht.
        </p>
        <p>
          <strong>
            Wie kann ich meine Daten löschen bzw. die Datenspeicherung
            verhindern?
          </strong>
        </p>
        <p>
          Entsprechend der Datenschutz Grundverordnung haben Sie das Recht auf
          Auskunft, Berichtigung, Übertragbarkeit und Löschung Ihrer Daten.
        </p>
        <p>
          Eine komplette Löschung der Daten erfolgt nur, wenn Sie Ihr
          Facebook-Konto vollständig löschen. Und so funktioniert das Löschen
          Ihres Facebook-Kontos:
        </p>
        <p>1) Klicken Sie rechts bei Facebook auf Einstellungen.</p>
        <p>
          2) Anschließend klicken Sie in der linken Spalte auf „Deine
          Facebook-Informationen“.
        </p>
        <p>3) Nun klicken Sie “Deaktivierung und Löschung”.</p>
        <p>
          4) Wählen Sie jetzt „Konto löschen“ und klicken Sie dann auf „Weiter
          und Konto löschen“
        </p>
        <p>
          5) Geben Sie nun Ihr Passwort ein, klicken Sie auf „Weiter“ und dann
          auf „Konto löschen“
        </p>
        <p>
          Die Speicherung der Daten, die Facebook über unsere Seite erhält,
          erfolgt unter anderem über Cookies (z.B. bei sozialen Plugins). In
          Ihrem Browser können Sie einzelne oder alle Cookies deaktivieren,
          löschen oder verwalten. Je nach dem welchen Browser Sie verwenden,
          funktioniert dies auf unterschiedliche Art und Weise. Die folgenden
          Anleitungen zeigen, wie Sie Cookies in Ihrem Browser verwalten:
        </p>
        <p>
          <a
            href="https://support.google.com/chrome/answer/95647?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>Chrome: Cookies in Chrome löschen, aktivieren und verwalten</u>
          </a>
        </p>
        <p>
          <a
            href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>Safari: Verwalten von Cookies und Websitedaten mit Safari</u>
          </a>
        </p>
        <p>
          <a
            href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>
              Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf
              Ihrem Computer abgelegt haben
            </u>
          </a>
        </p>
        <p>
          <a
            href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>Internet Explorer: Löschen und Verwalten von Cookies</u>
          </a>
        </p>
        <p>
          <a
            href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>Microsoft Edge: Löschen und Verwalten von Cookies</u>
          </a>
        </p>
        <p>
          Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren
          Browser so einrichten, dass er Sie immer informiert, wenn ein Cookie
          gesetzt werden soll. So können Sie bei jedem einzelnen Cookie
          entscheiden, ob Sie es erlauben oder nicht.
        </p>
        <p>
          Facebook ist aktiver Teilnehmer beim EU-U.S. Privacy Shield Framework,
          wodurch der korrekte und sichere Datentransfer persönlicher Daten
          geregelt wird. Mehr Informationen dazu finden Sie auf
          <a
            href="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC"
            target="_blank"
            rel="noreferrer"
          >
            <u>
              https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC
            </u>
          </a>
          . Wir hoffen wir haben Ihnen die wichtigsten Informationen über die
          Nutzung und Datenverarbeitung durch die Facebook-Tools nähergebracht.
          Wenn Sie mehr darüber erfahren wollen, wie Facebook Ihre Daten
          verwendet, empfehlen wir Ihnen die Datenrichtlinien auf
          <a
            href="https://www.facebook.com/about/privacy/update"
            target="_blank"
            rel="noreferrer"
          >
            <u>https://www.facebook.com/about/privacy/update</u>
          </a>
          .
        </p>
        <p>
          <strong>Instagram Datenschutzerklärung</strong>
        </p>
        <p>
          Wir haben auf unserer Webseite Funktionen von Instagram eingebaut.
          Instagram ist eine Social Media Plattform des Unternehmens Instagram
          LLC, 1601 Willow Rd, Menlo Park CA 94025, USA. Instagram ist seit 2012
          ein Tochterunternehmen von Facebook Inc. und gehört zu den
          Facebook-Produkten. Das Einbetten von Instagram-Inhalten auf unserer
          Webseite nennt man Embedding. Dadurch können wir Ihnen Inhalte wie
          Buttons, Fotos oder Videos von Instagram direkt auf unserer Webseite
          zeigen. Wenn Sie Webseiten unserer Webpräsenz aufrufen, die eine
          Instagram-Funktion integriert haben, werden Daten an Instagram
          übermittelt, gespeichert und verarbeitet. Instagram verwendet
          dieselben Systeme und Technologien wie Facebook. Ihre Daten werden
          somit über alle Facebook-Firmen hinweg verarbeitet.
        </p>
        <p>
          Im Folgenden wollen wir Ihnen einen genaueren Einblick geben, warum
          Instagram Daten sammelt, um welche Daten es sich handelt und wie Sie
          die Datenverarbeitung weitgehend kontrollieren können. Da Instagram zu
          Facebook Inc. gehört, beziehen wir unsere Informationen einerseits von
          den Instagram-Richtlinien, andererseits allerdings auch von den
          Facebook-Datenrichtlinien selbst.
        </p>
        <p>
          <strong>Was ist Instagram?</strong>
        </p>
        <p>
          Instagram ist eines der bekanntesten Social Media Netzwerken weltweit.
          Instagram kombiniert die Vorteile eines Blogs mit den Vorteilen von
          audiovisuellen Plattformen wie YouTube oder Vimeo. Sie können auf
          „Insta“ (wie viele der User die Plattform salopp nennen) Fotos und
          kurze Videos hochladen, mit verschiedenen Filtern bearbeiten und auch
          in anderen sozialen Netzwerken verbreiten. Und wenn Sie selbst nicht
          aktiv sein wollen, können Sie auch nur anderen interessante Users
          folgen.
        </p>
        <p>
          <strong>Warum verwenden wir Instagram auf unserer Webseite?</strong>
        </p>
        <p>
          Instagram ist jene Social Media Plattform, die in den letzten Jahren
          so richtig durch die Decke ging. Und natürlich haben auch wir auf
          diesen Boom reagiert. Wir wollen, dass Sie sich auf unserer Webseite
          so wohl wie möglich fühlen. Darum ist für uns eine abwechslungsreiche
          Aufbereitung unserer Inhalte selbstverständlich. Durch die
          eingebetteten Instagram-Funktionen können wir unseren Content mit
          hilfreichen, lustigen oder spannenden Inhalten aus der Instagram-Welt
          bereichern. Da Instagram eine Tochtergesellschaft von Facebook ist,
          können uns die erhobenen Daten auch für personalisierte Werbung auf
          Facebook dienlich sein. So bekommen unsere Werbeanzeigen nur Menschen,
          die sich wirklich für unsere Produkte oder Dienstleistungen
          interessieren.
        </p>
        <p>
          Instagram nützt die gesammelten Daten auch zu Messungs- und
          Analysezwecken. Wir bekommen zusammengefasste Statistiken und so mehr
          Einblick über Ihre Wünsche und Interessen. Wichtig ist zu erwähnen,
          dass diese Berichte Sie nicht persönlich identifizieren.
        </p>
        <p>
          <strong>Welche Daten werden von Instagram gespeichert?</strong>
        </p>
        <p>
          Wenn Sie auf eine unserer Seiten stoßen, die Instagram-Funktionen (wie
          Instagrambilder oder Plug-ins) eingebaut haben, setzt sich Ihr Browser
          automatisch mit den Servern von Instagram in Verbindung. Dabei werden
          Daten an Instagram versandt, gespeichert und verarbeitet. Und zwar
          unabhängig, ob Sie ein Instagram-Konto haben oder nicht. Dazu zählen
          Informationen über unserer Webseite, über Ihren Computer, über
          getätigte Käufe, über Werbeanzeigen, die Sie sehen und wie Sie unser
          Angebot nutzen. Weiters werden auch Datum und Uhrzeit Ihrer
          Interaktion mit Instagram gespeichert. Wenn Sie ein Instagram-Konto
          haben bzw. eingeloggt sind, speichert Instagram deutlich mehr Daten
          über Sie.
        </p>
        <p>
          Facebook unterscheidet zwischen Kundendaten und Eventdaten. Wir gehen
          davon aus, dass dies bei Instagram genau so der Fall ist. Kundendaten
          sind zum Beispiel Name, Adresse, Telefonnummer und IP-Adresse. Wichtig
          zu erwähnen ist, dass diese Kundendaten erst an Instagram übermittelt
          werden, wenn Sie zuvor „gehasht“ wurden. Hashing meint, ein Datensatz
          wird in eine Zeichenkette verwandelt. Dadurch kann man die
          Kontaktdaten verschlüsseln. Zudem werden auch die oben genannten
          „Event-Daten“ übermittelt. Unter „Event-Daten“ versteht Facebook – und
          folglich auch Instagram – Daten über Ihr Userverhalten. Es kann auch
          vorkommen, dass Kontaktdaten mit Event-Daten kombiniert werden. Die
          erhobenen Kontaktdaten werden mit den Daten, die Instagram bereits von
          Ihnen hat abgeglichen.
        </p>
        <p>
          Über kleine Text-Dateien (Cookies), die meist in Ihrem Browser gesetzt
          werden, werden die gesammelten Daten an Facebook übermittelt. Je nach
          verwendeten Instagram-Funktionen und ob Sie selbst ein Instagram-Konto
          haben, werden unterschiedlich viele Daten gespeichert.
        </p>
        <p>
          Wir gehen davon aus, dass bei Instagram die Datenverarbeitung gleich
          funktioniert wie bei Facebook. Das bedeutet: wenn Sie ein
          Instagram-Konto haben oder{" "}
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <u>www.instagram.com</u>
          </a>{" "}
          besucht haben, hat Instagram zumindest ein Cookie gesetzt. Wenn das
          der Fall ist, sendet Ihr Browser über das Cookie Infos an Instagram,
          sobald Sie mit einer Instagram-Funktion in Berührung kommen.
          Spätestens nach 90 Tagen (nach Abgleichung) werden diese Daten wieder
          gelöscht bzw. anonymisiert. Obwohl wir uns intensiv mit der
          Datenverarbeitung von Instagram beschäftigt haben, können wir nicht
          ganz genau sagen, welche Daten Instagram exakt sammelt und speichert.
        </p>
        <p>
          Im Folgenden zeigen wir Ihnen Cookies, die in Ihrem Browser mindestens
          gesetzt werden, wenn Sie auf eine Instagram-Funktion (wie z.B. Button
          oder ein Insta-Bild) klicken. Bei unserem Test gehen wir davon aus,
          dass Sie kein Instagram-Konto haben. Wenn Sie bei Instagram eingeloggt
          sind, werden natürlich deutlich mehr Cookies in Ihrem Browser gesetzt.
        </p>
        <p>Diese Cookies wurden bei unserem Test verwendet:</p>
        <p>
          <strong>Name: </strong>
          csrftoken
          <br />
          <strong>Wert: </strong>
          “”
          <br />
          <strong>Verwendungszweck: </strong>
          Dieses Cookie wird mit hoher Wahrscheinlichkeit aus Sicherheitsgründen
          gesetzt, um Fälschungen von Anfragen zu verhindern. Genauer konnten
          wir das allerdings nicht in Erfahrung bringen.
          <br />
          <strong>Ablaufdatum:</strong>
          nach einem Jahr
        </p>
        <p>
          <strong>Name: </strong>
          mid
          <br />
          <strong>Wert: </strong>
          “”
          <br />
          <strong>Verwendungszweck: </strong>
          Instagram setzt dieses Cookie, um die eigenen Dienstleistungen und
          Angebote in und außerhalb von Instagram zu optimieren. Das Cookie legt
          eine eindeutige User-ID fest.
          <br />
          <strong>Ablaufdatum:</strong>
          nach Ende der Sitzung
        </p>
        <p>
          <strong>Name:</strong>
          fbsr_321196660124024
          <br />
          <strong>Wert: </strong>
          keine Angaben
          <br />
          <strong>Verwendungszweck: </strong>
          Dieses Cookie speichert die Log-in-Anfrage für User der Instagram-App.
          <strong>
            <br />
            Ablaufdatum:
          </strong>
          nach Ende der Sitzung
        </p>
        <p>
          <strong>Name:</strong>
          rur
          <br />
          <strong>Wert: </strong>
          ATN
          <br />
          <strong>Verwendungszweck: </strong>
          Dabei handelt es sich um ein Instagram-Cookie, das die Funktionalität
          auf Instagram gewährleistet.
          <br />
          <strong>Ablaufdatum:</strong>
          nach Ende der Sitzung
        </p>
        <p>
          <strong>Name:</strong>
          urlgen
          <br />
          <strong>Wert: </strong>
          <br />
          <strong>Verwendungszweck: </strong>
          Dieses Cookie dient den Marketingzwecken von Instagram.
          <br />
          <strong>Ablaufdatum:</strong>
          nach Ende der Sitzung
        </p>
        <p>
          <strong>Anmerkung:</strong>
          Wir können hier keinen Vollständigkeitsanspruch erheben. Welche
          Cookies im individuellen Fall gesetzt werden, hängt von den
          eingebetteten Funktionen und Ihrer Verwendung von Instagram ab.
        </p>
        <p>
          <strong>Wie lange und wo werden die Daten gespeichert?</strong>
        </p>
        <p>
          Instagram teilt die erhaltenen Informationen zwischen den
          Facebook-Unternehmen mit externen Partnern und mit Personen, mit denen
          Sie sich weltweit verbinden. Die Datenverarbeitung erfolgt unter
          Einhaltung der eigenen Datenrichtlinie. Ihre Daten sind, unter anderem
          aus Sicherheitsgründen, auf den Facebook-Servern auf der ganzen Welt
          verteilt. Die meisten dieser Server stehen in den USA.
        </p>
        <p>
          <strong>
            Wie kann ich meine Daten löschen bzw. die Datenspeicherung
            verhindern?
          </strong>
        </p>
        <p>
          Dank der Datenschutz Grundverordnung haben Sie das Recht auf Auskunft,
          Übertragbarkeit, Berichtigung und Löschung Ihrer Daten. In den
          Instagram-Einstellungen können Sie Ihre Daten verwalten. Wenn Sie Ihre
          Daten auf Instagram völlig löschen wollen, müssen Sie Ihr
          Instagram-Konto dauerhaft löschen.
        </p>
        <p>Und so funktioniert die Löschung des Instagram-Kontos:</p>
        <p>
          Öffnen Sie zuerst die Instagram-App. Auf Ihrer Profilseite gehen Sie
          nach unten und klicken Sie auf „Hilfebereich“. Jetzt kommen Sie auf
          die Webseite des Unternehmens. Klicken Sie auf der Webseite auf
          „Verwalten des Kontos“ und dann auf „Dein Konto löschen“.
        </p>
        <p>
          Wenn Sie Ihr Konto ganz löschen, löscht Instagram Posts wie
          beispielsweise Ihre Fotos und Status-Updates. Informationen, die
          andere Personen über Sie geteilt haben, gehören nicht zu Ihrem Konto
          und werden folglich nicht gelöscht.
        </p>
        <p>
          Wie bereits oben erwähnt, speichert Instagram Ihre Daten in erster
          Linie über Cookies. Diese Cookies können Sie in Ihrem Browser
          verwalten, deaktivieren oder löschen. Abhängig von Ihrem Browser
          funktioniert die Verwaltung immer ein bisschen anders. Hier zeigen wir
          Ihnen die Anleitungen der wichtigsten Browser.
        </p>
        <p>
          <a
            href="https://support.google.com/chrome/answer/95647?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>Chrome: Cookies in Chrome löschen, aktivieren und verwalten</u>
          </a>
        </p>
        <p>
          <a
            href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>Safari: Verwalten von Cookies und Websitedaten mit Safari</u>
          </a>
        </p>
        <p>
          <a
            href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>
              Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf
              Ihrem Computer abgelegt haben
            </u>
          </a>
        </p>
        <p>
          <a
            href="https://support.microsoft.com/de-at/help/17442/windows-internet-explorer-delete-manage-cookies?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>Internet Explorer: Löschen und Verwalten von Cookies</u>
          </a>
        </p>
        <p>
          <a
            href="https://support.microsoft.com/de-at/help/4027947/windows-delete-cookies?tid=321196660"
            target="_blank"
            rel="noreferrer"
          >
            <u>Microsoft Edge: Löschen und Verwalten von Cookies</u>
          </a>
        </p>
        <p>
          Sie können auch grundsätzlich Ihren Browser so einrichten, dass Sie
          immer informiert werden, wenn ein Cookie gesetzt werden soll. Dann
          können Sie immer individuell entscheiden, ob Sie das Cookie zulassen
          wollen oder nicht.
        </p>
        <p>
          Instagram ist ein Tochterunternehmen von Facebook Inc. und Facebook
          ist aktiver Teilnehmer beim EU-U.S. Privacy Shield Framework. Dieses
          Framework stellt eine korrekte Datenübertragung zwischen den USA und
          der Europäischen Union sicher. Unter
          <a
            href="https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC"
            target="_blank"
            rel="noreferrer"
          >
            <u>
              https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC{" "}
            </u>
          </a>
          erfahren Sie mehr darüber. Wir haben versucht, Ihnen die wichtigsten
          Informationen über die Datenverarbeitung durch Instagram
          näherzubringen. Auf
          <a
            href="https://help.instagram.com/519522125107875"
            target="_blank"
            rel="noreferrer"
          >
            <u>https://help.instagram.com/519522125107875</u>
          </a>
          <br />
          können Sie sich noch näher mit den Datenrichtlinien von Instagram
          auseinandersetzen.
        </p>
        <p>
          Quelle: Erstellt mit dem
          <a
            href="https://www.adsimple.de/datenschutz-generator/"
            target="Datenschutz Generator Deutschland"
          >
            <u>Datenschutz Generator</u>
          </a>
          von AdSimple in Kooperation mit
          <a
            href="https://www.hashtagbeauty.de/"
            target="_blank"
            rel="noreferrer"
          >
            <u>hashtagbeauty.de</u>
          </a>
        </p>

        <p>
          <strong>Allgemeine Gesch&auml;ftsbedingungen (AGB)</strong>
        </p>
        <p>
          <strong>Pr&auml;ambel</strong>
        </p>
        <p>
          Unsere Gesch&auml;ftsbedingungen haben das Ziel, die
          Gesch&auml;ftsbeziehung zwischen K&auml;ufer, K&uuml;nstler und uns
          als Intermedi&auml;r verbindlich und fair zu regeln. Grundlage einer
          Bestellung und eines Vertrages sind daher immer die nachfolgenden
          Allgemeinen Gesch&auml;ftsbedingungen von Meet Frida / Schwan
          Communications, deren Kenntnisnahme und Einbeziehung Sie mit einer
          Bestellung &uuml;ber die Website www.meetfrida.art anerkennen und
          best&auml;tigen.
        </p>
        <p>
          Initiator von MeetFrida und Vertragspartner als Intermedi&auml;r ist:
        </p>
        <p>
          Schwan Communications <br />
          Valentinskamp 45a <br />
          20355 Hamburg <br />
        </p>

        <p>
          <strong>&sect; 1 Geltungsbereich</strong>
        </p>
        <p>
          F&uuml;r die Gesch&auml;ftsbeziehung zwischen MeetFrida / Schwan
          Communications, Hamburg (nachfolgend kurz MeetFrida genannt) und dem
          Besteller gelten ausschlie&szlig;lich die nachfolgenden Allgemeinen
          Gesch&auml;ftsbedingungen in ihrer zum Zeitpunkt der Bestellung
          g&uuml;ltigen Fassung. Abweichende Bedingungen des Bestellers erkennt
          MeetFrida nicht an, es sei denn, MeetFrida hat ausdr&uuml;cklich
          schriftlich ihrer Geltung zugestimmt.
        </p>
        <p>
          <strong>&sect; 2 Vertragsschluss</strong>
        </p>
        <p>
          Die Darstellung der Produkte in der Online Gallery oder in der Outdoor
          Gallery stellt kein rechtlich bindendes Angebot, sondern einen
          unverbindlichen Online-Katalog dar. Durch Anklicken des Buttons
          &bdquo;Kaufen&ldquo; geben Sie eine Anfrage zum Erwerb der auf der
          Website dargestellten Kunstwerke ab. Nach der Anfrage senden wir Ihnen
          eine Email mit einem Angebot in dem der Gesamtpreis des Werks
          inklusive Versandkosten und Mehrwertsteuer aufgef&uuml;hrt ist. Eine
          Versicherung f&uuml;r den Versand der Werke kann zus&auml;tzlich
          abgeschlossen werden, die Kosten daf&uuml;r werden einzeln
          dargestellt. Der Kaufvertrag kommt zustande, wenn Sie diesem Angebot
          schriftlich per Mail zustimmen. Hiermit erkl&auml;ren Sie verbindlich
          gegen&uuml;ber MeetFrida, die aufgef&uuml;hrten Werke erwerben zu
          wollen (Angebot). Ihr Angebot nehmen wir mit Eingang Ihrer Bestellung
          bei uns automatisch an. Unmittelbar nach dem Absenden der Bestellung
          erhalten Sie per E-Mail eine Bestell- und Vertragsbest&auml;tigung, in
          der die Details Ihrer Bestellung erneut aufgef&uuml;hrt sind.
        </p>
        <p>
          Der Text Ihrer Bestellung wird von uns gespeichert und kann Ihnen nach
          Abschluss Ihrer Bestellung auf Anfrage &uuml;bermittelt werden.
          MeetFrida empfiehlt Ihnen, zu Ihrer Sicherheit die Bestelldaten und
          die zum Zeitpunkt der Bestellung geltenden Allgemeinen
          Gesch&auml;ftsbedingungen auszudrucken. Die Vertragssprache ist
          deutsch.
        </p>
        <p>
          <strong>&sect; 3 Widerruf</strong>
        </p>
        <p>
          Wir weisen darauf hin, dass f&uuml;r alle &uuml;ber MeetFrida
          erworbenen Werke kein Widerrufsrecht besteht, da die erstellten Werke
          individuell angefertigt werden. F&uuml;r individuelle Produkte ist ein
          Recht zum Widerruf nach &sect; 312 g Abs. 2 Nr. 1 BGB ausgeschlossen.
        </p>
        <p>
          <strong>&sect; 4 Lieferung</strong>
        </p>
        <p>
          Die Lieferung der Werke erfolgt direkt durch den K&uuml;nstler. Dieser
          ist auch alleinig f&uuml;r die schadfreie &Uuml;bermittlung der Werke
          verantwortlich. Alle Lieferkonditionen sind direkt mit ihm
          auszuhandeln. MeetFrida tritt lediglich als Intermedi&auml;r auf sowie
          als Vermittler des Kaufprozesses.
        </p>
        <p>
          <strong>&sect; 5 Preise, F&auml;lligkeit und Zahlung, Verzug</strong>
        </p>
        <p>
          Die im Onlineshop angegebenen Preise sind Endpreise
          einschlie&szlig;lich Umsatzsteuer. Die Versandkosten sind im Preis der
          Bestellung nicht enthalten und werden diesem jeweils hinzugerechnet.
          Informationen &uuml;ber die Versandkosten finden Sie in &sect; 7
          dieser AGB.
        </p>
        <p>
          Die Zahlung erfolgt ausschlie&szlig;lich per Vorkasse durch
          &Uuml;berweisung. Nach Abschluss des Kaufvertrags nennen wir Ihnen
          unsere Bankverbindung und geben die Auslieferung des Werks nach
          Zahlungseingang in Auftrag. Sie zahlen den vollen Kaufpreis inklusive
          aller Geb&uuml;hren oder Abgaben gem&auml;&szlig; den zum Zeitpunkt
          der F&auml;lligkeit geltenden Bedingungen auf das Konto von MeetFrida
          ein.
        </p>
        <p>
          Wenn Ihr Kauf nach unserem Ermessen eine risikoreiche Transaktion
          darstellt, m&uuml;ssen Sie uns eine Kopie Ihres g&uuml;ltigen, von der
          Regierung ausgestellten Lichtbildausweises und m&ouml;glicherweise
          eine Kopie eines aktuellen Kontoauszugs vorlegen.
        </p>
        <p>
          Wir behalten uns das Recht vor, Produkte und Produktpreise jederzeit
          zu &auml;ndern. Wir behalten uns auch das Recht vor, jede Bestellung,
          die Sie bei uns aufgeben, abzulehnen. Wir k&ouml;nnen in unserem
          alleinigen Ermessen die pro Person, pro Haushalt oder pro Bestellung
          gekauften Mengen begrenzen oder stornieren. Diese Einschr&auml;nkungen
          k&ouml;nnen Bestellungen umfassen, die von oder unter demselben
          Kundenkonto, und/oder Bestellungen, die dieselbe Rechnungs- und/oder
          Lieferadresse verwenden, aufgegeben werden. F&uuml;r den Fall, dass
          wir eine Bestellung &auml;ndern oder stornieren, k&ouml;nnen wir
          versuchen, Sie zu benachrichtigen, indem wir uns an die E-Mail-
          und/oder Rechnungsadresse/Telefonnummer wenden, die zum Zeitpunkt der
          Bestellung angegeben wurde.
        </p>
        <p>
          F&uuml;r den Fall, dass das Konto des Bestellers dann keine
          ausreichende Deckung aufweist oder der Besteller unberechtigt
          Widerspruch gegen den Bankeinzug einlegt, kann MeetFrida eine
          Bearbeitungsgeb&uuml;hr in H&ouml;he von EUR 5,00 vom Besteller
          verlangen. Kommen Sie in Zahlungsverzug, so ist MeetFrida berechtigt,
          Verzugszinsen in H&ouml;he von 5 Prozentpunkten &uuml;ber dem von der
          Europ&auml;ischen Zentralbank jeweils bekannt gegebenen Basiszinssatz
          p.a. gegen&uuml;ber Verbrauchern und 9 Prozentpunkten &uuml;ber dem
          von der Europ&auml;ischen Zentralbank jeweils bekannt gegebenen
          Basiszinssatz p.a. gegen&uuml;ber Unternehmern zu verlangen. Zudem
          kann MeetFrida pauschal &euro; 2,50 je Mahnung mit Ausnahme der
          Erstmahnung fordern. Falls MeetFrida ein h&ouml;herer Verzugsschaden
          nachweisbar entstanden ist, ist MeetFrida berechtigt, diesen geltend
          zu machen.
        </p>
        <p>
          <strong>&sect; 6 </strong>
          <strong>Genauigkeit der Informationen</strong>
        </p>
        <p>
          Gelegentlich kann es auf der Website Informationen geben, die
          Tippfehler, Ungenauigkeiten oder Auslassungen enthalten, die sich auf
          Produktbeschreibungen, Preise, Verf&uuml;gbarkeit, Aktionen und
          Angebote beziehen. Wir behalten uns das Recht vor, Fehler,
          Ungenauigkeiten oder Auslassungen zu korrigieren und Informationen zu
          &auml;ndern oder zu aktualisieren oder Bestellungen zu stornieren,
          wenn Informationen auf der Website oder einem damit verbundenen
          Service zu irgendeinem Zeitpunkt ungenau waren. Wir verpflichten uns
          nicht, Informationen auf der Website zu aktualisieren, zu
          erg&auml;nzen oder zu kl&auml;ren, einschlie&szlig;lich, aber nicht
          beschr&auml;nkt auf Preisinformationen, es sei denn, dies ist
          gesetzlich vorgeschrieben. Das angegebene Aktualisierungsdatum der
          Website kann nicht als Hinweis darauf verstanden werden, dass alle
          Informationen auf der Website oder einem damit verbundenen Dienst
          ge&auml;ndert oder aktualisiert wurden.
        </p>
        <p>
          <strong>&sect; 7 Eigentumsvorbehalt</strong>
        </p>
        <p>
          Bis zur vollst&auml;ndigen Zahlung bleiben die Werke Eigentum des
          Urhebers.
        </p>
        <p>
          <strong>&sect; 8 Keine Einr&auml;umung von Rechten</strong>
        </p>
        <p>
          Mit dem Kauf eines fotografischen Abzugs erwerben Sie nur das
          dingliche Eigentum an dem Abzug. Es werden keinerlei sonstige
          Nutzungsrechte einger&auml;umt. Jegliche Reproduktion
          (Vervielf&auml;ltigung), Verbreitung, Vermietung, &ouml;ffentliche
          Zug&auml;nglichmachung oder sonstige analoge oder digitale Verwertung
          sind nicht gestattet, soweit dies nicht gesetzlich zugelassen ist. Sie
          k&ouml;nnen den Abzug jedoch weiterverkaufen.
        </p>
        <p>Stand: 25. August 2020</p> 
      </div>*/}
    </Section>
  </Layout>
)

export default IndexPage
