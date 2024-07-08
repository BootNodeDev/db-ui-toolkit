import { type FC } from 'react';
import { DialogProps } from '../components/Dialog';
interface Props {
    Dialog: FC<DialogProps>;
    close: (id: string) => void;
    open: (id: string) => void;
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
declare const useDialog: () => Props;
export default useDialog;
