import React, {useState} from 'react';

// Styles
import styles from './AddTripForm.module.css'

// Services
import { create } from '../../services/tripService'

function AddTripForm(props) {
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
    setFormData({
      name: '',
      date: '',
      notes: ''
    })
    create(formData)
  }

  return (
      <div>
        <h2>Add Trip</h2>
        <form id="add-trip-form" onSubmit={handleSubmit}>
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
            Add Trip
          </button>
        </form>
      </div>
  )
}

export default AddTripForm