import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import styles from './Activity.module.css'
import * as activityService from '../../services/activityService'
import { useParams } from 'react-router-dom'

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
        <h1>{activity.name}</h1>
        <h2>{activity.notes}</h2>
        <h3>{activity.date}</h3>
    </div>
    
  )
}

export default Activity
