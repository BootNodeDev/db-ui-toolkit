import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { styled } from 'styled-components'

import { GlobalStyles } from './GlobalStyles'

import {
  ActionStates,
  Button,
  Card,
  ContainerPadding,
  CopyButton,
  Dropdown,
  ExternalLink,
  Footer as BaseFooter,
  GeneralError,
  Header as BaseHeader,
  InnerContainer,
  Item as BaseItem,
  Logo,
  LogoMini,
  Main,
  Spinner,
  SwitchThemeButton,
  Text,
  Textfield,
  ThemedButton,
  Title,
  Toast,
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

  row-gap: 32px;
`

const PrimaryButton = styled(ThemedButton).attrs({ $cssVarRoot: '--button-primary' })``

const SecondaryButton = styled(ThemedButton).attrs({ $cssVarRoot: '--button-secondary' })``

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

const ComponentGrid = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 16px;
`

const Item = styled(BaseItem)`
  min-width: 160px;
`

const CustomDropdownItems = styled(Card)<{ $closeOnClick?: boolean }>`
  --custom-dropdown-color: #fff;
  --custom-dropdown-background-color: #8b46a4;
  --theme-color-text: var(--custom-dropdown-color);

  background-color: var(--custom-dropdown-background-color);
  color: var(--custom-dropdown-color);
  font-size: 14px;
  line-height: 1.4;
  width: 200px;
`

const CopyButtonText = styled(CopyButton)`
  --copy-button-color: #8b46a4;
  --copy-button-color-hover: #2e3048;
`

const ExternalLinkText = styled(ExternalLink)`
  --external-link-button-color: #8b46a4;
  --external-link-button-color-hover: #2e3048;
`

/**
 * Demo preview of the components
 */
const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const profileDropdownItems = [
    {
      text: 'Profile',
    },
    {
      text: 'Activity',
    },
    {
      text: 'Settings',
      extraProps: {
        $state: 'ok' as ActionStates,
        $closeOnClick: false,
        onClick: () => alert('Settings modal, dropdown stays open'),
      },
    },
    {
      text: 'Log Out',
      extraProps: {
        $state: 'danger' as ActionStates,
        onClick: () => console.log('Log out action'),
      },
    },
  ]

  const filterDropdownItems = [
    {
      text: 'All',
    },
    {
      text: 'Important',
    },
    {
      text: 'Hidden',
      extraProps: {
        disabled: true,
      },
    },
    {
      text: 'Deleted',
    },
  ]

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
            <div>
              <Title>Generic title and text</Title>
              <Text>Lorem ipsum dolors sit ameat, adipiscing elit. Nullam</Text>
            </div>
            <div>
              <Title>Buttons</Title>
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
            </div>
            <div>
              <Title>Dropdown</Title>
              <ComponentGrid>
                <Dropdown
                  button={
                    <Button>
                      <span>Info</span>
                      <span>▾</span>
                    </Button>
                  }
                  items={
                    <CustomDropdownItems $closeOnClick={false}>
                      <Text>Title</Text>
                      <span>
                        This dropdown uses a single item. Also the item&apos;s container is a custom
                        one.
                      </span>
                      <span>It should stay open when you click on it</span>
                    </CustomDropdownItems>
                  }
                />
                <Dropdown
                  button={
                    <PrimaryButton>
                      <span>Profile</span>
                      <span>▾</span>
                    </PrimaryButton>
                  }
                  items={profileDropdownItems.map(({ text, extraProps }, index) => {
                    return (
                      <Item key={index} {...extraProps}>
                        {text}
                      </Item>
                    )
                  })}
                />
                <Dropdown
                  button={
                    <SecondaryButton>
                      <span>Filter</span>
                      <span>▾</span>
                    </SecondaryButton>
                  }
                  highlightItem={0}
                  items={filterDropdownItems.map(({ text, extraProps }, index) => {
                    return (
                      <Item key={index} {...extraProps}>
                        {text}
                      </Item>
                    )
                  })}
                />
              </ComponentGrid>
            </div>
            <div>
              <Title>Textfield</Title>
              <ComponentGrid>
                <Textfield placeholder="Write something..." />
                <Textfield $status="error" defaultValue="Error" />
                <Textfield $status="ok" defaultValue="Success" />
                <Textfield disabled placeholder="Disabled" />
                <Textfield readOnly placeholder="Read only" />
              </ComponentGrid>
            </div>
            <div>
              <Title>Spinner</Title>
              <ComponentGrid>
                <Spinner />
                <Spinner width={25} height={25} />
              </ComponentGrid>
            </div>
            <div>
              <Title>Toast</Title>
              <ComponentGrid>
                <Toast>This is how a simple toast would look.</Toast>
              </ComponentGrid>
            </div>
            <ComponentGrid>
              <div>
                <Title>Copy button</Title>
                <ComponentGrid>
                  <CopyButton value="Value to copy" onClick={() => console.log('Text copied!')} />
                  <CopyButtonText
                    value="Another value to be copied"
                    onClick={() => console.log('Text copied!')}
                  >
                    Click me to copy
                  </CopyButtonText>
                </ComponentGrid>
              </div>
              <div>
                <Title>External Link</Title>
                <ComponentGrid>
                  <ExternalLink href="https://www.bootnode.dev/" />
                  <ExternalLinkText href="https://github.com/BootNodeDev/dAppBooster">
                    Open external link
                  </ExternalLinkText>
                </ComponentGrid>
              </div>
            </ComponentGrid>
            <div>
              <Title>General Error</Title>
              <ComponentGrid>
                <GeneralError
                  message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec lorem
                consectetur adipiscing elit. Nullam nec purus nec lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  title="Consectetur adipiscing elit"
                  actionButton={
                    <PrimaryButton onClick={() => window.location.reload()}>Reload</PrimaryButton>
                  }
                />
                <GeneralError
                  message={
                    <>
                      <p>
                        Error: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nu nec purus
                        nec lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        nec purus nec lorem.
                      </p>
                      <p>Source:</p>
                      <pre>
                        <code>
                          {`function myFunction() {
    console.log('Hello, World!');
}`}
                        </code>
                      </pre>
                    </>
                  }
                  title="Error 500"
                />
              </ComponentGrid>
            </div>
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
