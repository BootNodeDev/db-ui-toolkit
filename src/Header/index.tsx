import React, { HTMLAttributes, PropsWithChildren } from 'react'
import styles from './styles.module.scss'

interface Props extends HTMLAttributes<HTMLElement>, PropsWithChildren {}

const Header: React.FC<Props> = ({ children, style, className, ...restProps }) => {
  return (
    <header
      style={style}
      className={`dbuitkHeader ${styles.wrapper} ${className ? className : ''}`.trim()}
      {...restProps}
    >
      {children}
    </header>
  )
}

export default Header
