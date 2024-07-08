import { type FC } from 'react';
import { type Options } from '../components/Dropdown/Dropdown';
interface DropdownOptions extends Options {
    id: string;
}
interface Props {
    Dropdown: FC<DropdownOptions>;
    close: (id: string) => void;
}
/**
 * @name useDropdown
 * @description A hook that returns a Dropdown component and its exposed methods
 *
 * @returns {Props} - The `Dropdown` component and the hook's methods.
 * @returns {FC<DropdownOptions>} Dropdown - The `Dropdown` component.
 * @returns {(id: string) => void} close - A function that closes the dropdown with the given id.
 */
declare const useDropdown: () => Props;
export default useDropdown;
