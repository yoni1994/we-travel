import React, {useState} from 'react';

// Styles
import styles from './AddActivityForm.module.css'

// Services
import { createActivity } from '../../services/activityService.js'


function AddActivityForm(props) {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    address: '',
    info: '',
    cost: 0,
    budgetCategory: '',
    date: '',
    // attendees: [],
    // owner: '',
    isKeyActivity: false
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({
        name: '',
        location: '',
        address: '',
        info: '',
        cost: 0,
        budgetCategory: '',
        date: '',
        // attendees: [],
        // owner: '',
        isKeyActivity: false,
    })
    createActivity(formData)
  }
  
 

  return (
      <div>
          <h2>Add Activity</h2>
       <form id="add-activity-form" onSubmit={handleSubmit}>
          <label htmlFor="activity-name">Name</label>
          <input
            id="activity-name" 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="off"
            placeholder="activity name"
          />
          <label htmlFor="activity-location">Location</label>
          <input
            id="activity-location" 
            type="text" 
            name="location"
            value={formData.location}
            onChange={handleChange}
            autoComplete="off"
            placeholder="activity location"
          />
          <label htmlFor="activity-address">Address</label>
          <input
            id="activity-address" 
            type="text" 
            name="address"
            value={formData.address}
            onChange={handleChange}
            autoComplete="off"
            placeholder="activity address"
          />
          <label htmlFor="activity-info">Info</label>
          <textarea 
            id="activity-info"
            name="info"
            value={formData.info}
            onChange={handleChange}
            cols="30" 
            rows="10" 
            placeholder="type activity info here"
          ></textarea>
          <label htmlFor="activity-cost">Cost</label>
          <input
            id="activity-cost" 
            type="number"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
          />
          <label htmlFor="activity-budgetCategory">Budget Category</label>
          <select
            id="activity-budgetCategory" 
            name="budgetCategory"
            value={formData.budgetCategory}
            onChange={handleChange}
          >
              <option value="travel">Travel</option>
              <option value="lodging">Lodging</option>
              <option value="food">Food</option>
              <option value="activities">Activities</option>
              <option value="misc">Misc</option>
          </select>
          <label htmlFor="activity-date">Date</label>
          <input 
            id="activity-date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <label htmlFor="isKeyActivity">Is this a key activity?</label>
          <input
            id="activity-name" 
            type="checkbox" 
            name="isKeyActivity"
            value={formData.isKeyActivity}
            onChange={handleChange}
          />
          <button type="submit">
            Add Activity
          </button>
        </form>
      </div>
  )
}

export default AddActivityForm