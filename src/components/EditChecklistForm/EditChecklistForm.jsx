import React, { useState } from 'react'

import styles from './EditChecklistForm.module.css'

function EditChecklistForm(props) {
  const [checklistName, setChecklistName] = useState({name: props.checklist.name})
  const [checklistItems, setChecklistItems] = useState(props.checklist.items)
  const handleChangeName = (e) => {
    setChecklistName({...checklistName, [e.target.name]: e.target.value})
  }
  
  const handleChangeItems =  (e, i) => {
    let newItems = [...checklistItems]
    newItems[i][e.target.name] = e.target.value
    setChecklistItems(newItems)
  }

  const handleEditItems = (e) => {
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
    props.handleEditChecklist(formData)
    setChecklistName({name: '',})
    setChecklistItems([{name: ''}])
  }

  return (
    <div className={styles.container}>
    <form id="Edit-checklist-form" onSubmit={handleSubmit}>
      <label htmlFor="checklist-name">Name</label>
      <input 
      id="checklist-name"
      type="text"
      name="name"
      value={checklistName.name}
      onChange={handleChangeName}
      autoComplete="off"
      placeholder="checklist name"
      required
      />
      <label>Items</label>
      {checklistItems?.map((item, i) => (
        <div className={styles.EditItemDiv} key={i}>
          <input 
            id={`checklist-items-${i+1}`}
            type="text"
            name="name"
            value={item.name || ''}
            onChange={(e) => handleChangeItems(e, i)}
            autoComplete="off"
            placeholder="checklist item"
          />
          <button onClick={handleEditItems} className={styles.addItem}>
            +
          </button>

          <button 
            onClick={() => handleRemoveItems(i)}
            className={styles.removeItem}
            >
             — 
          </button>
      </div>
      ))}
      <button type="submit">Edit Checklist</button>
    </form>
    </div>
  )
}

export default EditChecklistForm