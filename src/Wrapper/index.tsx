import React, { HTMLAttributes, PropsWithChildren } from 'react'
import styles from './styles.module.scss'

interface Props extends HTMLAttributes<HTMLDivElement>, PropsWithChildren {}

const Wrapper: React.FC<Props> = ({ children, style, className, ...restProps }) => {
  return (
    <div
      style={style}
      className={`dbuitkWrapper ${styles.wrapper} ${className ? className : ''}`.trim()}
      {...restProps}
    >
      {children}
    </div>
  )
}

export default Wrapper
