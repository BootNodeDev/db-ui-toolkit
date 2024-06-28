import { InputHTMLAttributes } from 'react'
import { styled, css } from 'styled-components'

export type TextfieldStatus = 'error' | 'ok' | undefined

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  $status?: TextfieldStatus | undefined
}

/**
 *  Text color
 */
const TextfieldTextColorCSS = css<Props>`
  ${({ $status }) =>
    $status === 'error'
      ? css`
          color: var(--theme-textfield-error-color, var(--theme-textfield-default-error-color));
        `
      : $status === 'ok'
        ? css`
            color: var(--theme-textfield-ok-color, var(--theme-textfield-default-ok-color));
          `
        : css`
            color: var(--theme-textfield-color, var(--theme-textfield-default-color));
          `}
`

/**
 *  Border color
 */
const TextfieldBorderColorCSS = css<Props>`
  ${({ $status }) =>
    $status === 'error'
      ? css`
          border-color: var(
            --theme-textfield-border-error-color,
            var(--theme-textfield-default-border-error-color)
          );
        `
      : $status === 'ok'
        ? css`
            border-color: var(
              --theme-textfield-border-ok-color,
              var(--theme-textfield-default-border-ok-color)
            );
          `
        : css`
            border-color: var(
              --theme-textfield-border-color,
              var(--theme-textfield-default-border-color)
            );
          `}
`

/**
 * Textfield CSS
 */
export const TextfieldCSS = css<Props>`
  --theme-textfield-default-background-color: #f7f7f7;
  --theme-textfield-default-background-color-active: #f7f7f7;
  --theme-textfield-default-border-color: #c5c2cb;
  --theme-textfield-default-color: #333;
  --theme-textfield-default-error-color: var(--theme-color-danger, #800);
  --theme-textfield-default-ok-color: var(--theme-color-ok, #080);
  --theme-textfield-default-placeholder-color: #666;
  --theme-textfield-default-border-error-color: var(--theme-color-danger, #800);
  --theme-textfield-default-border-ok-color: var(--theme-color-ok, #080);

  --base-textfield-default-vertical-padding: 0;
  --base-textfield-default-horizontal-padding: var(--base-common-padding-xl, 16px);
  --base-textfield-default-font-size: 1.4rem;

  ${TextfieldTextColorCSS}
  ${TextfieldBorderColorCSS}

  background-color: var(
    --theme-textfield-background-color,
    var(--theme-textfield-default-background-color)
  );
  border-radius: var(--base-textfield-border-radius, var(--base-border-radius, 8px));
  border-style: solid;
  border-width: 1px;
  font-size: var(--base-textfield-font-size, var(--base-textfield-default-font-size));
  font-weight: 400;
  height: var(--base-textfield-height, 50px);
  outline: none;
  overflow: hidden;
  padding-bottom: var(
    --base-textfield-vertical-padding,
    var(--base-textfield-default-vertical-padding)
  );
  padding-left: var(
    --base-textfield-horizontal-padding,
    var(--base-textfield-default-horizontal-padding)
  );
  padding-right: var(
    --base-textfield-horizontal-padding,
    var(--base-textfield-default-horizontal-padding)
  );
  padding-top: var(
    --base-textfield-vertical-padding,
    var(--base-textfield-default-vertical-padding)
  );
  text-overflow: ellipsis;
  transition:
    border-color var(--base-textfield-transition-time, var(--base-animation-time-sm, 0.2s)) linear,
    background-color var(--base-textfield-transition-time, var(--base-animation-time-sm, 0.2s))
      linear,
    box-shadow var(--base-textfield-transition-time, var(--base-animation-time-sm, 0.2s)) linear;
  white-space: nowrap;

  /**
   * Textfield states
   */
  &:active,
  &:focus {
    ${TextfieldTextColorCSS}
    ${TextfieldBorderColorCSS}

    background-color: var(
      --theme-textfield-background-color-active,
      var(--theme-textfield-default-background-color-active)
    );
    box-shadow: var(--theme-textfield-active-boxshadow, none);
  }

  &[disabled],
  &[disabled]:hover {
    background-color: var(
      --theme-textfield-background-color,
      var(--theme-textfield-default-background-color)
    );
    border-color: var(--theme-textfield-border-color, var(--theme-textfield-default-border-color));
    color: var(--theme-textfield-color, var(--theme-textfield-default-color));
    cursor: not-allowed;
    opacity: 0.5;
  }

  &[disabled]::placeholder,
  &[disabled]:hover::placeholder {
    color: var(--theme-textfield-color, var(--theme-textfield-default-color)) !important;
  }

  &::placeholder {
    color: var(
      --theme-textfield-placeholder-color,
      var(--theme-textfield-default-placeholder-color)
    );
    font-size: var(--base-textfield-font-size, var(--base-textfield-default-font-size));
    font-style: normal;
    font-weight: 400;
    opacity: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &[readonly] {
    background-color: var(
      --theme-textfield-background-color,
      var(--theme-textfield-default-background-color)
    );
    border-color: var(--theme-textfield-border-color, var(--theme-textfield-default-border-color));
    color: var(
      --theme-textfield-placeholder-color,
      var(--theme-textfield-default-placeholder-color)
    );
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
`
/**
 * Textfield component
 *
 * @param {TextfieldStatus} [$status=undefined] - The status of the textfield. Defaults to undefined.
 *
 * Theme CSS vars:
 *
 * * --theme-textfield-default-background-color
 * * --theme-textfield-default-background-color-active
 * * --theme-textfield-default-border-color
 * * --theme-textfield-default-color
 * * --theme-textfield-default-error-color
 * * --theme-textfield-default-ok-color
 * * --theme-textfield-default-placeholder-color
 * * --theme-textfield-default-border-error-color
 * * --theme-textfield-default-border-ok-color
 * * --theme-textfield-active-boxshadow
 *
 * Base CSS vars:
 *
 * * --base-textfield-height
 * * --base-textfield-border-radius
 * * --base-textfield-font-size
 * * --base-textfield-default-vertical-padding
 * * --base-textfield-default-horizontal-padding
 * * --base-textfield-transition-time
 */
const Textfield = styled.input<Props>`
  ${TextfieldCSS}
`

export default Textfield
