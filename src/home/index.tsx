import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { styled } from 'styled-components'

import { GlobalStyles } from './GlobalStyles'

import TextDemo from './demo/TextDemo'
import ButtonsDemo from './demo/ButtonsDemo'
import DropdownDemo from './demo/DropdownDemo'
import TextfieldDemo from './demo/TextfieldDemo'
import SpinnerDemo from './demo/SpinnerDemo'
import ToastDemo from './demo/ToastDemo'
import CopyButtonExternalLinkButtonDemo from './demo/CopyButtonExternalLinkButtonDemo'
import GeneralErrorDemo from './demo/GeneralErrorDemo'

import {
  ContainerPadding,
  Footer as BaseFooter,
  Header as BaseHeader,
  InnerContainer,
  Logo,
  LogoMini,
  Main,
  SwitchThemeButton,
  Wrapper as BaseWrapper,
} from '../index'

const Wrapper = styled(BaseWrapper)`
  /**
   * CSS variables for some of the components
  */
  --button-primary-background-color: #8b46a4;
  --button-primary-background-color-hover: #2e3048;
  --button-primary-border-color: #8b46a4;
  --button-primary-border-color-hover: #2e3048;
  --button-primary-color: #fff;
  --button-primary-color-hover: #fff;
  --button-primary-background-color-disabled: #8b46a4;
  --button-primary-border-color-disabled: #8b46a4;
  --button-primary-color-disabled: #fff;

  --button-secondary-background-color: #2e3048;
  --button-secondary-background-color-hover: #8b46a4;
  --button-secondary-border-color: #2e3048;
  --button-secondary-border-color-hover: #8b46a4;
  --button-secondary-color: #fff;
  --button-secondary-color-hover: #fff;
  --button-secondary-background-color-disabled: #2e3048;
  --button-secondary-border-color-disabled: #2e3048;
  --button-secondary-color-disabled: #fff;

  row-gap: 32px;
`

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

const InnerMain = styled(Inner)`
  --inner-main-vertical-padding: 32px;

  flex-direction: column;
  padding-bottom: var(--inner-main-vertical-padding);
  padding-top: var(--inner-main-vertical-padding);
  row-gap: 50px;
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
const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <>
      <GlobalStyles />
      <Wrapper data-theme={theme}>
        <Header>
          <InnerHeader>
            <Logo />
            <SwitchThemeButton onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
          </InnerHeader>
        </Header>
        <Main>
          <InnerMain>
            <TextDemo />
            <ButtonsDemo />
            <DropdownDemo />
            <TextfieldDemo />
            <SpinnerDemo />
            <ToastDemo />
            <CopyButtonExternalLinkButtonDemo />
            <GeneralErrorDemo />
          </InnerMain>
        </Main>
        <Footer>
          <InnerFooter>
            <LogoMini />
          </InnerFooter>
        </Footer>
      </Wrapper>
    </>
  )
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
