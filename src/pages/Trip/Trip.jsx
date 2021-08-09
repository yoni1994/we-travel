import React from 'react';
import styles from './Trip.module.css'

function Trip(props) {
  
  return (
    <div className={styles.container}>
    <h1>{props.trip.name}</h1>
    <h2>{props.trip.notes}</h2>
    <h3>{props.trip.date}</h3>
</div>
  )
}

export default Trip