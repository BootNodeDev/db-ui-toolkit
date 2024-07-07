import React from 'react'
import DropdownDemoExamples from './DropdownDemoExamples'
import { Title, Text } from '../../index'

const DropdownDemo = () => {
  return (
    <div>
      <Title>Dropdown</Title>
      <Text>
        A dropdown component with different options. It can be used directly or with a hook.
      </Text>
      <hr />
      <Title>Examples</Title>
      <DropdownDemoExamples />
    </div>
  )
}

export default DropdownDemo
