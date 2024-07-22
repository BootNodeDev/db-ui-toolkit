export interface VarName {
  prefix?: 'theme' | 'base'
  name: string
  variant?: string
  cssProperty: string
}

export const cssCustomPropertyName = ({
  prefix = 'theme',
  name,
  variant,
  cssProperty,
}: VarName) => {
  return `--${prefix}-${name}-${variant === undefined ? '' : variant + '-'}${cssProperty}`
}
