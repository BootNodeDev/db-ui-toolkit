import React from 'react'

import { PrimaryButton } from './ButtonsDemo'
import { ComponentGrid } from '../helpers'

import { GeneralMessage, Title } from '../../index'

const GeneralMessageDemo = () => {
  return (
    <div>
      <Title>General Message</Title>
      <ComponentGrid>
        <GeneralMessage
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus nec lorem
                consectetur adipiscing elit. Nullam nec purus nec lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          title="Consectetur adipiscing elit"
          actionButton={
            <PrimaryButton onClick={() => window.location.reload()}>Reload</PrimaryButton>
          }
        />
        <GeneralMessage
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
        />
      </ComponentGrid>
    </div>
  )
}

export default GeneralMessageDemo
