import React from "react"

import Layout from "../core/Layout"

import Main from "../components/Main"
import SectionLead from "../containers/SectionLead"

const Home: React.FC = () => {
  return (
    <Layout>
      <Main>
        <SectionLead />
      </Main>
    </Layout>
  )
}

export default Home
