import React from 'react'
import PreHeader from './PreHeader'
import PostHeader from './PostHeader'
import styles from './styles.module.scss'
const Index = () => {
  return (
    <div className={styles.__header}>
        <PreHeader/>
        <PostHeader/>
    </div>
  )
}

export default Index