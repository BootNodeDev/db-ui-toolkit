import React, { HTMLAttributes, PropsWithChildren } from 'react'
import styles from './styles.module.scss'

interface Props extends HTMLAttributes<HTMLElement>, PropsWithChildren {}

const Footer: React.FC<Props> = ({ children, style, className, ...restProps }) => {
  return (
    <footer
      style={style}
      className={`dbuitkFooter ${styles.wrapper} ${className ? className : ''}`.trim()}
      {...restProps}
    >
      {children}
    </footer>
  )
}

export default Footer
