import { ReactElement, type FC, type HTMLAttributes } from 'react';
interface DialogProps extends HTMLAttributes<HTMLDialogElement> {
}
interface Options extends DialogProps {
    closeOnOutsideClick?: boolean;
    closeOnEscape?: boolean;
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
declare const useDialog: () => Props;
export default useDialog;
