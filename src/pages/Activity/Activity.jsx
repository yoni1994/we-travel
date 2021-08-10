import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import styles from './Activity.module.css'
import * as activityService from '../../services/activityService'
import { useParams } from 'react-router-dom'
import EditActivityForm from '../../components/EditActivityForm/EditActivityForm';

function Activity(props) {
  const { id } = useParams()
  const [activity, setActivity] = useState({})
  
  useEffect(() => {
    const fetchActivity = async () => {
        try {
            const activity = await activityService.getActivityById(id)
            setActivity(activity)
        } catch (error) {
            throw error
        }
    }
    fetchActivity()
    return () => { setActivity(null) }
  }, [id])


  return (
    <div className={styles.container}>
        <h1>Name: {activity.name}</h1>
        <h2>Location: {activity.location}</h2>
        <h2>Address: {activity.address}</h2>
        <p> <strong>Notes</strong>: {activity.notes}</p>
        <h3>Cost: {activity.cost}</h3>
        {/* <h3>Budget Category: {activity.BudgetCategory}</h3> */}
        <h3>Date: {activity.date}</h3>
    </div>
    
  )
}

export default Activity
