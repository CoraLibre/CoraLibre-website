import React from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../components/Layout'
import Container from '../components/Container'

const PrivacyPolicyPage = () => {
    return (
        <Layout pageName="home">
            <Helmet>
                <title>CoraLibre - Datenschutzerklärung</title>
            </Helmet>
            <Container>
                <h1>Datenschutzerklärung</h1>
                <p>
                    Text
                </p>
            </Container>
        </Layout>
    );
};

export default PrivacyPolicyPage;
