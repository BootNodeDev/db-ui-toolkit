import React, { type FC, useCallback, useState } from 'react'

import Dialog, { DialogProps } from '../components/Dialog'

interface Props {
  Dialog: FC<DialogProps>
  close: (id: string) => void
  open: (id: string) => void
}

/**
 * @name useDialog
 * @description A hook to create and use a dialog component.
 *
 * @returns {Props} - The `Dialog` component and the hook's methods.
 * @returns {FC<DialogProps>} Dialog - The `Dialog` component.
 * @returns {(id: string) => void} open - A function that opens a dialog with the given id.
 * @returns {(id: string) => void} close - A function that closes a dialog with the given id.
 *
 */
const useDialog = (): Props => {
  const [dialogStates, setDialogStates] = useState<{ [id: string]: boolean }>({})

  /**
   * Opens a dialog with the given id.
   */
  const open = useCallback((id: string) => {
    setDialogStates((prevState) => ({ ...prevState, [id]: true }))
  }, [])

  /**
   * Closes a dialog with the given id.
   */
  const close = useCallback((id: string) => {
    setDialogStates((prevState) => ({ ...prevState, [id]: false }))
  }, [])

  /**
   * Avoids re-rendering the Dialog component every time a prop changes
   */
  const DialogComponent: FC<DialogProps> = useCallback(
    ({ children, id, ...props }) => (
      <Dialog id={id} isOpen={!!dialogStates[id]} onClose={() => close(id)} {...props}>
        {children}
      </Dialog>
    ),
    [dialogStates, close],
  )

  return { open, close, Dialog: DialogComponent }
}

export default useDialog
