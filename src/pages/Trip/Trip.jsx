import React, { useState, useEffect } from 'react';

import styles from './Trip.module.css'
import * as tripService from '../../services/tripService'

function Trip(props) {
  const [trip, setTrip] = useState([])
  
  useEffect(() => {
    tripService.getAll()
      .then(allTrips => setTrip(allTrips))
  }, []);
  
  return (
      <div className={styles.container}>
          <p>Hello World! I'm the Trips component.</p> 
          <ul>
            {trip.map(trip => {
              return (
                <>
                <p>{trip.date}</p>
                <li
                  key={trip._id}
                  trip={trip}
                >
                  {trip.name}
                </li>
                </>
              )
            })}
          </ul>
      </div>
  )
}

export default Trip