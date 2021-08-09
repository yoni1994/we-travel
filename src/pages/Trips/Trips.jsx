import React from 'react';
import styles from './Trips.module.css'

function Trips(props) {
  return (
      <div className={styles.container}>
          <p>Hello World! I'm the Trips component.</p> 
          <p>Date for my trip</p>
          <ul>
            <li>Trip Atendess</li>
          </ul>
          
      </div>
  )
}

export default Trips