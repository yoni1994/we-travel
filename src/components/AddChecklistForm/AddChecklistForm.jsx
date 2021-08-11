import React, { useState } from 'react'

import styles from './AddChecklistForm.module.css'

function AddChecklistForm(props) {
  const [checklistData, setChecklistData] = useState({
    // owner: '',
    name: '',
    items: [''],
  })

  const handleChange = (e) => {
    setChecklistData({...checklistData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddChecklist(checklistData)
    setChecklistData({
      // owner: '',
      name: '',
      items: [''],
    })
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
      value={checklistData.name}
      onChange={handleChange}
      autoComplete="off"
      placeholder="checklist name"
      />
      <label htmlFor="checklist-items">Items</label>
      <input 
      id="checklist-items"
      type="text"
      name="items"
      value={checklistData.items}
      onChange={handleChange}
      autoComplete="off"
      placeholder="checklist Items"
      />
      <button type="submit">Add Checklist</button>
    </form>
    </div>
  )
}

export default AddChecklistForm