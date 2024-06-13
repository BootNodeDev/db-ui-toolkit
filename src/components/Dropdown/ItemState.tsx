import { styled, css } from 'styled-components'
import DropdownItem from './Item'
import { ActionStates } from './index'

interface Props {
  $state?: ActionStates
}

/**
 * ItemState component - A dropdown item with a state.
 *
 * @param {ActionStates} [$state=undefined] - The state of the item. Defaults to undefined.
 */
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
