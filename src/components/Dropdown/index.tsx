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
import { Direction, Position } from './types'
import Items from './Items'
export { default as Item } from './Item'
export { default as ItemState } from './ItemState'

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
  items: Array<unknown>
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

  const onButtonClick: MouseEventHandler<HTMLElement> = useCallback(
    (e) => {
      e.stopPropagation()

      if (disabled) {
        return
      }

      setIsOpen(!isOpen)
    },
    [disabled, isOpen],
  )

  useEffect(() => {
    /**
     * Note: This code handles closing when clicking outside of the dropdown
     */
    const handleOuterClick = (e: MouseEvent) => {
      if (node && node.current && node.current.contains(e.target as Node)) {
        return
      }
      setIsOpen(false)
    }

    document.addEventListener('mousedown', handleOuterClick)

    return () => {
      document.removeEventListener('mousedown', handleOuterClick)
    }
  }, [node])

  return (
    <Wrapper
      className={`${isOpen ? 'isOpen' : ''} ${fullWidth ? 'fullWidth' : ''} ${className ? className : ''}`.trim()}
      disabled={disabled}
      ref={node}
      {...restProps}
    >
      <ButtonWrapper onClick={onButtonClick}>{button}</ButtonWrapper>
      <Items $direction={direction} $position={position} $isOpen={isOpen}>
        {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          items.map((item: any, index: number) => {
            const dropdownItem = cloneElement(item, {
              className: `dropdownItem`,
              key: item.key ? item.key : index,
              onClick: (e) => {
                e.stopPropagation()

                if (item.props.closeOnClick) {
                  setIsOpen(false)
                }

                if (!item.props.onClick) {
                  return
                }

                item.props.onClick()
              },
            })

            return dropdownItem
          })
        }
      </Items>
    </Wrapper>
  )
}

export default Dropdown
