import React from 'react'

import DropdownDemoBase from './DropdownDemoBase'
import DropdownDemoHooks from './DropdownDemoHooks'

import { Title, Text } from '../../index'

const DropdownDemo = () => {
  return (
    <div>
      <Title>Dropdown</Title>
      <Text>
        <i>Profile</i> dropdown highlights the selected item and closes when an item is clicked.
      </Text>
      <Text>
        <i>Actions</i> dropdown does not highlight the selected item and closes when an item is
        clicked.
      </Text>
      <Text>
        <i>Info</i> dropdown stays open when you click on it and must be closed by clicking a
        button.
      </Text>
      <DropdownDemoBase />
      <DropdownDemoHooks />
    </div>
  )
}

export default DropdownDemo
