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

interface Props extends HTMLAttributes<HTMLDivElement> {
  activeItemHighlight?: boolean
  button: ReactElement<HTMLButtonElement>
  direction?: Direction
  disabled?: boolean
  fullWidth?: boolean
  items: Array<ReactElement> | ReactElement
  position?: Position
}

const Dropdown: FC<Props> = ({
  button,
  className,
  direction,
  disabled,
  fullWidth,
  items,
  position,
  ...restProps
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
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
  const transformElementProps = (element: ReactElement): ReactElement => {
    return cloneElement(element, {
      onClick: (event: MouseEvent): void => {
        event.stopPropagation()
        const { $closeOnClick, onClick } = element.props

        if ($closeOnClick) {
          setIsOpen(false)
        }

        if (!onClick) {
          return
        }

        onClick()
      },
    })
  }

  return (
    <Wrapper
      className={`${isOpen ? 'isOpen' : ''} ${fullWidth ? 'fullWidth' : ''} ${className ? className : ''}`.trim()}
      disabled={disabled}
      ref={node}
      {...restProps}
    >
      <ButtonWrapper onClick={handleButtonClick}>{button}</ButtonWrapper>
      <Items $direction={direction} $position={position} $isOpen={isOpen}>
        {Array.isArray(items)
          ? items.map((item: ReactElement) => {
              return transformElementProps(item)
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
