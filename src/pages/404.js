import React from 'react'
import Layout from '../components/Layout';
import {Link, Trans} from 'gatsby-plugin-react-i18next'

const NotFoundPage = () => {
    return (
        <Layout>
            <h1><Trans>Diese Seite existiert nicht...</Trans></h1>
            <p><Trans>Vielleicht findest du auf unserer Startseite das, was du suchst?</Trans></p>
            <p><Link to="/"><Trans>Zurück zur Startseite</Trans></Link></p>
        </Layout>
    );
}

export default NotFoundPage
