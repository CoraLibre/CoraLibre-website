import React from 'react'
import {Helmet} from 'react-helmet'
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next'
import Layout from '../components/Layout'

const PrivacyPolicyPage = () => {
    const {t} = useTranslation();
    return (
        <Layout>
            <Helmet>
                <title>{t('CoraLibre – Impressum & Datenschutzerklärung')}</title>
            </Helmet>
            <h2>
                <Trans>Kontakt</Trans>
            </h2>
            <p>
                cosee GmbH<br/>
                Mina-Rees-Straße 8<br/>
                64295 Darmstadt<br/><br/>

                <a href="mailto:info@cosee.biz" className="link">info[at]cosee.biz</a><br/>
                Tel.: +49 6151 95744 00<br/>
                Fax: +49 6151 95744 29</p>
            <h2>
                <Trans>Haftungsausschluss</Trans>
            </h2>
            <p><strong><Trans>Haftung für Inhalte</Trans></strong><br/>
                <Trans>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
                der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine
                diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
                    entfernen.</Trans></p>

            <p><strong><Trans>Haftung für Links</Trans></strong><br/>
                <Trans>Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                    zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</Trans></p>

            <p><strong><Trans>Urheberrecht</Trans></strong><br/>
                <Trans>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei
                    Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</Trans></p>

            <h2><Trans>Impressum</Trans></h2>
            <p>
                Handelsregisternummer: HRB 87728, Amtsgericht Darmstadt<br/>
                Umsatzsteuer-Identifikationsnummer gemäß §27 a
                Umsatzsteuergesetz: DE264462313 Geschäftsführer: Patrick Wolf<br/>
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Patrick Wolf
            </p>
            <h2><Trans>Datenschutzerklärung</Trans></h2>
            <h3><Trans>Verantwortlicher</Trans></h3>
            <p><Trans>Für die Datenverarbeitung bei der Nutzung der Internetseite von www.coralibre.de und ihrer Unterseiten
                ist die cosee
                GmbH, vertr.d.d. GF Herrn Patrick Wolf, Mina-Rees-Straße 8, 64295 Darmstadt, E-Mail: info@cosee.biz,
                Tel.: +49 6151 95744-0, Fax: +49 6151 95744-29 (nachfolgend: cosee) verantwortlich.</Trans></p>
            <h3><Trans>Datenschutzbeauftragter</Trans></h3>
            <p><Trans>Datenschutzbeauftragte der cosee GmbH ist:</Trans><br/>
                Jens van Radecke<br/>
                Vancom IT GmbH<br/>
                Am Wingert 5<br/>
                63856 Bessenbach<br/>
                E-Mail: datenschutz@cosee.biz</p>
            <h3>
                <Trans>Datenverarbeitung</Trans>
            </h3>
            <p>
                <Trans>Der Zweck der Datenschutzbestimmungen besteht darin, Sie darüber zu informieren, welche Daten die cosee
                GmbH
                bei Nutzung der Internetseite www.coralibre.de erhebt und wie die von der cosee GmbH bei der Nutzung der
                Internetseite erfassten persönlichen Informationen verwendet sowie wie Sie die von der cosee GmbH in
                diesem
                    Zusammenhang gespeicherten Informationen ändern oder ihre Löschung oder Sperrung veranlassen können.</Trans></p>
            <p>
                1. <Trans>Gegenstand des Datenschutzes</Trans><br/>
                <Trans>Gegenstand des Datenschutzes sind personenbezogene Daten. Diese sind nach § 3 Abs. 1 BDSG Einzelangaben
                über
                persönliche oder sachliche Verhältnisse einer bestimmten oder bestimmbaren natürlichen Person. Hierunter
                fallen z.
                B. Angaben wie Name, Post-Adresse, E-Mail-Adresse oder Telefonnummer, ggf. aber auch Nutzungsdaten wie
                bspw.
                die IP-Adresse.
                Personenbezogene Daten unserer Nutzer werden von uns grundsätzlich nur in dem Maß erhoben und verwendet,
                wie dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen
                erforderlich ist. Die
                Datenerhebung und Verwendung erfolgt, soweit die Daten Personenbezug aufweisen, regelmäßig nur nach
                Einwilligung des Nutzers. In den Fällen, in denen eine vorherige Einwilligung aus tatsächlichen Gründen
                nicht möglich
                ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist, erfolgt ausnahmsweise
                keine
                    Einholung einer Einwilligung.</Trans></p>
            <p>
                2. <Trans>Rechtsgrundlage der Datenverarbeitung</Trans><br/>
                <Trans>Die Verarbeitung der personenbezogenen Daten der Besucher unserer Internetseite ist zur Wahrung eines
                berechtigten Interesses unseres Unternehmens oder eines Dritten erforderlich. Soweit die Interessen,
                Grundrechte
                und Grundfreiheiten des Betroffenen das erstgenannte Interesse nicht überwiegen, dient Art. 6 Abs. 1
                lit. f DSGVO
                    als Rechtsgrundlage für die Verarbeitung.</Trans>
            </p>
            <p>
                3. <Trans>Löschung der Daten und Dauer der Speicherung</Trans><br/>
                <Trans>Die Daten mit Personenbezug zum Betroffenen werden gelöscht oder gesperrt, sobald der Zweck der
                Speicherung
                wegfällt. Eine Speicherung kann darüber hinaus erfolgen, wenn dies durch den europäischen oder
                nationalen
                Gesetzgeber in unionsrechtlichen Verordnungen, Gesetzen oder sonstigen Vorschriften, denen der
                Verantwortliche
                unterliegt, vorgesehen wurde. Eine Sperrung oder Löschung der Daten erfolgt auch dann, wenn eine durch
                die
                genannten Normen vorgeschriebene Speicherfrist abläuft, es sei denn, dass eine Erforderlichkeit zur
                weiteren
                    Speicherung der Daten für einen Vertragsabschluss oder eine Vertragserfüllung besteht.</Trans>
            </p>
            <h3>
                <Trans>Umfang und Zweck der Datenerhebung und -speicherung</Trans>
            </h3>
            <p>
                <Trans>Im Folgenden klären wir Sie über den Umfang der Datenerhebung und -speicherung sowie deren Nutzung und
                über
                    den Zweck der jeweiligen Datenerhebung auf.</Trans></p>
            <p>
                <strong>1. <Trans>Logfiles</Trans></strong><br/>
                <Trans>Wir nutzen Netlify, 2325 3rd St #215, San Francisco, CA 94107, USA, als Hosting-Lösung für unsere
                Webseiten. Die
                    Datenschutzbestimmungen von Netlify können Sie unter dieser Internetadresse einsehen:</Trans>
                <a target="_blank" href="https://www.netlify.com/privacy/"
                   className="link" rel="noopener noreferrer">https://www.netlify.com/privacy/</a>.</p>
            <p>
                <Trans>Bei der Nutzung der Webseite www.coralibre.de und Unterseiten werden die folgenden Daten automatisiert von
                unserem Dienstleister, der Firma Netlify, 2325 3rd St #215, San Francisco, CA 94107, USA, erfasst und in
                einem
                    Logfile auf deren Server in den USA gespeichert:</Trans>
                <ul>
                    <li><Trans>IP-Adresse</Trans></li>
                    <li><Trans>Datum und Uhrzeit der Anfrage</Trans></li>
                    <li><Trans>Edge Location</Trans></li>
                    <li><Trans>Inhalt der Anforderung (konkrete Seite)</Trans></li>
                    <li><Trans>Zugriffsstatus/HTTP-Statuscode</Trans></li>
                    <li><Trans>jeweils übertragene Datenmenge</Trans></li>
                    <li><Trans>Website, von der die Anforderung kommt</Trans></li>
                    <li><Trans>Browser</Trans></li>
                    <li><Trans>Betriebssystem und dessen Oberfläche</Trans></li>
                    <li><Trans>Sprache und Version der Browsersoftware</Trans></li>
                </ul>
                <Trans>Die Logfiles dieses Servers enthalten IP-Adressen oder sonstige Daten, die eine Zuordnung zu einem
                Nutzer
                ermöglichen. Dies könnte beispielsweise der Fall sein, wenn der Link zur Website, von der der Nutzer auf
                die
                Internetseite gelangt, oder der Link zur Website, zu der der Nutzer wechselt, personenbezogene Daten
                enthält.
                Die Daten werden ebenfalls in den Logfiles unseres Systems gespeichert. Eine Speicherung dieser Daten
                zusammen
                    mit anderen personenbezogenen Daten des Nutzers findet nicht statt.</Trans>
            </p>
            <p>
                <strong>2. <Trans>Rechtsgrundlage</Trans></strong><br/>
                <Trans>Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit. f
                DSGVO. Die
                Übermittlung der Daten zu unserem Dienstleister Netlify erfolgt auf Grundlage der Vereinbarung zur
                Auftragsdatenvereinbarung und der Garantien zum Datenschutz, die die Europäische Union mit den USA
                vereinbart
                    haben („Privacy Shield“).</Trans>
            </p>
            <p>
                <strong>3. <Trans>Zweck der Datenverarbeitung</Trans></strong><br/>
                <Trans>Die vorübergehende Speicherung der IP-Adresse durch Netlify ist notwendig, um eine Auslieferung der
                Website an
                den Rechner des Nutzers zu ermöglichen. Hierfür muss die IP-Adresse des Nutzers für die Dauer der
                Sitzung
                gespeichert bleiben.
                Die Speicherung in Logfiles erfolgt, um die Funktionsfähigkeit der Website sicherzustellen. Zudem dienen
                uns die
                Daten zur Optimierung der Website und zur Sicherstellung der Sicherheit unserer informationstechnischen
                Systeme.
                Eine Auswertung der Daten zu Marketingzwecken findet in diesem Zusammenhang nicht statt.
                Aus diesen Zwecken ergibt sich auch unser berechtigtes Interesse an der Datenverarbeitung nach Art. 6
                Abs. 1 lit. f
                    DSGVO.</Trans></p>
            <p>
                <strong>4. <Trans>Dauer der Speicherung</Trans></strong><br/>
                <Trans>Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr
                erforderlich sind.
                Im Falle der Erfassung der Daten zur Bereitstellung der Website ist dies der Fall, wenn die jeweilige
                Sitzung beendet
                ist.
                    Im Falle der Speicherung der Daten in Logfiles ist dies nach spätestens sieben Tagen der Fall.</Trans>
            </p>
            <h3><Trans>E-Mail-Kontakt</Trans></h3>
            <p>
                <strong>1. <Trans>Beschreibung und Umfang der Datenverarbeitung</Trans></strong><br/>
                <Trans>Eine Kontaktaufnahme ist über die bereitgestellten E-Mail-Adressen möglich. In diesem Fall werden die mit der EMail übermittelten personenbezogenen Daten des Nutzers gespeichert. Wir nutzen Dogado
                (www.dogado.de) als Dienstleister für den E-Mail-Dienst. Die Daten werden ausschließlich für die Bearbeitung
                    der Konversation verwendet.</Trans>
            </p>
            <p>
                <strong>2. <Trans>Rechtsgrundlage für die Datenverarbeitung</Trans></strong><br/>
                <Trans>Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge einer Übersendung einer E-Mail übermittelt werden, ist
                Art. 6 Abs. 1 lit. f DSGVO. Zielt der E-Mail-Kontakt auf die Erfüllung eines Vertrages ab, so ist Rechtsgrundlage für die
                Verarbeitung Art. 6 Abs. 1 lit. b DSGVO. Hat der Betroffene uns eine Einwilligung gegeben, so ist die Rechtsgrundlage
                    Art. 6 Abs. 1 lit. a DSGVO.</Trans>
            </p>
            <p>
                <strong>3. <Trans>Zweck der Datenverarbeitung</Trans></strong><br/>
                <Trans>Bei der Verarbeitung der personenbezogenen Daten bei einer Kontaktaufnahme per E-Mail erfolgt die
                Datenverarbeitung allein zur Bearbeitung der Kontaktaufnahme. Daraus ergibt sich das erforderliche berechtigte
                    Interesse an der Verarbeitung der Daten.</Trans>
            </p>
            <p>
                <strong>4. <Trans>Dauer der Speicherung</Trans></strong><br/>
                <Trans>Die Daten bleiben bis zum Ablauf der handelsrechtlichen Speicherfristen (10 Jahre) gespeichert. Sind die Daten zum
                Zweck der Konversation nicht mehr erforderlich, werden die Daten auf lokalen Geräten gelöscht und auf dem Server
                    von Webcontrol bis zum Ablauf der Speicherfrist aufbewahrt.</Trans>
            </p>
            <p>
                <strong>5. <Trans>Widerspruchs- und Beseitigungsmöglichkeit</Trans></strong><br/>
                <Trans>Der Nutzer hat jederzeit die Möglichkeit, seine Einwilligung zur Verarbeitung der personenbezogenen Daten zu
                widerrufen. Dazu kontaktieren Sie uns über die genannten Kontaktdaten. Nimmt der Nutzer per E-Mail-Kontakt
                mit uns auf, so kann er der Speicherung seiner personenbezogenen Daten jederzeit widersprechen. In einem
                solchen Fall kann die Konversation nicht fortgeführt werden. Alle personenbezogenen Daten, die im Zuge der
                    Kontaktaufnahme gespeichert wurden, werden in diesem Fall gelöscht.</Trans>
            </p>

            <h2><Trans>Streitschlichtung</Trans></h2>
            <p><Trans>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: </Trans><a
                className="link" target="_blank" href="https://ec.europa.eu/consumers/odr"
                rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>.<br/>
                <Trans>Unsere E-Mail-Adresse finden Sie oben unter "Kontakt". Wir sind nicht bereit oder verpflichtet, an
                    Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</Trans></p>
        </Layout>
    );
};

export default PrivacyPolicyPage;
