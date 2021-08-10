import React, { useState, useEffect } from 'react';
// import { Route, Redirect, useHistory } from 'react-router-dom'
import styles from './Activities.module.css'

// Services
import * as activityService from '../../services/activityService'

// Components
import AddActivityForm from '../../components/AddActivityForm/AddActivityForm'

function Activities(props) {
//   const history = useHistory()
  const [activities, setActivities] = useState([])
  
  const handleAddActivity = async (newActivityData) => {
    const newActivity = await activityService.create(newActivityData);
    setActivities([newActivity, ...activities]);
  }
  
//   const handleDeleteActivity = id => {
//     activityService.deleteOne(id)
//       .then(
//         setActivities(activities.filter(activity => id !== activity._id))
//       )
    
//   }
  
//   const handleUpdateActivity = updatedActivityData => {
//     activityService.update(updatedActivityData)
//       .then(updatedActivity => {
//       const newActivitiesArray = activities.map(activity => 
//         (activity._id === updatedActivity._id ? updatedActivity : activity)
//       )
//       setActivities(newActivitiesArray);
//       history.push('/');
//       })
//   }
  
//   useEffect(() => {
//     activityService.getAll()
//       .then(allActivities => setActivities(allActivities))
//   }, []);
  
  return (
      <div className={styles.container}>
        <h2>activities page</h2>
        {/* <AddActivityForm
          handleAddActivity={handleAddActivity}
        ></AddActivityForm> */}
          {/* <p>Hello World! I'm the Activities component.</p> 
            {activities.map(activity => {
              return (
                <ActivityCard
                  key={activity._id}
                  activity={activity}
                  handleDeleteActivity={handleDeleteActivity}
                /> 
              )
            })} */}
      </div>
  )
}

export default Activities