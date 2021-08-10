import React, { useState, useEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom'
import styles from './Checklists.module.css'

// Services
// import * as tripService from '../../services/tripService'

// Components
// import TripCard from '../../components/TripCard/TripCard'
// import AddTripForm from '../../components/AddTripForm/AddTripForm'

function Checklists(props) {
  const history = useHistory()
  const [checklists, setChecklists] = useState([])
  
  const handleAddChecklist = async (newChecklistData) => {
    const newChecklist = await checklistService.create(newChecklistData);
    setChecklits([newChecklist, ...checklists]);
  }
  
  const handleDeleteChecklist = id => {
    checklistService.deleteOne(id)
      .then(
        setChecklists(checklists.filter(checklist => id !== checklist._id))
      )
  }
  
  useEffect(() => {
    checklistService.getAll()
      .then(allChecklists => setChecklists(allChecklists))
  }, []);
  
  return (
      <div className={styles.container}>
        <AddChecklistForm
          handleAddChecklist={handleAddChecklist}
        ></AddChecklistForm>
          <p>Hello World! I'm the Trips component.</p> 
            {checklists.map(checklist => {
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

export default Checklists