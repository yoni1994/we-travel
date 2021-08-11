import React, { useState, useEffect } from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom'
import styles from './Checklists.module.css'

// Services
import * as checklistService from '../../services/checklistService'

// Components
import ChecklistCard from '../../components/ChecklistCard/ChecklistCard'
import AddChecklistForm from '../../components/AddChecklistForm/AddChecklistForm';

function Checklists(props) {
  const history = useHistory()
  const [checklists, setChecklists] = useState([])
  
  const handleAddChecklist = async (newChecklistData) => {
    const newChecklist = await checklistService.create(newChecklistData);
    setChecklists([newChecklist, ...checklists]);
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
          <h2>Checklists</h2> 
            {checklists.map(checklist => {
              return (
                <ChecklistCard
                  key={checklist._id}
                  checklist={checklist}
                  handleDeleteChecklist={handleDeleteChecklist}
                /> 
              )
            })}
      </div>
  )
}

export default Checklists