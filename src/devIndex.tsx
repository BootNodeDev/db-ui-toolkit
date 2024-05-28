import React from 'react'
import { createRoot } from 'react-dom/client'
import { Wrapper, InnerContainer, Header, Main, Footer, LogoMini, Logo } from './index'

const App = () => (
  <Wrapper>
    <Header>
      <InnerContainer>
        <Logo />
      </InnerContainer>
    </Header>
    <Main>
      <InnerContainer>
        <p>Main contents here</p>
      </InnerContainer>
    </Main>
    <Footer>
      <InnerContainer>
        <LogoMini />
      </InnerContainer>
    </Footer>
  </Wrapper>
)

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
