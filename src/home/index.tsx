import React from 'react'
import { createRoot } from 'react-dom/client'
import { styled } from 'styled-components'

import { GlobalStyles } from './GlobalStyles'

import {
  ContainerPadding,
  Footer as BaseFooter,
  Header as BaseHeader,
  InnerContainer,
  Logo,
  LogoMini,
  Main,
  SwitchThemeButton,
  Wrapper,
} from '../index'

const Header = styled(BaseHeader)`
  height: 48px;
  margin-top: 48px;
`

const Inner = styled(InnerContainer)`
  ${ContainerPadding}
`

const InnerHeader = styled(Inner)`
  justify-content: space-between;
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
        <InnerHeader>
          <Logo />
          <SwitchThemeButton onClick={() => console.log('Theme switched')} theme="light" />
        </InnerHeader>
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
