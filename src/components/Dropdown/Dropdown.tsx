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

type HighlightItem = number | true | undefined

export interface DropdownExposedMethods {
  closeDropdown: () => void
}

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<DropdownExposedMethods> {
  closeOnClick?: boolean
  button: ReactElement<HTMLButtonElement>
  direction?: Direction
  disabled?: boolean
  highlightItem?: HighlightItem
  items: Array<ReactElement> | ReactElement
  position?: Position
}

/**
 * Dropdown component
 *
 * @param {ReactElement<HTMLButtonElement>} button - The button that opens the dropdown. Must be a button for accessibility reasons.
 * @param {Array<ReactElement> | ReactElement} items - The items of the dropdown, can be an array or a single element.
 * @param {Direction} [direction='downwards'] - The direction of the dropdown (upwards or downwards). Default is downwards.
 * @param {Position} [position='left'] - The position of the dropdown (left, right or center). Default is left.
 * @param {boolean} [closeOnClick=true] - Close the dropdown when the item is clicked. Default is true.
 * @param {HighlightItem} [highlightItem=undefined] - Adds a `dropdownItemActive` class to the selected item. Default is undefined.
 * * `true` if you want items to be highlighted when clicked, but don't want a highlighted item by default.
 * * A number from `0` to `items.length` if you want a single item highlighted by default.
 * * `undefined` disables the functionality, no item is highlighted when clicked.
 * @param {boolean} [disabled=false] - Whether the dropdown is disabled. Default is false.
 */
const Dropdown: FC<Props> = forwardRef<DropdownExposedMethods, Omit<Props, 'ref'>>(
  (
    {
      closeOnClick = true,
      button,
      className,
      direction = 'downwards',
      disabled = false,
      highlightItem = undefined,
      items,
      position = 'left',
      ...restProps
    },
    ref,
  ) => {
    /**
     * Sanitizes the highlightItem prop to minimize errors
     */
    const sanitizedHighlightItem = React.useMemo((): HighlightItem => {
      const isHighlightItemNumber = typeof highlightItem === 'number'
      const isHighlightNumberLessThanZero = isHighlightItemNumber && highlightItem < 0
      const isHighlightNumberGreaterThanItemsLength =
        Array.isArray(items) && isHighlightItemNumber && highlightItem > items.length - 1

      if (isHighlightNumberLessThanZero || isHighlightNumberGreaterThanItemsLength) {
        return undefined
      }

      return highlightItem
    }, [highlightItem, items])

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [activeItem, setActiveItem] = useState<HighlightItem>(sanitizedHighlightItem)
    const node = createRef<HTMLDivElement>()

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
      [disabled, isOpen],
    )

    /**
     * Handles closing the dropdown when the user clicks outside of it
     *
     * @param event MouseEvent - The event object
     */
    useEffect(() => {
      const handleOuterClick = (event: MouseEvent) => {
        if (node && node.current && node.current.contains(event.target as Node)) {
          return
        }

        setIsOpen(false)
      }

      document.addEventListener('mousedown', handleOuterClick)

      return () => {
        document.removeEventListener('mousedown', handleOuterClick)
      }
    }, [node])

    /**
     * Exposes a some methods to the parent component
     */
    useImperativeHandle(ref, () => ({
      closeDropdown: () => {
        setIsOpen(false)
      },
    }))

    /**
     * Transforms the props of the element where adequate, i.e.: add some extra
     * functionality to the onClick event
     *
     * @param element ReactElement - The element to transform
     */
    const transformElementProps = (
      element: ReactElement,
      index?: number | undefined,
    ): ReactElement => {
      const { onClick, className } = element.props

      /**
       * Checks if the dropdown item is active
       */
      const isItemActive = (): boolean => {
        /**
         * If sanitizedHighlightItem is undefined highlighting is disabled
         */
        if (sanitizedHighlightItem === undefined) {
          return false
        }

        return index === activeItem
      }

      return cloneElement(element, {
        className:
          `${className ? className : ''} ${isItemActive() ? 'dropdownItemActive' : ''}`.trim(),
        onClick: (event: MouseEvent): void => {
          event.stopPropagation()
          // console.log(closeOnClick)
          if (closeOnClick) {
            setIsOpen(false)
          }

          setActiveItem(index)

          if (!onClick) {
            return
          }

          onClick()
        },
      })
    }

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
            ? items.map((item: ReactElement, index) => {
                return transformElementProps(item, index)
              })
            : transformElementProps(items)}
        </BaseItems>
      </Wrapper>
    )
  },
)

Dropdown.displayName = 'Dropdown'

export default Dropdown
