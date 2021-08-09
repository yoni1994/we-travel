import React, { useEffect, useState } from 'react';
import styles from './Trip.module.css'
import * as tripService from '../../services/tripService'

function Trip(props) {
  const { id } = props.match.params
  const [trip, setTrip] = useState()

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
    <h1>{props.trip.name}</h1>
    <h2>{props.trip.notes}</h2>
    <h3>{props.trip.date}</h3>
</div>
  )
}

export default Trip