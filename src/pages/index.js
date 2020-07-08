import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Ziele from "../components/sections/ziele"
import Footer from "../components/sections/footer"
import Unterstuetzung from "../components/sections/unterstuetzung"
import Kontakt from "../components/sections/kontakt"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <Ziele />
    <Unterstuetzung />
    <Kontakt />
    <Footer />
  </Layout>
)

export default IndexPage
