export interface VarName {
  componentName: string
  componentVariant?: string
  customPropertyName: string
  customPropertyPrefix?: 'theme' | 'base'
}
/**
 * @name cssCustomPropertyName
 *
 * @description Generate a CSS custom property name.
 *
 * @example cssCustomPropertyName({ componentName: 'button', customPropertyName: 'background-color' })
 * // Output: --theme-button-background-color
 *
 * @example cssCustomPropertyName({ componentName: 'button', componentVariant: 'primary', customPropertyName: 'background-color' })
 * // Output: --theme-button-primary-background-color
 *
 * @example cssCustomPropertyName({ componentName: 'button', customPropertyName: 'border-radius', customPropertyPrefix: 'base' })
 * // Output: --base-button-border-radius
 *
 * @example cssCustomPropertyName({ componentName: 'button', componentVariant: 'primary', customPropertyName: 'border-radius' customPropertyPrefix: 'base' })
 * // Output: --base-button-primary-border-radius
 *
 */
export const cssCustomPropertyName = ({
  customPropertyPrefix = 'theme',
  componentName,
  componentVariant,
  customPropertyName,
}: VarName) => {
  return `--${customPropertyPrefix}-${componentName}-${componentVariant === undefined ? '' : componentVariant + '-'}${customPropertyName}`
}
