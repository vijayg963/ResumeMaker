import React from 'react'
import styles from "../../stylesheet/Home.module.css";

export const Header = ({name,post}) => {
  return (
    <div className={styles.header}>
        <h1 contentEditable="true" suppressContentEditableWarning={true} className={styles.h1}>{name}</h1>
        <p contentEditable="true" suppressContentEditableWarning={true} className={styles.post}>{post}</p>
    </div>
  )
}
