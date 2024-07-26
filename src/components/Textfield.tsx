import { InputHTMLAttributes } from 'react'
import { styled, css } from 'styled-components'

import { cssCustomPropertyName } from '../utils'

export type TextfieldStatus = 'error' | 'ok' | undefined

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  $status?: TextfieldStatus | undefined
  $variant?: string
}

/**
 *  Status CSS
 */
const TextfieldStatusCSS = css<Props>`
  ${({ $status, $variant }) =>
    $status === 'error'
      ? css`
          background-color: var(
            ${cssCustomPropertyName({
              componentName: 'textfield',
              componentVariant: $variant,
              customPropertyName: 'background-color-error',
            })},
            var(
              ${cssCustomPropertyName({
                componentName: 'textfield',
                componentVariant: $variant,
                customPropertyName: 'background-color',
              })},
              #f7f7f7
            )
          );
          border-color: var(
            ${cssCustomPropertyName({
              componentName: 'textfield',
              componentVariant: $variant,
              customPropertyName: 'border-color-error',
            })},
            var(--theme-color-danger, #800)
          );
          color: var(
            ${cssCustomPropertyName({
              componentName: 'textfield',
              componentVariant: $variant,
              customPropertyName: 'color-error',
            })},
            var(--theme-color-danger, #800)
          );
        `
      : $status === 'ok'
        ? css`
            background-color: var(
              ${cssCustomPropertyName({
                componentName: 'textfield',
                componentVariant: $variant,
                customPropertyName: 'background-color-ok',
              })},
              var(
                ${cssCustomPropertyName({
                  componentName: 'textfield',
                  componentVariant: $variant,
                  customPropertyName: 'background-color',
                })},
                #f7f7f7
              )
            );
            border-color: var(
              ${cssCustomPropertyName({
                componentName: 'textfield',
                componentVariant: $variant,
                customPropertyName: 'border-color-ok',
              })},
              var(--theme-color-ok, #080)
            );
            color: var(
              ${cssCustomPropertyName({
                componentName: 'textfield',
                componentVariant: $variant,
                customPropertyName: 'color-ok',
              })},
              var(--theme-color-ok, #080)
            );
          `
        : css``}
`

/**
 * Textfield CSS
 */
export const TextfieldCSS = css<Props>`
  ${({ $variant }) => css`
    background-color: var(
      ${cssCustomPropertyName({
        componentName: 'textfield',
        componentVariant: $variant,
        customPropertyName: 'background-color',
      })},
      #f7f7f7
    );
    border-color: var(
      ${cssCustomPropertyName({
        componentName: 'textfield',
        componentVariant: $variant,
        customPropertyName: 'border-color',
      })},
      #c5c2cb
    );
    border-radius: var(
      ${cssCustomPropertyName({
        componentName: 'textfield',
        componentVariant: $variant,
        customPropertyName: 'border-radius',
        customPropertyPrefix: 'base',
      })},
      var(--base-border-radius, 8px)
    );
    border-style: solid;
    border-width: 1px;
    box-shadow: var(
      ${cssCustomPropertyName({
        componentName: 'textfield',
        componentVariant: $variant,
        customPropertyName: 'box-shadow',
      })},
      none
    );
    color: var(
      ${cssCustomPropertyName({
        componentName: 'textfield',
        componentVariant: $variant,
        customPropertyName: 'color',
      })},
      #333
    );
    font-size: 1.4rem;
    font-weight: 400;
    height: 50px;
    outline: none;
    overflow: hidden;
    padding: var(
      ${cssCustomPropertyName({
        componentName: 'textfield',
        componentVariant: $variant,
        customPropertyName: 'padding',
        customPropertyPrefix: 'base',
      })},
      0 var(--base-common-padding-xl, 16px)
    );
    text-overflow: ellipsis;
    transition:
      border-color
        var(
          ${cssCustomPropertyName({
            componentName: 'textfield',
            componentVariant: $variant,
            customPropertyName: 'transition-duration',
            customPropertyPrefix: 'base',
          })},
          var(--base-transition-duration-sm, 0.2s)
        )
        linear,
      background-color
        var(
          ${cssCustomPropertyName({
            componentName: 'textfield',
            componentVariant: $variant,
            customPropertyName: 'transition-duration',
            customPropertyPrefix: 'base',
          })},
          var(--base-transition-duration-sm, 0.2s)
        )
        linear,
      box-shadow
        var(
          ${cssCustomPropertyName({
            componentName: 'textfield',
            componentVariant: $variant,
            customPropertyName: 'transition-duration',
            customPropertyPrefix: 'base',
          })},
          var(--base-transition-duration-sm, 0.2s)
        )
        linear;
    white-space: nowrap;

    ${TextfieldStatusCSS}

    /**
    * Textfield states
    */
    &:active,
    &:focus {
      color: var(
        ${cssCustomPropertyName({
          componentName: 'textfield',
          componentVariant: $variant,
          customPropertyName: 'color-active',
        })},
        var(
          ${cssCustomPropertyName({
            componentName: 'textfield',
            componentVariant: $variant,
            customPropertyName: 'color',
          })},
          #333
        )
      );
      border-color: var(
        ${cssCustomPropertyName({
          componentName: 'textfield',
          componentVariant: $variant,
          customPropertyName: 'border-color-active',
        })},
        var(
          ${cssCustomPropertyName({
            componentName: 'textfield',
            componentVariant: $variant,
            customPropertyName: 'border-color',
          })},
          #c5c2cb
        )
      );
      background-color: var(
        ${cssCustomPropertyName({
          componentName: 'textfield',
          componentVariant: $variant,
          customPropertyName: 'background-color-active',
        })},
        var(
          ${cssCustomPropertyName({
            componentName: 'textfield',
            componentVariant: $variant,
            customPropertyName: 'background-color',
          })},
          #f7f7f7
        )
      );
      box-shadow: var(
        var(
          ${cssCustomPropertyName({
            componentName: 'textfield',
            componentVariant: $variant,
            customPropertyName: 'box-shadow-active',
          })}
        ),
        var(
          ${cssCustomPropertyName({
            componentName: 'textfield',
            componentVariant: $variant,
            customPropertyName: 'box-shadow',
          })},
          none
        )
      );

      ${TextfieldStatusCSS}
    }

    &[disabled],
    &[disabled]:hover {
      &,
      &::placeholder {
        background-color: var(
          ${cssCustomPropertyName({
            componentName: 'textfield',
            componentVariant: $variant,
            customPropertyName: 'background-color',
          })},
          #f7f7f7
        );
        border-color: var(
          ${cssCustomPropertyName({
            componentName: 'textfield',
            componentVariant: $variant,
            customPropertyName: 'border-color',
          })},
          #c5c2cb
        );
        color: var(
          ${cssCustomPropertyName({
            componentName: 'textfield',
            componentVariant: $variant,
            customPropertyName: 'color',
          })},
          #333
        );
        cursor: not-allowed;
        opacity: 0.6;
      }
    }

    &::placeholder {
      color: var(
        ${cssCustomPropertyName({
          componentName: 'textfield',
          componentVariant: $variant,
          customPropertyName: 'placeholder-color',
        })},
        #666
      );
      font-style: normal;
      font-weight: 400;
      opacity: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    &[readonly] {
      background-color: var(
        ${cssCustomPropertyName({
          componentName: 'textfield',
          componentVariant: $variant,
          customPropertyName: 'background-color',
        })},
        #f7f7f7
      );
      border-color: var(
        ${cssCustomPropertyName({
          componentName: 'textfield',
          componentVariant: $variant,
          customPropertyName: 'border-color',
        })},
        #c5c2cb
      );
      color: var(
        ${cssCustomPropertyName({
          componentName: 'textfield',
          componentVariant: $variant,
          customPropertyName: 'color',
        })},
        #333
      );
      cursor: default;
      font-style: normal;
    }

    &[type='number'] {
      appearance: textfield;

      ::-webkit-inner-spin-button,
      ::-webkit-outer-spin-button {
        appearance: none;
        margin: 0;
      }
    }

    &::-webkit-search-decoration {
      appearance: none;
    }
  `}
`
/**
 * @name Textfield
 *
 * @description Input component
 *
 * @param {TextfieldStatus} [$status=undefined] - The status of the textfield. Defaults to undefined.
 * @param {string} [$variant] - Optional component variant.
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
