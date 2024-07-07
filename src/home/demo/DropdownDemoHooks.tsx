import React, { useState } from 'react'
import { styled } from 'styled-components'

import { PrimaryButton, SecondaryButton } from './ButtonsDemo'
import { ComponentGrid } from '../helpers'

import { ActionStates, Button, Card, Item as BaseItem, Text, useDropdown } from '../../index'

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
  const profileItems = [
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
        onClick: () => {
          console.log('Settings action')
        },
      },
    },
    {
      text: 'Log Out',
      extraProps: {
        $state: 'danger' as ActionStates,
        onClick: () => {
          console.log('Log out action')
        },
      },
    },
  ]
  const [currentItem, setCurrentItem] = useState(0)

  const onProfileItemSelect = (index: number) => {
    setCurrentItem(index)
  }

  const actionsItems = [
    {
      text: 'Open',
    },
    {
      text: 'Save',
    },
    {
      text: 'Close',
      extraProps: {
        disabled: true,
      },
    },
    {
      text: 'Delete',
      extraProps: {
        $state: 'danger' as ActionStates,
      },
    },
  ]

  /**
   * This is a hook that returns a Dropdown component and its exposed methods
   */
  const { Dropdown: HookDropdown, closeDropdown } = useDropdown()

  return (
    <div>
      <Text>
        Using <code>Dropdown</code> from <code>useDropdown</code>, a <code>closeDropdown</code>{' '}
        method is exposed. Needs a unique id for earch dropdown.
      </Text>
      <ComponentGrid>
        <HookDropdown
          onItemSelect={onProfileItemSelect}
          id="hook-profile"
          defaultActiveItem={0}
          button={
            <PrimaryButton>
              <span>{profileItems[currentItem].text}</span>
              <span>▾</span>
            </PrimaryButton>
          }
          items={profileItems.map(({ text, extraProps }, index) => {
            return (
              <Item key={index} {...extraProps}>
                {text}
              </Item>
            )
          })}
        />
        <HookDropdown
          id="hook-actions"
          button={
            <SecondaryButton>
              <span>Actions</span>
              <span>▾</span>
            </SecondaryButton>
          }
          highlightActiveItem={false}
          items={actionsItems.map(({ text, extraProps }, index) => {
            return (
              <Item key={index} {...extraProps}>
                {text}
              </Item>
            )
          })}
        />
        <HookDropdown
          id="hook-info"
          closeOnClick={false}
          button={
            <Button>
              <span>Info</span>
              <span>▾</span>
            </Button>
          }
          items={
            <CustomDropdownItems>
              <Text>Created from a hook</Text>
              <Text>
                This dropdown comes from a <code>useDropdown</code> hook.
              </Text>
              <Text>
                It will stay open if you click on it. The button below to closes it using{' '}
                <code>closeDropdown(&apos;hook-info&apos;)</code> from the hook.
              </Text>
              <Button onClick={() => closeDropdown('hook-info')}>Close It!</Button>
            </CustomDropdownItems>
          }
        />
      </ComponentGrid>
    </div>
  )
}

export default DropdownDemo
