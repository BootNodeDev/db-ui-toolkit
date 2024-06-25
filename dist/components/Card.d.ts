/// <reference types="react" />
/**
 * Card component
 *
 * Theme CSS variables:
 *
 * --theme-card-background-color: Card background color.
 * --theme-card-border-color: Card border color.
 * --theme-card-box-shadow: Card box shadow.
 */
declare const Card: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | import("react").RefObject<HTMLDivElement> | null | undefined;
}>, never>, never>> & string;
export default Card;
