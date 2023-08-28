import React, { useContext } from 'react'
import { Details } from './Details'
import { Technology } from './Technology'
import styles from "./styles.module.css"
import { dataContext } from '../../context/dataContext'

export const Tempfour = () => {
    const {data} = useContext(dataContext)
  return (
    <div className={styles.app}>
        <Technology {...data}/>
        <Details {...data}/>
    </div>
  )
}
