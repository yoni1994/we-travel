import React, {useState} from 'react';

// Styles
import styles from './AddActivityForm.module.css'

// Services
import { createActivity } from '../../services/activityService'


function AddActivityForm(props) {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    address: null,
    info: '',
    cost: 0,
    budgetCategory: '',
    date: '',
    attendees: [],
    owner: '',
    isKeyActivity: false
  })

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  
 

  return (
      <div>
       
      </div>
  )
}

export default AddActivityForm