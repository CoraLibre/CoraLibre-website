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
                <p>
                    Text
                </p>
        </Layout>
    );
};

export default PrivacyPolicyPage;
