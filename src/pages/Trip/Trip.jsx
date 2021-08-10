import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Trip.module.css'
import * as tripService from '../../services/tripService'
import { useParams } from 'react-router-dom'
import EditTripForm from '../../components/EditTripForm/EditTripForm'

function Trip(props) {
  const { id } = useParams()
  const [trip, setTrip] = useState({})

  const handleUpdateTrip = async (updatedTripData) => {
    try {
      const updatedTrip = await tripService.update(updatedTripData, id)
      const newTripState = {
          ...trip, 
          name: updatedTrip.name, 
          notes: updatedTrip.notes, 
          date: updatedTrip.date
      }
      setTrip(newTripState)
      console.log(trip)
    } catch (error){
        throw error
    } 
  }

  useEffect(() => {
    const fetchTrip = async () => {
        try {
            const trip = await tripService.getTripById(id)
            setTrip(trip)
        } catch (error) {
            throw error
        }
    }
    fetchTrip()
    return () => { setTrip(null) }
}, [id])

  return (
    <div className={styles.container}>
      <h1>{trip.name}</h1>
      <h2>{trip.notes}</h2>
      <h3>{trip.date}</h3>
      <Link to={'/activities'}>Activities</Link>
      <Link to={'/checklist'}>Checklists</Link>
      <button type="button">Edit Trip</button>
      <EditTripForm
        trip={trip}
        handleUpdateTrip={handleUpdateTrip}
      />
    </div>
    
  )
}

export default Trip
