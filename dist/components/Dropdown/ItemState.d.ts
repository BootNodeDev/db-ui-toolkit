/// <reference types="react" />
import { ActionStates } from './index';
interface Props {
    $state?: ActionStates;
}
/**
 * ItemState component - A dropdown item with a state.
 *
 * @param {ActionStates} [$state=undefined] - The state of the item. Defaults to undefined.
 */
declare const ItemState: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}>, import("./Item").Props>, never>, Props>> & string;
export default ItemState;
