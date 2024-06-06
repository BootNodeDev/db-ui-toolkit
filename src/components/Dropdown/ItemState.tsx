import { styled, css } from 'styled-components'
import DropdownItem from './Item'
import { ActionStates } from './index'

interface Props {
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
          : $state === 'warning' &&
            css`
              color: var(--theme-color-warning, #cc0);
            `};
  }
`

export default ItemState
