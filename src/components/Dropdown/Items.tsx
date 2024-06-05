import { styled, css } from 'styled-components'
import { Direction, Position } from './index'

interface ItemsProps {
  $direction?: Direction
  $position?: Position
  $isOpen: boolean
}

const Items = styled.div<ItemsProps>`
  background-color: var(--theme-dropdown-background-color, #fff);
  border-color: var(--theme-dropdown-border-color, #fff);
  border-radius: var(--base-border-radius, 8px);
  border-style: solid;
  border-width: 1px;
  box-shadow: var(--theme-dropdown-box-shadow, 0 9.6px 13px 0 rgb(0 0 0 / 8%));
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  min-width: 90px;
  position: absolute;
  white-space: nowrap;

  ${({ $position }) =>
    $position === 'left' &&
    css`
      left: 0;
    `}

  ${({ $position }) =>
    $position === 'right' &&
    css`
      right: 0;
    `}

  ${({ $position }) =>
    $position === 'center' &&
    css`
      left: 50%;
      transform: translateX(-50%);
    `}

  ${({ $direction }) =>
    $direction === 'downwards' &&
    css`
      top: calc(100% + 10px);
    `}

  ${({ $direction }) =>
    $direction === 'upwards' &&
    css`
      bottom: calc(100%);
    `}
`

Items.defaultProps = {
  $direction: 'downwards',
  $isOpen: false,
  $position: 'left',
  className: 'dropdownItems',
}

export default Items
