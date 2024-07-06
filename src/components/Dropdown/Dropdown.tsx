import React, {
  FC,
  HTMLAttributes,
  MouseEventHandler,
  ReactElement,
  RefAttributes,
  cloneElement,
  createRef,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'

import { Direction, Position } from './index'
import { Wrapper, ButtonWrapper } from './Wrapper'
import Items, { BaseItems } from './Items'

export interface DropdownExposedProps {
  closeDropdown: () => void
}

export interface Options
  extends HTMLAttributes<HTMLDivElement>,
    RefAttributes<DropdownExposedProps> {
  button: ReactElement<HTMLButtonElement>
  closeOnClick?: boolean
  direction?: Direction
  disabled?: boolean
  highlightSelectedItem?: boolean
  items: Array<ReactElement> | ReactElement
  position?: Position
}

/**
 * @name Dropdown
 *
 * @description A Dropdown component.
 *
 * @param {ReactElement<HTMLButtonElement>} button - The button that opens the dropdown. Must be a button for accessibility reasons.
 * @param {Array<ReactElement> | ReactElement} items - The items of the dropdown, can be an array or a single element.
 * @param {Direction} [direction='downwards'] - The direction of the dropdown (upwards or downwards). Default is downwards.
 * @param {Position} [position='left'] - The position of the dropdown (left, right or center). Default is left.
 * @param {boolean} [closeOnClick=true] - Close the dropdown when the item is clicked. Default is true.
 * @param {HighlightItem} [highlightSelectedItem=true] - Optionally highlight the selected item. Default is true.
 * @param {boolean} [disabled=false] - Whether the dropdown is disabled. Default is false.
 */
const Dropdown: FC<Options> = forwardRef<DropdownExposedProps, Omit<Options, 'ref'>>(
  (
    {
      button,
      className,
      closeOnClick = true,
      direction = 'downwards',
      disabled = false,
      highlightSelectedItem = true,
      items,
      position = 'left',
      ...restProps
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [activeItem, setActiveItem] = useState<number>(-1)
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
     * Handles the button that opens / closes the dropdown
     */
    const handleButtonClick: MouseEventHandler<HTMLElement> = useCallback(
      (event) => {
        event.stopPropagation()

        if (disabled) {
          return
        }

        setIsOpen(!isOpen)
      },
      [disabled, isOpen, setIsOpen],
    )

    /**
     * Transforms the props of the element where adequate, i.e.: add some extra
     * functionality to the onClick event
     *
     * @param element ReactElement - The element to transform
     */
    const transformElementProps = useCallback(
      (element: ReactElement, index?: number): ReactElement => {
        const { onClick, className } = element.props
        /**
         * Checks if the dropdown item is active
         */
        const isItemActive = (typeof index === 'number' && index === activeItem) || false

        return cloneElement(element, {
          className:
            `${className ? className : ''} ${isItemActive && highlightSelectedItem ? 'dropdownItemActive' : ''}`.trim(),
          onClick: (event: MouseEvent): void => {
            event.stopPropagation()

            if (closeOnClick) {
              setIsOpen(false)
            }

            if (typeof index === 'number') {
              setActiveItem(index)
            }

            onClick?.()
          },
        })
      },
      [activeItem, closeOnClick, highlightSelectedItem, setActiveItem, setIsOpen],
    )

    /**
     * Exposes a some methods to the parent component
     */
    useImperativeHandle(ref, () => ({
      closeDropdown: () => {
        setIsOpen(false)
      },
      getActiveItem: () => activeItem,
    }))

    return (
      <Wrapper
        className={`${isOpen ? 'isOpen' : ''} ${className ? className : ''}`.trim()}
        disabled={disabled}
        ref={node}
        {...restProps}
      >
        <ButtonWrapper className={`${isOpen ? 'isActive' : ''}`.trim()} onClick={handleButtonClick}>
          {button}
        </ButtonWrapper>
        <BaseItems
          as={!Array.isArray(items) ? undefined : Items}
          $direction={direction}
          $position={position}
          $isOpen={isOpen}
        >
          {Array.isArray(items)
            ? items.map((item: ReactElement, index) => transformElementProps(item, index))
            : transformElementProps(items)}
        </BaseItems>
      </Wrapper>
    )
  },
)

Dropdown.displayName = 'Dropdown'

export default Dropdown
