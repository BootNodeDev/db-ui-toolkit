import React from 'react';
import { Props as GeneralErrorProps } from './GeneralError';
interface Props extends GeneralErrorProps {
    $closeOnOutsideClick?: boolean;
    $onClose?: () => void;
}
/**
 * General error component shown in an HTML dialog element.
 *
 * Shares the same props as the GeneralError component plus the following:
 *
 * @param {() => void}  [$onClose] - An optional function to be called when the dialog is closed.
 * @param {boolean}     [$closeOnOutsideClick] - If true, the dialog will close when clicking outside of it. Default is true.
 */
declare const GeneralErrorDialog: React.FC<Props>;
export default GeneralErrorDialog;
