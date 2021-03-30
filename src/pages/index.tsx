import React from "react"

import Layout from "../core/Layout"

import Main from "../components/Main"
import SectionLead from "../containers/SectionLead"
import SectionAbout from "../containers/SectionAbout"

const Home: React.FC = () => {
  return (
    <Layout>
      <Main>
        <SectionLead />
        <SectionAbout />
      </Main>
    </Layout>
  )
}

export default Home
