import React from 'react'
import styles from './styles.module.scss'
const Index = ({children}) => {
  return (
    <div className={`${styles.LinksLayout} ${styles.max_width_1280} `}>{children}</div>
  )
}

export default Index