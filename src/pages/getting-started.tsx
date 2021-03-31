import React from "react"
import styled from "styled-components"

import Layout from "../core/Layout"
import Main from "../components/Main"
import SectionLead from "../containers/PageStarted/SectionLead"
import SectionMain from "../containers/PageStarted/SectionMain"

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.accent};
`

const GettingStarted: React.FC = () => {
  return (
    <Layout isSimpleHeader>
      <Main>
        <Wrapper>
          <SectionLead />
          <SectionMain />
        </Wrapper>
      </Main>
    </Layout>
  )
}

export default GettingStarted
