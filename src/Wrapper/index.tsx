import React, { CSSProperties } from 'react'
import styles from './styles.module.scss'

interface WrapperProps {
  style?: CSSProperties
  className?: string
  children?: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children, style, className, ...restProps }) => {
  return (
    <div
      style={style}
      className={`${styles.wrapper} ${styles.wrapperDark} ${className}`}
      {...restProps}
    >
      {children}
    </div>
  )
}

export default Wrapper
