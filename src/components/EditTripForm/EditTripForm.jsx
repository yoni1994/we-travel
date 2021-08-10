import React, { useState } from 'react';

// Styles
import styles from './EditTripForm.module.css'

function EditTripForm(props) {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    notes: ''
  })
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleUpdateTrip(formData)
    setFormData({
      name: '',
      date: '',
      notes: ''
    })
  }

  return (
      <div>
        <h2>Edit Trip</h2>
        <form id="Edit-trip-form" onSubmit={handleSubmit}>
          <label htmlFor="trip-name">Name</label>
          <input
            id="trip-name" 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="off"
            placeholder="trip name"
          />
          <label htmlFor="trip-date">Date</label>
          <input 
            id="trip-date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <label htmlFor="trip-notes">Notes</label>
          <textarea 
            id="trip-notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            cols="30" 
            rows="10" 
            placeholder="type trip notes here"
          ></textarea>
          <button type="submit">
            Save
          </button>
        </form>
      </div>
  )
}

export default EditTripForm