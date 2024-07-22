export interface VarName {
  customPropertyPrefix?: 'theme' | 'base'
  componentName: string
  componentVariant?: string
  customPropertyName: string
}

export const cssCustomPropertyName = ({
  customPropertyPrefix = 'theme',
  componentName,
  componentVariant,
  customPropertyName,
}: VarName) => {
  return `--${customPropertyPrefix}-${componentName}-${componentVariant === undefined ? '' : componentVariant + '-'}${customPropertyName}`
}
