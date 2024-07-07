import React, { useCallback, useRef, useState, useMemo } from 'react'
import { styled } from 'styled-components'
import { PrimaryButton, SecondaryButton } from './ButtonsDemo'
import {
  ActionStates,
  Button,
  Card,
  Dropdown,
  DropdownExposedProps,
  Item as BaseItem,
  Text,
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

const DropdownDemoExamples = () => {
  const filterItems = useMemo(
    () => [
      {
        text: 'All',
        onClick: () => {
          console.log('All action')
        },
      },
      {
        text: 'Last month',
        onClick: () => {
          console.log('Last month action')
        },
      },
      {
        text: 'Last week',
        onClick: () => {
          console.log('Last week action')
        },
      },
      {
        text: 'Today',
        $state: 'ok' as ActionStates,
        onClick: () => {
          console.log('Today action')
        },
      },
    ],
    [],
  )

  const fileItems = [
    {
      onClick: () => console.log('Open action'),
      text: 'Open',
    },
    {
      onClick: () => console.log('Save action'),
      text: 'Save',
    },
    {
      disabled: true,
      onClick: () => console.log('Close action'),
      text: 'Close',
    },
    {
      $state: 'danger' as ActionStates,
      onClick: () => console.log('Delete action'),
      text: 'Delete',
    },
  ]

  const [filterItem, setFilterItem] = useState<number | undefined>()

  /**
   * Handles the selection of the filter item
   * You can handle the click event of the item here, or pass it to the `Item` component
   */
  const onSelectFilter = useCallback(
    () => (index: number) => {
      setFilterItem(index)
      filterItems[index]?.onClick?.()
    },
    [filterItems],
  )

  /**
   * Handles the closing of the Dropdown component when the button is clicked
   */
  const dropdownRef = useRef<DropdownExposedProps>(null)

  /**
   * A hook that returns a Dropdown component and its exposed methods
   */
  const { Dropdown: HookDropdown, closeDropdown } = useDropdown()

  const handleCloseDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.closeDropdown()
    }
  }

  const defaultActiveItem = 0

  return (
    <div>
      <Text>
        <i>&quot;All&quot;</i> dropdown highlights the selected item and closes when an item is
        clicked.
      </Text>
      <Text as="div">
        <Dropdown
          defaultActiveItem={defaultActiveItem}
          onItemSelect={onSelectFilter}
          button={
            <PrimaryButton>
              <span>
                {filterItem !== undefined
                  ? filterItems[filterItem].text
                  : filterItems[defaultActiveItem].text}
              </span>
              <span>▾</span>
            </PrimaryButton>
          }
          items={filterItems.map(({ text, $state, onClick }, index) => {
            return (
              <Item key={index} $state={$state} onClick={onClick}>
                {text}
              </Item>
            )
          })}
        />
      </Text>
      <Text>
        <i>&quot;File&quot;</i> dropdown does not highlight the selected item and closes when an
        item is clicked.
      </Text>
      <Text as="div">
        <Dropdown
          button={
            <SecondaryButton>
              <span>File</span>
              <span>▾</span>
            </SecondaryButton>
          }
          highlightActiveItem={false}
          items={fileItems.map(({ text, $state, onClick, disabled }, index) => {
            return (
              <Item key={index} onClick={onClick} $state={$state} disabled={disabled}>
                {text}
              </Item>
            )
          })}
        />
      </Text>
      <Text>
        <i>&quot;Info&quot;</i> dropdown stays open when you click on it and must be closed by
        clicking a button.
      </Text>
      <Text>
        The first example uses the regular <code>Dropdown</code> component. Closing behavior is
        handled by using React&apos;s <code>useRef</code>
      </Text>
      <Text as="div">
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
      </Text>
      <Text>
        The second example uses the <code>useDropdown</code> hook. Closing behavior is handled by
        using the hook&apos;s <code>closeDropdown</code> method. Needs a unique id for earch
        dropdown created by the hook.
      </Text>
      <Text as="div">
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
              <Text>
                This dropdown&apos;s id is <code>&apos;hook-info&apos;</code>.
              </Text>
              <Text>
                It will stay open if you click on it. The button below uses{' '}
                <code>closeDropdown(&apos;hook-info&apos;)</code> to close it.
              </Text>
              <Button onClick={() => closeDropdown('hook-info')}>Close It!</Button>
            </CustomDropdownItems>
          }
        />
      </Text>
    </div>
  )
}

export default DropdownDemoExamples
