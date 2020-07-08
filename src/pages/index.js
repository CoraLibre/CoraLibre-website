import React from 'react'
import {Helmet} from 'react-helmet'

import Layout from '../components/Layout'
import Container from '../components/Container'
import ReasonsSection from "../components/Sections/reasons"
import ContactSection from "../components/Sections/contact"
import SupportSection from "../components/Sections/support"
import GoalsSection from "../components/Sections/goals"

const IndexPage = () => {
    return (
        <Layout pageName="home">
            <Helmet>
                <title>CoraLibre</title>
            </Helmet>
            <Container>
                <h1>CoraLibre</h1>
                <p>
                    Eine freie Open Source Implementierung der Corona-Tracing-API von Apple / Google für Android.
                </p>
                <p>
                    Kompatible Alternative zur deutschen Corona-Warn-App, die ohne Google-Play Services auskommt.
                </p>
            </Container>
            <ReasonsSection/>
            <GoalsSection/>
            <SupportSection/>
            <ContactSection/>
        </Layout>
    );
};

export default IndexPage;
