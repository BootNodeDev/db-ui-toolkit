import { styled } from 'styled-components'

/**
 * @name Wrapper
 *
 * @description Dialog main wrapper component
 */
const Wrapper = styled.dialog`
  border: none;
  border-radius: var(--base-dialog-border-radius, var(--base-border-radius, 8px));
  max-width: calc(100vw - 20px);
  padding: 0;
  transition:
    display var(--base-dialog-animation-time, var(--base-animation-time-xl, 0.4s)) ease-out
      allow-discrete,
    opacity var(--base-dialog-animation-time, var(--base-animation-time-xl, 0.4s)) ease-out,
    overlay var(--base-dialog-animation-time, var(--base-animation-time-xl, 0.4s)) ease-out
      allow-discrete;

  &::backdrop {
    transition:
      background-color
        var(--base-dialog-overlay-animation-time, var(--base-animation-time-sm, 0.2s)),
      display var(--base-dialog-overlay-animation-time, var(--base-animation-time-sm, 0.2s))
        allow-discrete,
      overlay var(--base-dialog-overlay-animation-time, var(--base-animation-time-sm, 0.2s))
        allow-discrete;
  }

  &[open] {
    opacity: 1;

    &::backdrop {
      background-color: var(--theme-dialog-background-color, rgb(0 0 0 / 25%));
    }
  }

  /* Transitions will start in these states */
  @starting-style {
    &[open] {
      opacity: 0;

      &::backdrop {
        background-color: rgb(0 0 0 / 0%);
      }
    }
  }
`

export default Wrapper
