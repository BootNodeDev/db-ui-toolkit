import React, {
  type FC,
  type HTMLAttributes,
  type MouseEventHandler,
  useCallback,
  useRef,
  useState,
  useEffect,
  ReactElement,
} from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.dialog`
  border: none;
  border-radius: var(--base-dialog-border-radius, var(--base-border-radius, 8px));
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

type DialogProps = HTMLAttributes<HTMLDialogElement>

interface Options {
  closeOnOutsideClick?: boolean
}

interface Props {
  Dialog: FC<DialogProps>
  close: () => void
  open: (children: ReactElement) => void
}

/**
 * @name useDialog
 * @description A hook to create and use a dialog component.
 *
 * @param {Options} options - The options for the dialog.
 * @param {boolean} [options.closeOnOutsideClick=true] - Whether the dialog should close when clicking outside of it. Defaults to true.
 *
 * @returns {Props} {open: (children: ReactElement) => void, close: () => void, Dialog: FC<ModalProps>} - The `Dialog` component and the hook's methods.
 *
 * **Base CSS Variables for `Dialog` Component**
 *
 * - `--base-dialog-border-radius` (set it the same as the children's in open(children) or the radius of the children will be ignored)
 * - `--base-dialog-overlay-animation-time`
 * - `--base-dialog-animation-time`
 */
const useDialog = ({ closeOnOutsideClick = true }: Options = {}): Props => {
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

  useEffect(() => {
    if (dialogRef.current && isOpen) {
      dialogRef.current.showModal()
    }

    if (dialogRef.current && !isOpen) {
      dialogRef.current.close()
    }
  }, [isOpen])

  const Dialog: FC<DialogProps> = () => {
    const handleOutsideClick: MouseEventHandler<HTMLDialogElement> = (event) => {
      if (dialogRef.current && event.target === dialogRef.current && closeOnOutsideClick) {
        close()
      }
    }

    return (
      <Wrapper onClick={closeOnOutsideClick ? handleOutsideClick : undefined} ref={dialogRef}>
        {isOpen ? children : null}
      </Wrapper>
    )
  }

  return { open, close, Dialog }
}

export default useDialog
