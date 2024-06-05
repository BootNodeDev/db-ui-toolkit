import { styled, css } from 'styled-components'
import DropdownItem, { Props as ItemProps } from './Item'

type ActionStates = 'ok' | 'danger' | 'warning' | undefined

interface Props extends ItemProps {
  $state?: ActionStates
}

const ItemState = styled(DropdownItem)<Props>`
  &,
  &:hover {
    ${({ $state }) =>
      $state === 'danger'
        ? css`
            color: var(--theme-color-danger, #800);
          `
        : $state === 'ok'
          ? css`
              color: var(--theme-color-ok, #080);
            `
          : css`
              color: var(--theme-color-warning, #cc0);
            `};
  }
`

export default ItemState
