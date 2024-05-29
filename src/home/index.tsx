import React from 'react'
import { createRoot } from 'react-dom/client'
import { styled } from 'styled-components'

import { GlobalStyles } from './GlobalStyles'

import {
  Wrapper,
  InnerContainer,
  Header as BaseHeader,
  Main,
  Footer as BaseFooter,
  LogoMini,
  Logo,
  ContainerPadding,
} from '../index'

const Header = styled(BaseHeader)`
  height: 48px;
  margin-top: 48px;
`

const Inner = styled(InnerContainer)`
  ${ContainerPadding}
`

const Footer = styled(BaseFooter)`
  height: 92px;
`

const InnerFooter = styled(Inner)`
  justify-content: center;
`
/**
 * Demo preview of the components
 */
const App = () => (
  <>
    <GlobalStyles />
    <Wrapper>
      <Header>
        <Inner>
          <Logo />
        </Inner>
      </Header>
      <Main>
        <Inner>
          <p>Main contents here</p>
        </Inner>
      </Main>
      <Footer>
        <InnerFooter>
          <LogoMini />
        </InnerFooter>
      </Footer>
    </Wrapper>
  </>
)

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
