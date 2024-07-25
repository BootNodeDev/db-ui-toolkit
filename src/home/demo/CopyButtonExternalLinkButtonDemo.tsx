import React from 'react'
import { styled } from 'styled-components'

import { ComponentGrid } from '../helpers'

import { CopyButton, ExternalLink, Title } from '../../index'

const CopyButtonText = styled(CopyButton)`
  --theme-copy-button-color: #8b46a4;
  --theme-copy-button-color-hover: #2e3048;
`

const ExternalLinkText = styled(ExternalLink)`
  --theme-external-link-button-color: #8b46a4;
  --theme-external-link-button-color-hover: #2e3048;
`

const CopyButtonExternalLinkButtonDemo = () => {
  return (
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
  )
}

export default CopyButtonExternalLinkButtonDemo
