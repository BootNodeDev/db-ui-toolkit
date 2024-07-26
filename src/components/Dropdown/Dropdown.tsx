import {
  cloneElement,
  createRef,
  forwardRef,
  type FC,
  type HTMLAttributes,
  type ReactElement,
  type RefAttributes,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'

import Items, { BaseItems } from './Items'
import { Wrapper } from './Wrapper'
import { Direction, Position } from './index'

export interface DropdownExposedProps {
  close: () => void
}

export interface Options
  extends HTMLAttributes<HTMLDivElement>,
    RefAttributes<DropdownExposedProps> {
  $variant?: string
  button: ReactElement<HTMLButtonElement>
  closeOnClick?: boolean
  defaultActiveItem?: number
  direction?: Direction
  disabled?: boolean
  highlightActiveItem?: boolean
  items: Array<ReactElement> | ReactElement
  onItemSelect?: (index: number) => void
  position?: Position
}

/**
 * @name Dropdown
 *
 * @description A Dropdown component.
 *
 * @param {ReactElement<HTMLButtonElement>} button - The button that opens the dropdown. Must be a button for accessibility reasons.
 * @param {Array<ReactElement> | ReactElement} items - The items of the dropdown, can be an array or a single element. Items can be either an Item component or any other React element.
 * @param {Direction} [direction='downwards'] - The direction of the dropdown (upwards or downwards). Default is downwards.
 * @param {Position} [position='left'] - The position of the dropdown (left, right or center). Default is left.
 * @param {boolean} [closeOnClick=true] - Close the dropdown when the item is clicked. Default is true.
 * @param {HighlightItem} [highlightActiveItem=true] - Optionally highlight the selected item. Default is true.
 * @param {boolean} [disabled=false] - Whether the dropdown is disabled. Default is false.
 * @param {number} [defaultActiveItem=-1] - The index of the item that is active by default. Default is -1.
 * @param {Function} [onItemSelect] - A function that is called when an item is selected.
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-dropdown-background-color`
 * - `--theme-dropdown-border-color`
 * - `--theme-dropdown-box-shadow`
 *
 * **Base CSS variables:**
 *
 * - `--base-dropdown-border-radius`
 * - `--base-dropdown-transition-duration`
 */
const Dropdown: FC<Options> = forwardRef<DropdownExposedProps, Omit<Options, 'ref'>>(
  (
    {
      $variant,
      button,
      closeOnClick = true,
      defaultActiveItem = -1,
      direction = 'downwards',
      disabled = false,
      highlightActiveItem = true,
      items,
      onItemSelect,
      position = 'left',
      ...restProps
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [activeItem, setActiveItem] = useState<number>(defaultActiveItem)
    const node = createRef<HTMLDivElement>()

    /**
     * Handles closing the dropdown when the user clicks outside of it
     *
     * @param event MouseEvent - The event object
     */
    const handleOuterClick = useCallback(
      (event: MouseEvent) => {
        if (node.current?.contains(event.target as Node)) {
          return
        }

        setIsOpen(false)
      },
      [setIsOpen, node],
    )

    /**
     * Add an event listener to the document to handle the outer click
     */
    useEffect(() => {
      document.addEventListener('mousedown', handleOuterClick)
      return () => {
        document.removeEventListener('mousedown', handleOuterClick)
      }
    }, [handleOuterClick])

    /**
     * @name hydrateButton
     *
     * @description Transforms the props of the button where adequate, i.e.: add some extra
     * functionality to the onClick event and add a class to the element if the dropdown is open.
     *
     * @param element ReactElement - The element to transform
     */
    const hydrateButton = useCallback(
      (element: ReactElement): ReactElement => {
        const { className, onClick } = element.props

        return cloneElement(element, {
          className:
            `${className ? className : ''} ${isOpen ? 'isOpen' : ''} dbuitkDropdownButton`.trim(),
          onClick: (event: MouseEvent): void => {
            event.stopPropagation()

            if (disabled) {
              return
            }

            setIsOpen(!isOpen)

            onClick?.()
          },
        })
      },
      [disabled, isOpen],
    )

    /**
     * @name hydrateItem
     *
     * @description Transforms the props of the element where adequate, i.e.: add some extra
     * functionality to the onClick event and add a class to the element if it is active.
     *
     * @param element ReactElement - The element to transform
     */
    const hydrateItem = useCallback(
      (element: ReactElement, index?: number): ReactElement => {
        const { className, onClick } = element.props
        /**
         * Checks if the dropdown item is active
         */
        const isItemActive = (typeof index === 'number' && index === activeItem) || false

        return cloneElement(element, {
          key: `dropdown_item_${index}`,
          className:
            `${className ? className : ''} ${isItemActive && highlightActiveItem ? 'dropdownItemActive' : ''}`.trim(),
          onClick: (event: MouseEvent): void => {
            event.stopPropagation()

            if (closeOnClick) {
              setIsOpen(false)
            }

            if (typeof index === 'number') {
              setActiveItem(index)
              onItemSelect?.(index)
            }

            onClick?.()
          },
        })
      },
      [activeItem, closeOnClick, highlightActiveItem, onItemSelect],
    )

    /**
     * Exposes some of the dropdown's methods
     */
    useImperativeHandle(ref, () => ({
      close: () => {
        setIsOpen(false)
      },
      getActiveItem: () => activeItem,
    }))

    return (
      <Wrapper $isOpen={isOpen} disabled={disabled} ref={node} {...restProps}>
        {hydrateButton(button)}
        <BaseItems
          $direction={direction}
          $isOpen={isOpen}
          $position={position}
          $variant={$variant}
          as={!Array.isArray(items) ? undefined : Items}
        >
          {Array.isArray(items)
            ? items.map((item: ReactElement, index) => hydrateItem(item, index))
            : hydrateItem(items)}
        </BaseItems>
      </Wrapper>
    )
  },
)

Dropdown.displayName = 'Dropdown'

export default Dropdown
