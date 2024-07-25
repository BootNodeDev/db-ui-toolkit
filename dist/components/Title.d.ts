/// <reference types="react" />
/**
 * @name Title
 *
 * @description Title component
 *
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-color-title`
 *
 * **Base CSS variables:**
 *
 * - `--base-title-font-size`
 */
declare const Title: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {
    $variant?: string | undefined;
}>> & string;
export default Title;
