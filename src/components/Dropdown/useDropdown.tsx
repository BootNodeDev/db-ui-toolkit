import React, {
  cloneElement,
  createRef,
  type FC,
  type HTMLAttributes,
  type MouseEventHandler,
  type ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { styled } from 'styled-components'
import { Direction, Position } from './index'
import Items, { BaseItems } from './Items'

const Wrapper = styled.div.attrs<{
  disabled?: boolean
}>(({ className = 'dbuitkDropdown', disabled = false }) => ({ className, disabled }))`
  outline: none;
  position: relative;
  z-index: 0;

  &.fullWidth {
    width: 100%;
  }

  &.isOpen {
    z-index: 50;
  }

  &:disabled,
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  }
`

const ButtonWrapper = styled.div.attrs(({ className = 'dbuitkDropdownButton' }) => ({ className }))`
  background-color: transparent;
  border: none;
  display: flex;
  outline: none;
  padding: 0;
  user-select: none;
  width: 100%;
`

interface Options extends HTMLAttributes<HTMLDivElement> {
  button: ReactElement<HTMLButtonElement>
  closeOnClick?: boolean
  direction?: Direction
  disabled?: boolean
  highlightSelectedItem?: boolean
  items: Array<ReactElement> | ReactElement
  position?: Position
}

export interface Props {
  Dropdown: FC<Options>
  activeItem: number
  closeDropdown: () => void
  isOpen: boolean
}

/**
 * @name useDropdown
 *
 * @description A hook that creates a Dropdown component.
 *
 * @param {ReactElement<HTMLButtonElement>} button - The button that opens the dropdown. Must be a button for accessibility reasons.
 * @param {Array<ReactElement> | ReactElement} items - The items of the dropdown, can be an array or a single element.
 * @param {Direction} [direction='downwards'] - The direction of the dropdown (upwards or downwards). Default is downwards.
 * @param {Position} [position='left'] - The position of the dropdown (left, right or center). Default is left.
 * @param {boolean} [closeOnClick=true] - Close the dropdown when the item is clicked. Default is true.
 * @param {HighlightItem} [highlightSelectedItem=true] - Optionally highlight the selected item. Default is true.
 * @param {boolean} [disabled=false] - Whether the dropdown is disabled. Default is false.
 */
const useDropdown = (): Props => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [activeItem, setActiveItem] = useState<number>(-1)
  const node = createRef<HTMLDivElement>()

  /**
   * Closes the dropdown
   */
  const closeDropdown = () => {
    setIsOpen(false)
  }

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

  useEffect(() => {
    document.addEventListener('mousedown', handleOuterClick)
    return () => {
      document.removeEventListener('mousedown', handleOuterClick)
    }
  }, [handleOuterClick])

  const Dropdown: FC<Options> = ({
    button,
    className,
    closeOnClick = true,
    direction = 'downwards',
    disabled = false,
    highlightSelectedItem = true,
    items,
    position = 'left',
    ...restProps
  }) => {
    /**
     * Handles the button that opens / closes the dropdown
     */
    const handleButtonClick: MouseEventHandler<HTMLElement> = useCallback(
      (event) => {
        event.stopPropagation()

        if (disabled) {
          return
        }

        setIsOpen((prevIsOpen) => !prevIsOpen)
      },
      [disabled],
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
      [closeOnClick, highlightSelectedItem],
    )

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
  }

  return {
    Dropdown,
    activeItem,
    closeDropdown,
    isOpen,
  }
}

export default useDropdown
