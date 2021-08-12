import React, { useState } from 'react'

import styles from './AddChecklistForm.module.css'

function AddChecklistForm(props) {
  const [checklistName, setChecklistName] = useState({name: ''})
  const [checklistItems, setChecklistItems] = useState([{name: ''}])
  
  const handleChangeName = (e) => {
    setChecklistName({...checklistName, [e.target.name]: e.target.value})
  }
  
  const handleChangeItems =  (e, i) => {
    let newItems = [...checklistItems]
    newItems[i][e.target.name] = e.target.value
    setChecklistItems(newItems)
  }

  const handleAddItems = (e) => {
    e.preventDefault()
    setChecklistItems([...checklistItems, {name: ''}])
  }

  const handleRemoveItems = (i) => {
    let newItems = [...checklistItems]
    newItems.splice(i, 1)
    setChecklistItems(newItems)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      name: checklistName.name,
      items: checklistItems
    }
    props.handleAddChecklist(formData)
    setChecklistName({name: '',})
    setChecklistItems([{name: ''}])
  }

  return (
    <div className={styles.container}>
      <h2>Add a Checklist</h2>
    <form id="add-checklist-form" onSubmit={handleSubmit}>
      <label htmlFor="checklist-name">Name</label>
      <input 
      id="checklist-name"
      type="text"
      name="name"
      value={checklistName.name}
      onChange={handleChangeName}
      autoComplete="off"
      placeholder="checklist name"
      />
      <label>Items</label>
      {checklistItems.map((item, i) => (
        <div className={styles.addItemDiv} key={i}>
          <input 
            id={`checklist-items-${i+1}`}
            type="text"
            name="name"
            value={item.name || ''}
            onChange={(e) => handleChangeItems(e, i)}
            autoComplete="off"
            placeholder="checklist item"
          />
          <i 
            className={`fas fa-plus-circle ${styles.addItem}`}
            onClick={handleAddItems}
          ></i>
          <i 
            className={`fas fa-minus-circle ${styles.removeItem}`}
            onClick={() => handleRemoveItems(i)}
          ></i>
      </div>
      ))}
      
      
      <button type="submit">Add Checklist</button>
    </form>
    </div>
  )
}

export default AddChecklistForm