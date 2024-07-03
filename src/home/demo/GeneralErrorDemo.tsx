import React from 'react'

import { PrimaryButton } from './ButtonsDemo'
import { ComponentGrid } from '../helpers'

import { GeneralError, Title } from '../../index'

const GeneralErrorDemo = () => {
  return (
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

export default GeneralErrorDemo
