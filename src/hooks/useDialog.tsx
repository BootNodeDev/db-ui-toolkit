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
  border-radius: var(--base-border-radius, 8px);
  padding: 0;

  &::backdrop {
    background-color: var(--theme-dialog-background-color, rgb(0 0 0 / 25%));
  }
`

type ModalProps = HTMLAttributes<HTMLDialogElement>

interface Options {
  closeOnOutsideClick?: boolean
}

interface Props {
  Dialog: FC<ModalProps>
  close: () => void
  open: (children: ReactElement) => void
}

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

  const Dialog: FC<ModalProps> = () => {
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
