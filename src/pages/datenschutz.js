import React from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../components/Layout'

const PrivacyPolicyPage = () => {
    return (
        <Layout pageName="home">
            <Helmet>
                <title>CoraLibre - Datenschutzerklärung</title>
            </Helmet>
            <h1>Datenschutzerklärung</h1>

            <h2>1. Datenschutz auf dieser Webseite</h2>
            <p>Wir verwenden auf dieser Webseite keine Cookies. Auch Zählpixel bzw. Webbugs oder Scripte, die zum
                BenutzerInnentracking dienen, werden nicht eingesetzt.
            </p>

            <p>Serverbetreiber der Webseite ist der externe Dienstleister Netlify. Um die Kommunikation zwischen dem
                Browser
                des/r Aufrufenden und dieser Webseite zu ermöglichen, muss der Server des Dienstleisters insb. die
                IP-Adresse, mit der der/die AufruferIn auf unsere Webseite zugreift, verarbeiten. Das "Privacy
                Statement"
                von Netlify findet sich <a target="_blank" href="https://www.netlify.com/privacy/"
                                           rel="noopener noreferrer" className="link">unter diesem Link</a>.
            </p>

            <h2>2. E-Mail-Kommunikation</h2>
            <p>Auch unser E-Mail-Server wird von einem externen Dienstleister betrieben, der E-Mails für uns empfängt,
                vorhält und verschickt.
            </p>
        </Layout>
    );
};

export default PrivacyPolicyPage;
