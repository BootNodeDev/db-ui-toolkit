import React from 'react'
import { createRoot } from 'react-dom/client'
import { styled } from 'styled-components'

import { GlobalStyles } from './GlobalStyles'

import {
  Button,
  ContainerPadding,
  Footer as BaseFooter,
  Header as BaseHeader,
  InnerContainer,
  Logo,
  LogoMini,
  Main,
  SwitchThemeButton,
  Text,
  ThemedButton,
  Title,
  Wrapper as BaseWrapper,
} from '../index'

const Wrapper = styled(BaseWrapper)`
  /**
   * CSS variables for demo themed buttons
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
`

const PrimaryButton = styled(ThemedButton)``

PrimaryButton.defaultProps = {
  $cssVarRoot: '--button-primary',
}

const SecondaryButton = styled(ThemedButton)``

SecondaryButton.defaultProps = {
  $cssVarRoot: '--button-secondary',
}

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
`

const Footer = styled(BaseFooter)`
  height: 92px;
`

const InnerFooter = styled(Inner)`
  justify-content: center;
`

const ComponentGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
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
        <InnerMain>
          <Title>Title text</Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam</Text>
          <Text>
            <b>Buttons</b>
          </Text>
          <ComponentGrid>
            <Button>Base button</Button>
            <PrimaryButton>Themed button</PrimaryButton>
            <SecondaryButton>Themed button</SecondaryButton>
          </ComponentGrid>
          <ComponentGrid>
            <Button disabled>Base button</Button>
            <PrimaryButton disabled>Themed button</PrimaryButton>
            <SecondaryButton disabled>Themed button</SecondaryButton>
          </ComponentGrid>
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

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)