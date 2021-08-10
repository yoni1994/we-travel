import React, { useState, useEffect } from 'react';
import styles from './Activities.module.css'

// Services
import * as activityService from '../../services/activityService'

// Components
import AddActivityForm from '../../components/AddActivityForm/AddActivityForm'

function Activities(props) {
  const [activities, setActivities] = useState([])
  
  const handleAddActivity = async (newActivityData) => {
    const newActivity = await activityService.create(newActivityData);
    setActivities([newActivity, ...activities]);
  }
  
  return (
      <div className={styles.container}>
        <AddActivityForm
          handleAddActivity={handleAddActivity}
        ></AddActivityForm>
      </div>
  )
}

export default Activities