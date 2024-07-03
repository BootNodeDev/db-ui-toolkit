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
          color: var(--theme-textfield-color-error, var(--theme-textfield-color-error-default));
        `
      : $status === 'ok'
        ? css`
            color: var(--theme-textfield-color-ok, var(--theme-textfield-color-ok-default));
          `
        : css``}
`

/**
 *  Border color
 */
const TextfieldBorderColorCSS = css<Props>`
  ${({ $status }) =>
    $status === 'error'
      ? css`
          border-color: var(
            --theme-textfield-border-color-error,
            var(--theme-textfield-border-color-error-default)
          );
        `
      : $status === 'ok'
        ? css`
            border-color: var(
              --theme-textfield-border-color-ok,
              var(--theme-textfield-border-color-ok-default)
            );
          `
        : css``}
`

/**
 * Textfield CSS
 */
export const TextfieldCSS = css<Props>`
  --theme-textfield-color-default: #333;
  --theme-textfield-color-active-default: #333;
  --theme-textfield-color-error-default: var(--theme-color-danger, #800);
  --theme-textfield-color-ok-default: var(--theme-color-ok, #080);
  --theme-textfield-background-color-default: #f7f7f7;
  --theme-textfield-background-color-active-default: #f7f7f7;
  --theme-textfield-border-color-default: #c5c2cb;
  --theme-textfield-border-color-active-default: #c5c2cb;
  --theme-textfield-border-color-error-default: var(--theme-color-danger, #800);
  --theme-textfield-border-color-ok-default: var(--theme-color-ok, #080);
  --theme-textfield-placeholder-color-default: #666;

  --base-textfield-vertical-padding-default: 0;
  --base-textfield-horizontal-padding-default: var(--base-common-padding-xl, 16px);
  --base-textfield-font-size-default: 1.4rem;

  background-color: var(
    --theme-textfield-background-color,
    var(--theme-textfield-background-color-default)
  );
  border-color: var(--theme-textfield-border-color, var(--theme-textfield-border-color-default));
  border-radius: var(--base-textfield-border-radius, var(--base-border-radius, 8px));
  border-style: solid;
  border-width: 1px;
  box-shadow: var(--theme-textfield-box-shadow, none);
  color: var(--theme-textfield-color, var(--theme-textfield-color-default));
  font-size: var(--base-textfield-font-size, var(--base-textfield-font-size-default));
  font-weight: 400;
  height: var(--base-textfield-height, 50px);
  outline: none;
  overflow: hidden;
  padding-bottom: var(
    --base-textfield-vertical-padding,
    var(--base-textfield-vertical-padding-default)
  );
  padding-left: var(
    --base-textfield-horizontal-padding,
    var(--base-textfield-horizontal-padding-default)
  );
  padding-right: var(
    --base-textfield-horizontal-padding,
    var(--base-textfield-horizontal-padding-default)
  );
  padding-top: var(
    --base-textfield-vertical-padding,
    var(--base-textfield-vertical-padding-default)
  );
  text-overflow: ellipsis;
  transition:
    border-color var(--base-textfield-transition-time, var(--base-animation-time-sm, 0.2s)) linear,
    background-color var(--base-textfield-transition-time, var(--base-animation-time-sm, 0.2s))
      linear,
    box-shadow var(--base-textfield-transition-time, var(--base-animation-time-sm, 0.2s)) linear;
  white-space: nowrap;

  ${TextfieldTextColorCSS}
  ${TextfieldBorderColorCSS}

  /**
   * Textfield states
   */
  &:active,
  &:focus {
    color: var(--theme-textfield-color-active, var(--theme-textfield-color-active-default));
    border-color: var(
      --theme-textfield-border-color-active,
      var(--theme-textfield-border-color-active-default)
    );
    background-color: var(
      --theme-textfield-background-color-active,
      var(--theme-textfield-background-color-active-default)
    );
    box-shadow: var(--theme-textfield-box-shadow-active, none);

    ${TextfieldTextColorCSS}
    ${TextfieldBorderColorCSS}
  }

  &[disabled],
  &[disabled]:hover {
    background-color: var(
      --theme-textfield-background-color,
      var(--theme-textfield-background-color-default)
    );
    border-color: var(--theme-textfield-border-color, var(--theme-textfield-border-color-default));
    color: var(--theme-textfield-color, var(--theme-textfield-color-default));
    cursor: not-allowed;
    opacity: 0.5;
  }

  &[disabled]::placeholder,
  &[disabled]:hover::placeholder {
    color: var(--theme-textfield-color, var(--theme-textfield-color-default)) !important;
  }

  &::placeholder {
    color: var(
      --theme-textfield-placeholder-color,
      var(--theme-textfield-placeholder-color-default)
    );
    font-size: var(--base-textfield-font-size, var(--base-textfield-font-size-default));
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
      var(--theme-textfield-background-color-default)
    );
    border-color: var(--theme-textfield-border-color, var(--theme-textfield-border-color-default));
    color: var(
      --theme-textfield-placeholder-color,
      var(--theme-textfield-placeholder-color-default)
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
 * * --theme-textfield-color
 * * --theme-textfield-color-active
 * * --theme-textfield-color-error
 * * --theme-textfield-color-ok
 * * --theme-textfield-background-color
 * * --theme-textfield-background-color-active
 * * --theme-textfield-border-color
 * * --theme-textfield-border-color-active
 * * --theme-textfield-border-color-error
 * * --theme-textfield-border-color-ok
 * * --theme-textfield-placeholder-color
 * * --theme-textfield-box-shadow
 * * --theme-textfield-box-shadow-active
 *
 * Base CSS vars:
 *
 * * --base-textfield-height
 * * --base-textfield-border-radius
 * * --base-textfield-font-size
 * * --base-textfield-vertical-padding
 * * --base-textfield-horizontal-padding
 * * --base-textfield-transition-time
 */
const Textfield = styled.input<Props>`
  ${TextfieldCSS}
`

export default Textfield
