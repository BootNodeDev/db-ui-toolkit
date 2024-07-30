import { type FC } from 'react';
import { Props as GeneralMessageProps } from './GeneralMessage';
interface Props extends GeneralMessageProps {
    $closeOnOutsideClick?: boolean;
    $onClose?: () => void;
}
/**
 * @name GeneralMessageDialog
 *
 * @description General error component shown in an HTML dialog element. It shares the same props as the GeneralMessage component plus the following:
 *
 * @param {() => void}  [$onClose] - An optional function to be called when the dialog is closed.
 * @param {boolean}     [$closeOnOutsideClick] - If true, the dialog will close when clicking outside of it. Default is true.
 */
declare const GeneralMessageDialog: FC<Props>;
export default GeneralMessageDialog;
