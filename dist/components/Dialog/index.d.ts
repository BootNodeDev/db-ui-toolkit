import { type FC, type HTMLAttributes } from 'react';
export interface DialogProps extends Omit<HTMLAttributes<HTMLDialogElement>, 'id'> {
    closeOnEscape?: boolean;
    closeOnOutsideClick?: boolean;
    id: string;
}
interface Props extends DialogProps {
    onClose: () => void;
    isOpen: boolean;
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
 *
 * **Base CSS Variables for `Dialog` Component**
 *
 * - `--base-dialog-border-radius` (set it the same as the children's in open(children) or the radius of the children will be ignored)
 * - `--base-dialog-overlay-animation-time`
 * - `--base-dialog-animation-time`
 */
declare const Dialog: FC<Props>;
export default Dialog;
