import { type FC, useRef, useCallback } from 'react'

import Dropdown, { type DropdownExposedProps, type Options } from '../components/Dropdown/Dropdown'

interface DropdownOptions extends Options {
  id: string
}

interface Props {
  Dropdown: FC<DropdownOptions>
  close: (id: string) => void
}

/**
 * @name useDropdown
 * @description A hook that returns a Dropdown component and its exposed methods
 *
 * @returns {Props} - The `Dropdown` component and the hook's methods.
 * @returns {FC<DropdownOptions>} Dropdown - The `Dropdown` component.
 * @returns {(id: string) => void} close - A function that closes the dropdown with the given id.
 */
const useDropdown = (): Props => {
  /**
   * An object that stores all the dropdown refs will be stored in
   */
  const dropdownRefs = useRef<{ [key: string]: DropdownExposedProps | null }>({})

  /**
   * Closes the dropdown using the dropdown's id and the ref's exposed method
   */
  const close = (id: string) => {
    if (dropdownRefs.current[id]) {
      dropdownRefs.current[id]?.close()
    }
  }

  /**
   * Avoids re-rendering the Dropdown component every time a prop changes
   */
  const DropdownComponent = useCallback(
    ({ id, ...props }: DropdownOptions) => (
      <Dropdown
        ref={(el) => {
          dropdownRefs.current[id] = el
        }}
        {...props}
      />
    ),
    [],
  )

  return {
    Dropdown: DropdownComponent,
    close,
  }
}

export default useDropdown
