/// <reference types="react" />
import { ActionStates } from './index';
interface Props {
    $state?: ActionStates;
}
declare const ItemState: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import("./Item").Props> & import("./Item").Props, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}, Props>> & string;
export default ItemState;
