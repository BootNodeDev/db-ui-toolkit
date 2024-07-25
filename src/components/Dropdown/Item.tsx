import { styled, css } from 'styled-components'
import { cssCustomPropertyName } from '../../utils'

export interface Props {
  $variant?: string
  disabled?: boolean
}

/**
 * @name Item
 *
 * @description Dropdown item component
 *
 * @param {boolean} [disabled=false] - Disables the dropdown item. Default is false.
 * @param {string} [$variant] - Optional component variant.
 *
 * **Theme CSS variables:**
 *
 * - `--theme-dropdown-item-background-color`
 * - `--theme-dropdown-item-border-color`
 * - `--theme-dropdown-item-color`
 * - `--theme-dropdown-item-background-color-hover`
 * - `--theme-dropdown-item-border-color-hover`
 * - `--theme-dropdown-item-color-hover`
 * - `--theme-dropdown-item-background-color-active`
 * - `--theme-dropdown-item-border-color-active`
 * - `--theme-dropdown-item-color-active`
 *
 * **Base CSS variables:**
 *
 * - `--base-dropdown-item-transition-duration`
 * - `--base-dropdown-item-padding`
 * - `--base-dropdown-item-column-gap`
 *
 */
const Item = styled.div.attrs<Props>(
  ({ tabIndex = 0, className = 'dbuitkDropdownItem', disabled = false }) => ({
    className,
    disabled,
    tabIndex,
  }),
)`
  ${({ $variant }) => css`
    align-items: center;
    background-color: var(
      ${cssCustomPropertyName({
        componentName: 'dropdown-item',
        componentVariant: $variant,
        customPropertyName: 'background-color',
      })},
      transparent
    );
    border-bottom: 1px solid
      var(
        ${cssCustomPropertyName({
          componentName: 'dropdown-item',
          componentVariant: $variant,
          customPropertyName: 'border-color',
        })},
        #f0f0f0
      );
    color: var(
      ${cssCustomPropertyName({
        componentName: 'dropdown-item',
        componentVariant: $variant,
        customPropertyName: 'color',
      })},
      #2e3048
    );
    column-gap: var(
      ${cssCustomPropertyName({
        componentName: 'dropdown-item',
        componentVariant: $variant,
        customPropertyName: 'column-gap',
        customPropertyPrefix: 'base',
      })},
      var(--base-gap, 8px)
    );
    cursor: pointer;
    display: flex;
    font-size: 1.4rem;
    font-weight: 400;
    justify-content: flex-start;
    line-height: 1.4;
    min-height: 32px;
    overflow: hidden;
    padding: var(
      ${cssCustomPropertyName({
        componentName: 'dropdown-item',
        componentVariant: $variant,
        customPropertyName: 'padding',
        customPropertyPrefix: 'base',
      })},
      0 var(--base-common-padding-xl, 16px)
    );
    text-decoration: none;
    transition: background-color
      var(
        ${cssCustomPropertyName({
          componentName: 'dropdown-item',
          componentVariant: $variant,
          customPropertyName: 'transition-duration',
          customPropertyPrefix: 'base',
        })},
        var(--base-transition-duration-xs, 0.1s)
      )
      linear;
    user-select: none;
    white-space: nowrap;

    &:first-child {
      border-top-left-radius: var(
        ${cssCustomPropertyName({
          componentName: 'dropdown',
          componentVariant: $variant,
          customPropertyName: 'border-radius',
          customPropertyPrefix: 'base',
        })},
        var(--base-border-radius, 8px)
      );
      border-top-right-radius: var(
        ${cssCustomPropertyName({
          componentName: 'dropdown',
          componentVariant: $variant,
          customPropertyName: 'border-radius',
          customPropertyPrefix: 'base',
        })},
        var(--base-border-radius, 8px)
      );
    }

    &:last-child {
      border-bottom-left-radius: var(
        ${cssCustomPropertyName({
          componentName: 'dropdown',
          componentVariant: $variant,
          customPropertyName: 'border-radius',
          customPropertyPrefix: 'base',
        })},
        var(--base-border-radius, 8px)
      );
      border-bottom-right-radius: var(
        ${cssCustomPropertyName({
          componentName: 'dropdown',
          componentVariant: $variant,
          customPropertyName: 'border-radius',
          customPropertyPrefix: 'base',
        })},
        var(--base-border-radius, 8px)
      );
      border-bottom: none;
    }

    &:hover {
      background-color: var(
        ${cssCustomPropertyName({
          componentName: 'dropdown-item',
          componentVariant: $variant,
          customPropertyName: 'background-color-hover',
        })},
        rgba(0, 0, 0, 0.05)
      );
      border-color: var(
        ${cssCustomPropertyName({
          componentName: 'dropdown-item',
          componentVariant: $variant,
          customPropertyName: 'border-color-hover',
        })},
        #f0f0f0
      );
      color: var(
        ${cssCustomPropertyName({
          componentName: 'dropdown-item',
          componentVariant: $variant,
          customPropertyName: 'color-hover',
        })},
        #2e3048
      );
    }

    &.dropdownItemActive,
    &.dropdownItemActive:hover {
      background-color: var(
        ${cssCustomPropertyName({
          componentName: 'dropdown-item',
          componentVariant: $variant,
          customPropertyName: 'background-color-active',
        })},
        rgba(0, 0, 0, 0.1)
      );
      border-color: var(
        ${cssCustomPropertyName({
          componentName: 'dropdown-item',
          componentVariant: $variant,
          customPropertyName: 'border-color-active',
        })},
        #f0f0f0
      );
      color: var(
        ${cssCustomPropertyName({
          componentName: 'dropdown-item',
          componentVariant: $variant,
          customPropertyName: 'color-active',
        })},
        #000
      );
    }

    &:disabled,
    &[disabled] {
      &,
      &:hover {
        background-color: var(
          ${cssCustomPropertyName({
            componentName: 'dropdown-item',
            componentVariant: $variant,
            customPropertyName: 'background-color',
          })},
          transparent
        );
        cursor: not-allowed;
        opacity: 0.5;
        pointer-events: none;
      }
    }

    &:active {
      opacity: 0.8;
    }
  `}
`

export default Item
