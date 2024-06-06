import React, {
  HTMLAttributes,
  MouseEventHandler,
  cloneElement,
  createRef,
  useCallback,
  useEffect,
  useState,
  ReactElement,
  FC,
} from 'react'
import { styled } from 'styled-components'
import { Direction, Position } from './index'
import Items from './Items'

interface WrapperProps {
  disabled?: boolean
}

const Wrapper = styled.div<WrapperProps>`
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

Wrapper.defaultProps = {
  className: 'dropdown',
  disabled: false,
}

const ButtonWrapper = styled.div`
  background-color: transparent;
  border: none;
  display: flex;
  outline: none;
  padding: 0;
  user-select: none;
  width: 100%;
`

ButtonWrapper.defaultProps = {
  className: 'dropdownButton',
}

type HighlightItem = number | true | undefined

interface Props extends HTMLAttributes<HTMLDivElement> {
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
 * @param {HighlightItem} [highlightItem=undefined] - Adds a `dropdownItemActive` class to the selected item.
 * `true` if you want items to be highlighted when clicked, but don't want a highlighted item by default.
 * A number from `0` to `items.length` if you want a single item highlighted by default.
 * `undefined` disables the functionality, no item is highlighted when clicked.
 * Default is undefined.
 * @param {boolean} [disabled=false] - Whether the dropdown is disabled. Default is false.
 */
const Dropdown: FC<Props> = ({
  button,
  className,
  direction = 'downwards',
  disabled = false,
  highlightItem,
  items,
  position = 'left',
  ...restProps
}) => {
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
   * Transforms the props of the element where adequate, i.e.: add some extra
   * functionality to the onClick event
   * @param element ReactElement - The element to transform
   */
  const transformElementProps = (
    element: ReactElement,
    index?: number | undefined,
  ): ReactElement => {
    const { $closeOnClick, onClick, className } = element.props

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
      className: `${className} ${isItemActive() ? 'dropdownItemActive' : ''}`.trim(),
      onClick: (event: MouseEvent): void => {
        event.stopPropagation()

        if ($closeOnClick) {
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
      <ButtonWrapper onClick={handleButtonClick}>{button}</ButtonWrapper>
      <Items $direction={direction} $position={position} $isOpen={isOpen}>
        {Array.isArray(items)
          ? items.map((item: ReactElement, index) => {
              return transformElementProps(item, index)
            })
          : transformElementProps(items)}
      </Items>
    </Wrapper>
  )
}

export default Dropdown
export { default as Item } from './Item'
export { default as ItemState } from './ItemState'
export { Direction, Position, ActionStates } from './types'
