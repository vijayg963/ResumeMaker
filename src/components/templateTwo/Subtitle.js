import React from 'react';
import styles from "./styles.module.css"

export const Subtitle = ({subTitle}) => {
  return (
    <div contentEditable={true} suppressContentEditableWarning={true} className={styles.subtitle}>{subTitle}</div>
  )
}
