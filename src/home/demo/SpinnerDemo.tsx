import React from 'react'
import { ComponentGrid } from '../helpers'

import { Spinner, Title } from '../../index'

const SpinnerDemo = () => {
  return (
    <div>
      <Title>Spinner</Title>
      <ComponentGrid>
        <Spinner />
        <Spinner width={25} height={25} />
      </ComponentGrid>
    </div>
  )
}

export default SpinnerDemo
