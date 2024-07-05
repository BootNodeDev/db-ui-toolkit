import React from 'react'

import { PrimaryButton } from './ButtonsDemo'
import { ComponentGrid } from '../helpers'

import { GeneralError, Title, useModal } from '../../index'

const Test = ({ onClose }: { onClose: () => void }) => {
  const { Modal, open, close } = useModal()

  return (
    <>
      <GeneralError
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec lorem
                consectetur adipiscing elit. Nullam nec purus nec lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        title="Consectetur adipiscing elit"
        actionButton={
          <div>
            <PrimaryButton onClick={onClose}>Close</PrimaryButton>
            <PrimaryButton onClick={open}>Open Another one</PrimaryButton>
          </div>
        }
      />
      <Modal>
        <GeneralError
          style={{ width: '900px', maxWidth: 'none' }}
          message="Yet another modal"
          title="Consectetur adipiscing elit"
          actionButton={
            <div>
              <PrimaryButton onClick={close}>Close this one</PrimaryButton>
            </div>
          }
        />
      </Modal>
    </>
  )
}

const ModalDemo = () => {
  const { Modal, open, close } = useModal()

  return (
    <div>
      <Title>Modal</Title>

      <ComponentGrid>
        <PrimaryButton onClick={open}>Open modal</PrimaryButton>
        <Modal>
          <Test onClose={close} />
        </Modal>
      </ComponentGrid>
    </div>
  )
}

export default ModalDemo
