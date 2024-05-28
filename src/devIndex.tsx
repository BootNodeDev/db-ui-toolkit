import React from 'react'
import { createRoot } from 'react-dom/client'
import { Wrapper, InnerContainer, Header, Main, Footer } from './index'

const App = () => (
  <Wrapper>
    <Header>
      <InnerContainer>Header contents</InnerContainer>
    </Header>
    <Main>
      <InnerContainer>
        <p>Main contents here</p>
      </InnerContainer>
    </Main>
    <Footer>
      <InnerContainer>Footer contents here</InnerContainer>
    </Footer>
  </Wrapper>
)

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
