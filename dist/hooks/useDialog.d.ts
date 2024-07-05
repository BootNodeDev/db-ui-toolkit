import { type FC, type HTMLAttributes, ReactElement } from 'react';
interface DialogProps extends HTMLAttributes<HTMLDialogElement> {
}
interface Options extends DialogProps {
    closeOnOutsideClick?: boolean;
}
interface Props {
    Dialog: FC<Options>;
    close: () => void;
    open: (children: ReactElement) => void;
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
declare const useDialog: () => Props;
export default useDialog;
