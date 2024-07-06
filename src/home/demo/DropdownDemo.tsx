import React, { useEffect, useRef } from 'react'
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
  Title,
  useDropdown,
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

  const dropdownRef = useRef<DropdownExposedProps>(null)

  const handleCloseDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.closeDropdown()
    }
  }

  const { Dropdown: HookDropdown, closeDropdown } = useDropdown()

  return (
    <div>
      <Title>Dropdown</Title>
      <ComponentGrid>
        <HookDropdown
          id="hook-profile-dropdown"
          highlightSelectedItem
          button={
            <PrimaryButton>
              <span>Hook Profile</span>
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
        <HookDropdown
          id="hooked-dropdown"
          closeOnClick={false}
          button={
            <Button>
              <span>Hooked dropdown</span>
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
                It will stay open if you click on it. You can use the button below to close it.
              </Text>
              <Button onClick={closeDropdown}>Close It!</Button>
            </CustomDropdownItems>
          }
        />
        <HookDropdown
          id="hooked-drsopdown"
          closeOnClick={false}
          button={
            <Button>
              <span>Hooked dropdown</span>
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
                It will stay open if you click on it. You can use the button below to close it.
              </Text>
              <Button onClick={closeDropdown}>Close It!</Button>
            </CustomDropdownItems>
          }
        />

        <HookDropdown
          id="hook-profile-drsopdown"
          highlightSelectedItem
          button={
            <PrimaryButton>
              <span>Hook Profile</span>
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
