import React from 'react'
import { ChildrenProps } from '@/types'
import styles from "./Catalog.module.css"

function Catalog({children}:ChildrenProps) {
  return (
    <div className={styles.section}>
      {children}
    </div>
  )
}

export default Catalog