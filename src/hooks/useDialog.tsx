import React, {
  KeyboardEventHandler,
  ReactElement,
  ReactEventHandler,
  type FC,
  type HTMLAttributes,
  type MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import { styled } from 'styled-components'

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
      allow-discrete,
    transform var(--base-dialog-animation-time, var(--base-animation-time-xl, 0.4s)) ease-out;

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

interface DialogProps extends HTMLAttributes<HTMLDialogElement> {}

interface Options extends DialogProps {
  closeOnOutsideClick?: boolean
  closeOnEscape?: boolean
}

interface Props {
  Dialog: FC<Options>
  close: () => void
  open: (children: ReactElement) => void
}

/**
 * @name useDialog
 * @description A hook to create and use a dialog component.
 *
 * @returns {Props} {open: (children: ReactElement) => void, close: () => void, Dialog: FC<Options>} - The `Dialog` component and the hook's methods.
 *
 * **Dialog props**
 *
 * @param {Options} options - The options for the dialog.
 * @param {boolean} [options.closeOnOutsideClick=true] - Whether the dialog should close when clicking outside of it. Defaults to true.
 * @param {boolean} [options.closeOnEscape=true] - Whether the dialog should close when pressing the escape key. Defaults to true.
 *
 * **Base CSS Variables for `Dialog` Component**
 *
 * - `--base-dialog-border-radius` (set it the same as the children's in open(children) or the radius of the children will be ignored)
 * - `--base-dialog-overlay-animation-time`
 * - `--base-dialog-animation-time`
 */
const useDialog = (): Props => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [children, setChildren] = useState<ReactElement | null>(null)

  const open = useCallback((children: ReactElement) => {
    setChildren(children)
    setIsOpen(true)
  }, [])

  const close = useCallback(() => {
    setChildren(null)
    setIsOpen(false)
  }, [])

  /**
   * Handle dialog open / close state
   */
  useEffect(() => {
    if (dialogRef.current && isOpen) {
      dialogRef.current.showModal()
    }

    if (dialogRef.current && !isOpen) {
      dialogRef.current.close()
    }
  }, [isOpen])

  const Dialog: FC<Options> = ({ closeOnOutsideClick = true, closeOnEscape = true }) => {
    /**
     * Handle clicking outside of the dialog
     */
    const handleOutsideClick: MouseEventHandler<HTMLDialogElement> = (event) => {
      if (dialogRef.current && event.target === dialogRef.current && closeOnOutsideClick) {
        close()
      }
    }

    /**
     * Handle pressing the escape key
     */
    const handleKeyDown: KeyboardEventHandler<HTMLDialogElement> = (event) => {
      event.preventDefault()

      if (event.key === 'Escape' && closeOnEscape) {
        close()
      }
    }

    const handleCancel: ReactEventHandler<HTMLDialogElement> = (event) => {
      event.preventDefault()

      if (closeOnEscape) {
        close()
      }
    }

    return (
      <Wrapper
        onCancel={handleCancel}
        onClick={closeOnOutsideClick ? handleOutsideClick : undefined}
        onKeyDown={handleKeyDown}
        ref={dialogRef}
      >
        {isOpen ? children : null}
      </Wrapper>
    )
  }

  return { open, close, Dialog }
}

export default useDialog
