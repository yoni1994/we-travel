import React from 'react';

// styles
import styles from './Home.module.css'

// services

// components
import Inspiration from '../Inspiration/Inspiration'

function Home(props) {
  return (
      <div className={styles.container}>
          <h2>Current Trips</h2>
          <h2>Upcoming Trips</h2>
          <h2>Plan a New Trip</h2>
          <button type="button">Add a Trip</button>
          <p>Not sure where to go?</p>
          <h2>Get Inspired</h2>
          <Inspiration/>
      </div>
  )
}

export default Home