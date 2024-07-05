import React from 'react'

import { PrimaryButton } from './ButtonsDemo'
import { ComponentGrid } from '../helpers'

import { GeneralError, Title, useDialog } from '../../index'

const ModalDemo = () => {
  const { Dialog, open, close } = useDialog()

  const openModal_1 = () => {
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
        <Title>Modal</Title>
        <ComponentGrid>
          <PrimaryButton onClick={openModal_1}>Open modal 1</PrimaryButton>
          <PrimaryButton onClick={openModal_2}>Open modal 2</PrimaryButton>
        </ComponentGrid>
      </div>
      <Dialog />
    </>
  )
}

export default ModalDemo
