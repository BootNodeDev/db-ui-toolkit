import React from 'react'

import { ComponentGrid } from '../helpers'

import { Textfield, Title } from '../../index'

const TextfieldDemo = () => {
  return (
    <div>
      <Title>Textfield</Title>
      <ComponentGrid>
        <Textfield placeholder="Write something..." />
        <Textfield $status="error" defaultValue="Error" />
        <Textfield $status="ok" defaultValue="Success" />
        <Textfield disabled placeholder="Disabled" />
        <Textfield readOnly placeholder="Read only" />
      </ComponentGrid>
    </div>
  )
}

export default TextfieldDemo
