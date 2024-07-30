// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-restricted-imports
import React, { useState } from 'react'
import { styled } from 'styled-components'

import { createRoot } from 'react-dom/client'

import { GlobalStyles } from './GlobalStyles'
import ButtonsDemo from './demo/ButtonsDemo'
import CardDemo from './demo/CardDemo'
import CopyButtonExternalLinkButtonDemo from './demo/CopyButtonExternalLinkButtonDemo'
import DialogDemo from './demo/DialogDemo'
import DropdownDemo from './demo/DropdownDemo'
import GeneralMessageDemo from './demo/GeneralMessageDemo'
import SpinnerDemo from './demo/SpinnerDemo'
import TextDemo from './demo/TextDemo'
import TextfieldDemo from './demo/TextfieldDemo'
import ToastDemo from './demo/ToastDemo'
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
  --theme-button-primary-background-color: #8b46a4;
  --theme-button-primary-background-color-hover: #2e3048;
  --theme-button-primary-border-color: #8b46a4;
  --theme-button-primary-border-color-hover: #2e3048;
  --theme-button-primary-color: #fff;
  --theme-button-primary-color-hover: #fff;
  --theme-button-primary-background-color-disabled: #8b46a4;
  --theme-button-primary-border-color-disabled: #8b46a4;
  --theme-button-primary-color-disabled: #fff;

  --theme-button-secondary-background-color: #2e3048;
  --theme-button-secondary-background-color-hover: #8b46a4;
  --theme-button-secondary-border-color: #2e3048;
  --theme-button-secondary-border-color-hover: #8b46a4;
  --theme-button-secondary-color: #fff;
  --theme-button-secondary-color-hover: #fff;
  --theme-button-secondary-background-color-disabled: #2e3048;
  --theme-button-secondary-border-color-disabled: #2e3048;
  --theme-button-secondary-color-disabled: #fff;

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
            <CardDemo />
            <CopyButtonExternalLinkButtonDemo />
            <DialogDemo />
            <DropdownDemo />
            <GeneralMessageDemo />
            <SpinnerDemo />
            <TextfieldDemo />
            <ToastDemo />
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
