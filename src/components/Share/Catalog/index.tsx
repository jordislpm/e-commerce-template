import React from 'react'
import { ChildrenType} from '@/types'
import styles from "./Catalog.module.css"

function Catalog({children}:ChildrenType) {
  return (
    <div className={styles.catalog}>
      {children}
    </div>
  )
}

export default Catalog