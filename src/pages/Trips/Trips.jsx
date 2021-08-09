import React, { useState, useEffect } from 'react';
import {history} from 'react-router-dom'
import styles from './Trips.module.css'
import * as tripService from '../../services/tripService'

function Trips(props) {
  const [trips, setTrips] = useState([])
  const handleAddTrip = async (newTripData) => {
    const newTrip = await tripService.createTrip(newTripData);
    setTrips([...trips, newTrip]);
    history.push('/');
  }
  
  const handleDeleteTrip = id => {
    tripService.deleteOne(id)
     .then(
        setTrips(trips.filter(trip => id !== trip._id))
     )
    
  }
  
  const handleUpdateTrip = updatedTripData => {
    tripService.update(updatedTripData)
     .then(updatedTrip => {
      const newTripsArray = trips.map(trip => 
        (trip._id === updatedTrip._id ? updatedTrip : trip)
      )
      setTrips(newTripsArray);
      history.push('/');
     })
  }
  
  useEffect(() => {
    tripService.getAll()
      .then(allTrips => setTrips(allTrips))
  }, []);
  
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