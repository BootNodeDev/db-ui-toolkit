import {
  type KeyboardEventHandler,
  type ReactEventHandler,
  type FC,
  type HTMLAttributes,
  type MouseEventHandler,
  useEffect,
  useRef,
} from 'react'

import Wrapper from './Wrapper'

export interface DialogProps extends Omit<HTMLAttributes<HTMLDialogElement>, 'id'> {
  closeOnEscape?: boolean
  closeOnOutsideClick?: boolean
  id: string
}

interface Props extends DialogProps {
  $variant?: string
  isOpen: boolean
  onClose: () => void
}

/**
 * @name Dialog
 *
 * @description A dialog component that can be opened and closed.
 *
 * @param {ReactNode} children - The content of the dialog.
 * @param {boolean} [closeOnEscape=true] - Whether the dialog should close when the escape key is pressed. Defaults to true.
 * @param {boolean} [closeOnOutsideClick=true] - Whether the dialog should close when clicked outside of it. Defaults to true.
 * @param {boolean} isOpen - Whether the dialog is open.
 * @param {() => void} onClose - A callback function triggered when the dialog is closed.
 * @param {string} [$variant] - The variant of the dialog.
 *
 * **Base CSS variables**
 *
 * - `--base-dialog-border-radius` (set it the same as the children's in open(children) or the radius of the children will be ignored)
 * - `--base-dialog-overlay-animation-time`
 * - `--base-dialog-animation-time`
 */
const Dialog: FC<Props> = ({
  $variant,
  children,
  closeOnEscape = true,
  closeOnOutsideClick = true,
  isOpen,
  onClose,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null)

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

  /**
   * Handle clicking outside of the dialog
   */
  const handleOutsideClick: MouseEventHandler<HTMLDialogElement> = (event) => {
    if (dialogRef.current && event.target === dialogRef.current && closeOnOutsideClick) {
      onClose()
    }
  }

  /**
   * Handle pressing the escape key
   */
  const handleKeyDown: KeyboardEventHandler<HTMLDialogElement> = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault()

      if (closeOnEscape) {
        onClose()
      }
    }
  }

  /**
   * Handle canceling the dialog
   */
  const handleCancel: ReactEventHandler<HTMLDialogElement> = (event) => {
    event.preventDefault()

    if (closeOnEscape) {
      onClose()
    }
  }

  return (
    <Wrapper
      $variant={$variant}
      onCancel={handleCancel}
      onClick={closeOnOutsideClick ? handleOutsideClick : undefined}
      onKeyDown={handleKeyDown}
      ref={dialogRef}
    >
      {isOpen ? children : null}
    </Wrapper>
  )
}

export default Dialog
