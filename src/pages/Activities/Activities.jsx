import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import styles from './Activities.module.css'

// Services
import * as activityService from '../../services/activityService'

// Components
import ActivityCard from '../../components/ActivityCard/ActivityCard'
import AddActivityForm from '../../components/AddActivityForm/AddActivityForm'

function Activities(props) {
  const history = useHistory()
  const [activities, setActivities] = useState([])
  
  const handleAddActivity = async (newActivityData) => {
    const newActivity = await activityService.create(newActivityData);
    setActivities([newActivity, ...activities]);
  }

  const handleDeleteActivity = id => {
    activityService.deleteOne(id)
      .then(
        setActivities(activities.filter(activity => id !== activity._id))
      ) 
  }

  useEffect(() => {
    activityService.getAll()
      .then(allActivities => setActivities(allActivities))
  }, []);
  
  return (
      <div className={styles.container}>
        <AddActivityForm
          handleAddActivity={handleAddActivity}
        ></AddActivityForm>
        <p>Hello World! I'm the Activities component.</p> 
            {activities.map(activity => {
              return (
                <ActivityCard
                  key={activity._id}
                  activity={activity}
                  handleDeleteActivity={handleDeleteActivity}
                /> 
              )
            })}
      </div>
  )
}

export default Activities