import React, { CSSProperties } from 'react'
import styles from './styles.module.css'

interface InnerContainerProps {
  style?: CSSProperties
  className?: string
  children?: React.ReactNode
}

const InnerContainer: React.FC<InnerContainerProps> = ({
  children,
  style,
  className,
  ...restProps
}) => {
  return (
    <div style={style} className={`${styles.innerContainer} ${className}`} {...restProps}>
      {children}
    </div>
  )
}

export default InnerContainer
