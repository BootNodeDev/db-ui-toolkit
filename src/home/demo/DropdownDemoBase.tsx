import React, { useRef, useState } from 'react'
import { styled } from 'styled-components'

import { PrimaryButton, SecondaryButton } from './ButtonsDemo'
import { ComponentGrid } from '../helpers'

import {
  ActionStates,
  Button,
  Card,
  Dropdown,
  DropdownExposedProps,
  Item as BaseItem,
  Text,
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

const DropdownDemoBase = () => {
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

  const [currentItem, setCurrentItem] = useState(0)

  const onProfileItemSelect = (index: number) => {
    setCurrentItem(index)
  }

  /**
   * This handles the closing of the <Dropdown /> component when the button is clicked
   */
  const dropdownRef = useRef<DropdownExposedProps>(null)

  const handleCloseDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.closeDropdown()
    }
  }

  return (
    <div>
      <Text>
        Using <code>&lt;Dropdown /&gt;</code>
      </Text>
      <ComponentGrid>
        <Dropdown
          onItemSelect={onProfileItemSelect}
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
        <Dropdown
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
      </ComponentGrid>
    </div>
  )
}

export default DropdownDemoBase
