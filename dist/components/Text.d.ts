/// <reference types="react" />
/**
 * @name Text
 *
 * @description Text component
 *
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-color-text`
 *
 * **Base CSS variables:**
 *
 * - `--base-text-font-size`
 */
declare const Text: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, {
    $variant?: string | undefined;
}>> & string;
export default Text;
