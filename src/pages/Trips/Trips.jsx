import React, { useState, useEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom'
import styles from './Trips.module.css'

// Services
import * as tripService from '../../services/tripService'

// Components
import TripCard from '../../components/TripCard/TripCard'
import AddTripForm from '../../components/AddTripForm/AddTripForm'

function Trips(props) {
  const history = useHistory()
  const [trips, setTrips] = useState([])
  
  const handleAddTrip = async (newTripData) => {
    const newTrip = await tripService.create(newTripData);
    setTrips([newTrip, ...trips]);
  }
  
  const handleDeleteTrip = id => {
    tripService.deleteOne(id)
      .then(
        setTrips(trips.filter(trip => id !== trip._id))
      )
    
  }
  
  useEffect(() => {
    tripService.getAll()
      .then(allTrips => setTrips(allTrips))
  }, []);
  
  return (
      <div className={styles.container}>
        <AddTripForm
          handleAddTrip={handleAddTrip}
        ></AddTripForm>
          <p>Hello World! I'm the Trips component.</p> 
            {trips.map(trip => {
              return (
                <TripCard
                  key={trip._id}
                  trip={trip}
                  handleDeleteTrip={handleDeleteTrip}
                /> 
              )
            })}
      </div>
  )
}

export default Trips