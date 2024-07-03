import React, { useRef } from 'react'
import { styled } from 'styled-components'

import { PrimaryButton, SecondaryButton } from './ButtonsDemo'
import { ComponentGrid } from '../helpers'

import {
  ActionStates,
  Button,
  Card,
  Dropdown,
  DropdownExposedMethods,
  Item as BaseItem,
  Text,
  Title,
} from '../../index'

const Item = styled(BaseItem)`
  min-width: 160px;
`

const CustomDropdownItems = styled(Card)`
  --custom-dropdown-color: #fff;
  --custom-dropdown-background-color: #8b46a4;
  --theme-color-text: var(--custom-dropdown-color);

  background-color: var(--custom-dropdown-background-color);
  color: var(--custom-dropdown-color);
  width: 350px;
`

const DropdownDemo = () => {
  const profileDropdownItems = [
    {
      text: 'Profile',
    },
    {
      text: 'Activity',
    },
    {
      text: 'Settings',
      extraProps: {
        $state: 'ok' as ActionStates,
        onClick: () => console.log('Settings action'),
      },
    },
    {
      text: 'Log Out',
      extraProps: {
        $state: 'danger' as ActionStates,
        onClick: () => console.log('Log out action'),
      },
    },
  ]

  const filterDropdownItems = [
    {
      text: 'All',
    },
    {
      text: 'Important',
    },
    {
      text: 'Hidden',
      extraProps: {
        disabled: true,
      },
    },
    {
      text: 'Deleted',
    },
  ]

  const dropdownRef = useRef<DropdownExposedMethods>(null)

  const handleCloseDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.closeDropdown()
    }
  }

  return (
    <div>
      <Title>Dropdown</Title>
      <ComponentGrid>
        <Dropdown
          ref={dropdownRef}
          closeOnClick={false}
          button={
            <Button>
              <span>Info</span>
              <span>▾</span>
            </Button>
          }
          items={
            <CustomDropdownItems>
              <Text>Title</Text>
              <Text>
                This dropdown uses a single item. Also the item&apos;s container is a custom one.
              </Text>
              <Text>It should stay open when you click on it</Text>
              <Button onClick={handleCloseDropdown}>Close It!</Button>
            </CustomDropdownItems>
          }
        />
        <Dropdown
          button={
            <PrimaryButton>
              <span>Profile</span>
              <span>▾</span>
            </PrimaryButton>
          }
          items={profileDropdownItems.map(({ text, extraProps }, index) => {
            return (
              <Item key={index} {...extraProps}>
                {text}
              </Item>
            )
          })}
        />
        <Dropdown
          button={
            <SecondaryButton>
              <span>Filter</span>
              <span>▾</span>
            </SecondaryButton>
          }
          highlightItem={0}
          items={filterDropdownItems.map(({ text, extraProps }, index) => {
            return (
              <Item key={index} {...extraProps}>
                {text}
              </Item>
            )
          })}
        />
      </ComponentGrid>
    </div>
  )
}

export default DropdownDemo
