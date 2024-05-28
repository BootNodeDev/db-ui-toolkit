import React, { HTMLAttributes, PropsWithChildren } from 'react'
import styles from './styles.module.scss'

interface Props extends HTMLAttributes<HTMLElement>, PropsWithChildren {}

const Main: React.FC<Props> = ({ children, style, className, ...restProps }) => {
  return (
    <main
      style={style}
      className={`dbuitkMain ${styles.wrapper} ${className ? className : ''}`.trim()}
      {...restProps}
    >
      {children}
    </main>
  )
}

export default Main
