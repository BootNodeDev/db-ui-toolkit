import React from 'react'

import { PrimaryButton } from './ButtonsDemo'
import { ComponentGrid } from '../helpers'

import { GeneralError, Title, useDialog, Modal, Text } from '../../index'

const DialogDemo = () => {
  const { Dialog, open, close } = useDialog()

  const openGeneralErrorDialog = () => {
    open(
      <GeneralError
        message={
          <>
            <p>
              Error: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nu nec purus nec
              lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec
              lorem.
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
        actionButton={<PrimaryButton onClick={close}>Close</PrimaryButton>}
      />,
    )
  }

  const openModal = () => {
    open(
      <Modal onClose={close} width="sm">
        <Title>Default modal component</Title>
        <Text>
          You can put anything in it, it comes handy if you don&apos;t have a custom modal component
          to show and need a quick solution.
        </Text>
        <Text>
          A default close button will be shown if you provide an <code>onClose</code> prop.
        </Text>
        <Text>
          You can also customize the width of the modal by providing a <code>width</code> prop.
          Possible values are <code>sm</code>, <code>md</code>, <code>lg</code> or a custom string
          (i.e. <code>&apos;100%&apos;</code>, <code>&apos;800px&apos;</code>,{' '}
          <code>&apos;10rem&apos;</code>, etc.).
        </Text>
      </Modal>,
    )
  }

  return (
    <>
      <div>
        <Title>Dialog / Modal</Title>
        <Text>
          The <code>useDialog</code> hook is used to show messages, errors, confirmations, etc.
          It&apos;s very flexible and can be customized to show any content you want.
        </Text>
        <Text>
          <code>useDialog</code> return values are
        </Text>
        <Text>
          <code>open</code> - a function that takes a React element as an argument and shows it in a
          dialog.
        </Text>
        <Text>
          <code>close</code> - a function that closes the dialog.
        </Text>
        <Text>
          <code>Dialog</code> - a React component that can be used to create custom dialogs.{' '}
          <code>Dialog</code>&apos;s props <code>closeOnEscape</code> and{' '}
          <code>closeOnOutsideClick</code> are available to control whether the modal should close
          when the user presses the escape key or clicks outside the modal.
        </Text>
        <Text>
          A basic <code>&lt;Modal /&gt;</code> component is also available for general use.
        </Text>
        <ComponentGrid>
          <PrimaryButton onClick={openModal}>Open modal</PrimaryButton>
          <PrimaryButton onClick={openGeneralErrorDialog}>General Error</PrimaryButton>
        </ComponentGrid>
      </div>
      <Dialog />
    </>
  )
}

export default DialogDemo
