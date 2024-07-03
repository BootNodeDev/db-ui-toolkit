import React from 'react'

import { ComponentGrid } from '../helpers'

import { Title, Toast } from '../../index'

const ToastDemo = () => {
  return (
    <div>
      <Title>Toast</Title>
      <ComponentGrid>
        <Toast>This is how a simple toast would look.</Toast>
      </ComponentGrid>
    </div>
  )
}

export default ToastDemo
