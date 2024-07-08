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

import Wrapper from '../components/Dialog'

interface DialogProps extends HTMLAttributes<HTMLDialogElement> {
  closeOnEscape?: boolean
  closeOnOutsideClick?: boolean
}

interface DialogPropsExtended extends DialogProps {
  close: () => void
  isOpen: boolean
}

const Dialog: FC<DialogPropsExtended> = ({
  children,
  close,
  closeOnEscape = true,
  closeOnOutsideClick = true,
  isOpen,
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
      close()
    }
  }

  /**
   * Handle pressing the escape key
   */
  const handleKeyDown: KeyboardEventHandler<HTMLDialogElement> = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault()

      if (closeOnEscape) {
        close()
      }
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

interface Props {
  Dialog: FC<DialogProps>
  close: () => void
  open: (children: ReactElement) => void
}

/**
 * @name useDialog
 * @description A hook to create and use a dialog component.
 *
 * @returns {Props} {open: (children: ReactElement) => void, close: () => void, Dialog: FC<DialogProps>} - The `Dialog` component and the hook's methods.
 *
 * **Dialog props**
 *
 * @param {DialogProps} options - The options for the dialog.
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
   * Avoids re-rendering the Dialog component every time a prop changes
   */
  const DialogComponent: FC<DialogProps> = useCallback(
    ({ ...props }) => (
      <Dialog isOpen={isOpen} close={close} {...props}>
        {children}
      </Dialog>
    ),
    [isOpen, close, children],
  )

  return { open, close, Dialog: DialogComponent }
}

export default useDialog
