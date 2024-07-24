import { InputHTMLAttributes } from 'react'
import { styled, css } from 'styled-components'

export type TextfieldStatus = 'error' | 'ok' | undefined

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  $status?: TextfieldStatus | undefined
  $variant?: string
}

/**
 *  Status CSS
 */
const TextfieldStatusCSS = css<Props>`
  ${({ $status }) =>
    $status === 'error'
      ? css`
          background-color: var(
            --theme-textfield-background-color-error,
            var(--theme-textfield-background-color, #f7f7f7)
          );
          border-color: var(--theme-textfield-border-color-error, var(--theme-color-danger, #800));
          color: var(--theme-textfield-color-error, var(--theme-color-danger, #800));
        `
      : $status === 'ok'
        ? css`
            background-color: var(
              --theme-textfield-background-color-ok,
              var(--theme-textfield-background-color, #f7f7f7)
            );
            border-color: var(--theme-textfield-border-color-ok, var(--theme-color-ok, #080));
            color: var(--theme-textfield-color-ok, var(--theme-color-ok, #080));
          `
        : css``}
`

/**
 * Textfield CSS
 */
export const TextfieldCSS = css<Props>`
  ${({ $variant }) => css`
    background-color: var(--theme-textfield-background-color, #f7f7f7);
    border-color: var(--theme-textfield-border-color, #c5c2cb);
    border-radius: var(--base-textfield-border-radius, var(--base-border-radius, 8px));
    border-style: solid;
    border-width: 1px;
    box-shadow: var(--theme-textfield-box-shadow, none);
    color: var(--theme-textfield-color, #333);
    font-size: 1.4rem;
    font-weight: 400;
    height: 50px;
    outline: none;
    overflow: hidden;
    padding: var(--base-textfield-padding, 0 var(--base-common-padding-xl, 16px));
    text-overflow: ellipsis;
    transition:
      border-color
        var(--base-textfield-transition-duration, var(--base-transition-duration-sm, 0.2s)) linear,
      background-color
        var(--base-textfield-transition-duration, var(--base-transition-duration-sm, 0.2s)) linear,
      box-shadow var(--base-textfield-transition-duration, var(--base-transition-duration-sm, 0.2s))
        linear;
    white-space: nowrap;

    ${TextfieldStatusCSS}

    /**
   * Textfield states
   */
  &:active,
  &:focus {
      color: var(--theme-textfield-color-active, var(--theme-textfield-color, #333));
      border-color: var(
        --theme-textfield-border-color-active,
        var(--theme-textfield-border-color, #c5c2cb)
      );
      background-color: var(
        --theme-textfield-background-color-active,
        var(--theme-textfield-background-color, #f7f7f7)
      );
      box-shadow: var(--theme-textfield-box-shadow-active, var(--theme-textfield-box-shadow, none));

      ${TextfieldStatusCSS}
    }

    &[disabled],
    &[disabled]:hover {
      &,
      &::placeholder {
        background-color: var(--theme-textfield-background-color, #f7f7f7);
        border-color: var(--theme-textfield-border-color, #c5c2cb);
        color: var(--theme-textfield-color, #333);
        cursor: not-allowed;
        opacity: 0.6;
      }
    }

    &::placeholder {
      color: var(--theme-textfield-placeholder-color, #666);
      font-style: normal;
      font-weight: 400;
      opacity: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &[readonly] {
      background-color: var(--theme-textfield-background-color, #f7f7f7);
      border-color: var(--theme-textfield-border-color, #c5c2cb);
      color: var(--theme-textfield-color, #333);
      cursor: default;
      font-style: normal;
    }

    &[type='number'] {
      appearance: textfield;
      ::-webkit-inner-spin-button,
      ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    &::-webkit-search-decoration {
      -webkit-appearance: none;
    }
  `}
`
/**
 * @name Textfield
 *
 * @description Input component
 *
 * @param {TextfieldStatus} [$status=undefined] - The status of the textfield. Defaults to undefined.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-textfield-color`
 * - `--theme-textfield-color-active`
 * - `--theme-textfield-color-error`
 * - `--theme-textfield-color-ok`
 * - `--theme-textfield-background-color`
 * - `--theme-textfield-background-color-active`
 * - `--theme-textfield-border-color`
 * - `--theme-textfield-border-color-active`
 * - `--theme-textfield-border-color-error`
 * - `--theme-textfield-border-color-ok`
 * - `--theme-textfield-placeholder-color`
 * - `--theme-textfield-box-shadow`
 * - `--theme-textfield-box-shadow-active`
 *
 * **Base CSS variables:**
 *
 * - `--base-textfield-height`
 * - `--base-textfield-border-radius`
 * - `--base-textfield-font-size`
 * - `--base-textfield-vertical-padding`
 * - `--base-textfield-horizontal-padding`
 * - `--base-textfield-transition-duration`
 */
const Textfield = styled.input<Props>`
  ${TextfieldCSS}
`

export default Textfield
