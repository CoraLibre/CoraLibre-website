import React from 'react';

import Layout from '../components/Layout';
import {Link} from "gatsby"

const NotFoundPage = () => {
    return (
        <Layout>
            <h1>Diese Seite existiert nicht...</h1>
            <p>Vielleicht findest du auf unserer Startseite das, was du suchst?</p>
            <p><Link to="/">Zurück zur Startseite</Link></p>
        </Layout>
    );
}

export default NotFoundPage
