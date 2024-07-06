import React, { type FC, useRef } from 'react'

import Dropdown, { DropdownExposedProps, type Options } from './Dropdown'

export interface Props extends DropdownExposedProps {
  Dropdown: FC<Options>
}

/**
 * @name useDropdown
 * @description A hook that returns a Dropdown component and its exposed methods
 *
 * @returns {Props} { Dropdown: FC<Options>, closeDropdown: () => void } - The `Dropdown` component and the hook's methods.
 */
const useDropdown = (): Props => {
  const dropdownRef = useRef<DropdownExposedProps>(null)

  /**
   * Closes the dropdown
   */
  const closeDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.closeDropdown()
    }
  }

  return {
    Dropdown: ({ ...props }) => <Dropdown ref={dropdownRef} {...props} />,
    closeDropdown,
  }
}

export default useDropdown
