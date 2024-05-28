import React from 'react'
import styles from './styles.module.scss'

import { Wrapper, InnerContainer, Header, Main, Footer, LogoMini, Logo } from '../index'

const DevPreview = () => {
  return (
    <Wrapper>
      <Header className={`${styles.header}`}>
        <InnerContainer>
          <Logo />
        </InnerContainer>
      </Header>
      <Main>
        <InnerContainer>
          <p>Main contents here</p>
        </InnerContainer>
      </Main>
      <Footer className={`${styles.footer}`}>
        <InnerContainer className={`${styles.footerInner}`}>
          <LogoMini />
        </InnerContainer>
      </Footer>
    </Wrapper>
  )
}

export default DevPreview
