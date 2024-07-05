import React from 'react'

import { PrimaryButton } from './ButtonsDemo'
import { ComponentGrid } from '../helpers'

import { GeneralError, Title, useDialog } from '../../index'

const DialogDemo = () => {
  const { Dialog, open, close } = useDialog()

  const openGeneralErrorDialog = () => {
    open(
      <GeneralError
        message="Consectetur adipiscing elit"
        title="Modal 1"
        actionButton={
          <div>
            <PrimaryButton onClick={close}>Close</PrimaryButton>
          </div>
        }
      />,
    )
  }

  const openModal_2 = () => {
    open(
      <GeneralError
        message="Consectetur adipiscing elit"
        title="Modal 2"
        actionButton={
          <div>
            <PrimaryButton onClick={close}>Close</PrimaryButton>
          </div>
        }
      />,
    )
  }

  return (
    <>
      <div>
        <Title>Dialog / Modal</Title>
        <ComponentGrid>
          <PrimaryButton onClick={openGeneralErrorDialog}>General Error</PrimaryButton>
          <PrimaryButton onClick={openModal_2}>Open modal 2</PrimaryButton>
        </ComponentGrid>
      </div>
      <Dialog />
    </>
  )
}

export default DialogDemo
