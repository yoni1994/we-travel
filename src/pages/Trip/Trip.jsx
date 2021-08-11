import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import dateFormat from 'dateformat'

// Styles
import styles from './Trip.module.css'

// Services
import * as tripService from '../../services/tripService'
import * as activityService from '../../services/activityService'

// Components
import EditTripForm from '../../components/EditTripForm/EditTripForm'
import Activities from '../Activities/Activities'

function Trip(props) {
  const { id } = useParams()
  
  const [trip, setTrip] = useState({})
  const [activities, setActivities] = useState([])
  useEffect(() => {
    const fetchTrip = async () => {
        try {
            const trip = await tripService.getTripById(id)
            setTrip(trip)
            setActivities(trip.activities)
        } catch (error) {
            throw error
        }
    }
    fetchTrip()
    return () => { setTrip(null) }
}, [id])
  
  const [showEditTripForm, setShowEditTripForm] = useState(false)
  
  const handleToggle = () => {
    setShowEditTripForm(!showEditTripForm)
  }

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

  const handleAddActivity = async (newActivityData) => {
    const newActivity = await activityService.create(newActivityData);
    await tripService.update({$push: {activities: newActivity._id}}, id)
    setActivities([newActivity, ...activities]);
  }

  const handleDeleteActivity = id => {
    activityService.deleteOne(id)
      .then(
        setActivities(activities.filter(activity => id !== activity._id))
      ) 
  }

  return (
    <div className={styles.container}>
      <h1>{trip.name}</h1>
      <h2>{trip.notes}</h2>
      <h3>{dateFormat(trip.date, "mediumDate", true)}</h3>
      <Link to={'/checklists'}>Checklists</Link>
      {/* <button type="button">Edit Trip</button> */}
      {trip.name &&
      <button 
          type="button"
          className={styles.edit}
          onClick={handleToggle}
        >Edit Trip</button>}
      {showEditTripForm && trip.name &&
        <EditTripForm
          trip={trip}
          handleUpdateTrip={handleUpdateTrip}
        /> 
      }
      <Activities
        activities={activities}
        handleAddActivity={handleAddActivity}
        handleDeleteActivity={handleDeleteActivity}
      />
      {/* <Link to={'/activities'}>Activities</Link>
      <Link to={'/checklist'}>Checklists</Link> */}
      
      
    </div>
    
  )
}

export default Trip
