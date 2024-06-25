/// <reference types="react" />
/**
 * Text component
 *
 * Theme CSS variables:
 *
 * --theme-color-text: Text color.
 *
 * Base CSS variables:
 *
 * --base-text-font-size: Text font size.
 */
declare const Text: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("styled-components").FastOmit<import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "ref"> & {
    ref?: ((instance: HTMLParagraphElement | null) => void) | import("react").RefObject<HTMLParagraphElement> | null | undefined;
}>, never>, never>> & string;
export default Text;
