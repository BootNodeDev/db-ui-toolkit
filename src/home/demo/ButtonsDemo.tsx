import React from 'react'

import { styled } from 'styled-components'

import { ComponentGrid } from '../helpers'
import { Button, Title } from '../../index'

export const PrimaryButton = styled(Button).attrs({ $variant: 'primary' })``
export const SecondaryButton = styled(Button).attrs({
  $variant: 'secondary',
})``

const ButtonsDemo = () => {
  return (
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
  )
}

export default ButtonsDemo
