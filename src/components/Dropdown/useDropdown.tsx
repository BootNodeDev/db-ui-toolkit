import React, { type FC, useRef } from 'react'

import Dropdown, { type DropdownExposedProps, type Options } from './Dropdown'

interface DropdownOptions extends Options {
  id: string
}

interface Props {
  Dropdown: FC<DropdownOptions>
  closeDropdown: (id: string) => void
}

/**
 * @name useDropdown
 * @description A hook that returns a Dropdown component and its exposed methods
 *
 * @returns {Props} { Dropdown: FC<DropdownOptions>, closeDropdown: (id: string) => void } - The `Dropdown` component and the hook's methods.
 */
const useDropdown = (): Props => {
  /**
   * An object that all the dropdown refs will be stored in
   */
  const dropdownRefs = useRef<{ [key: string]: DropdownExposedProps | null }>({})

  /**
   * Closes the dropdown using the dropdown's id and the ref's exposed method
   */
  const closeDropdown = (id: string) => {
    if (dropdownRefs.current[id]) {
      dropdownRefs.current[id]?.closeDropdown()
    }
  }

  return {
    Dropdown: ({ id, ...props }) => (
      <Dropdown
        ref={(el) => {
          dropdownRefs.current[id] = el
        }}
        {...props}
      />
    ),
    closeDropdown,
  }
}

export default useDropdown
