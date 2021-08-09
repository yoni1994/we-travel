import React, { useState, useEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom'
import styles from './Trips.module.css'

// Services
import * as tripService from '../../services/tripService'

// Components
import TripCard from '../../components/TripCard/TripCard'

function Trips(props) {
  const history = useHistory()
  const [trips, setTrips] = useState([])
  
  const handleAddTrip = async (newTripData) => {
    const newTrip = await tripService.create(newTripData);
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
            {trips.map(trip => {
              return (
                <Route 
                  path='/trips'
                  key={trip._id}
                >
				          {props.user ? 
                    <TripCard
                      
                      trip={trip}
                    /> 
                    : <Redirect to='/login'/>}
			          </Route>         
              )
            })}
      </div>
  )
}

export default Trips