import React, { HTMLAttributes, PropsWithChildren } from 'react'
import styles from './styles.module.scss'

interface Props extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {}

const InnerContainer: React.FC<Props> = ({ children, style, className, ...restProps }) => {
  return (
    <div
      style={style}
      className={`dbuitkInnerContainer ${styles.wrapper} ${className ? className : ''}`.trim()}
      {...restProps}
    >
      {children}
    </div>
  )
}

export default InnerContainer
