/// <reference types="react" />
/**
 * @name Card
 *
 * @description Customizable card
 *
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-card-background-color`
 * - `--theme-card-border-color`
 * - `--theme-card-box-shadow`
 *
 * **Base CSS variables:**
 *
 * - `--base-card-border-radius`
 * - `--base-card-padding`
 */
declare const Card: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $variant?: string | undefined;
}>> & string;
export default Card;
