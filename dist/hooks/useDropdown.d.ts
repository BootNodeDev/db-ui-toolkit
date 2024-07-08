import { type FC } from 'react';
import { type Options } from '../components/Dropdown/Dropdown';
interface DropdownOptions extends Options {
    id: string;
}
interface Props {
    Dropdown: FC<DropdownOptions>;
    closeDropdown: (id: string) => void;
}
/**
 * @name useDropdown
 * @description A hook that returns a Dropdown component and its exposed methods
 *
 * @returns {Props} { Dropdown: FC<DropdownOptions>, closeDropdown: (id: string) => void } - The `Dropdown` component and the hook's methods.
 */
declare const useDropdown: () => Props;
export default useDropdown;
