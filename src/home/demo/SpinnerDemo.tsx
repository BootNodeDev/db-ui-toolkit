import React from 'react'
import { ComponentGrid } from '../helpers'

import { Spinner, Title } from '../../index'

const SpinnerDemo = () => {
  return (
    <div>
      <Title>Spinner</Title>
      <ComponentGrid>
        <Spinner />
        <Spinner $size={25} />
      </ComponentGrid>
    </div>
  )
}

export default SpinnerDemo
