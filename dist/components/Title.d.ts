/// <reference types="react" />
/**
 * Title component
 *
 * Theme CSS variables:
 *
 * --theme-color-title: Title text color.
 *
 * Base CSS variables:
 *
 * --base-title-font-size: Title font size.
 */
declare const Title: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "ref"> & {
    ref?: ((instance: HTMLHeadingElement | null) => void) | import("react").RefObject<HTMLHeadingElement> | null | undefined;
}>, never>, never>> & string;
export default Title;
