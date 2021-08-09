import React, {useState} from 'react';

// Styles
import styles from './AddActivityForm.module.css'

// Services

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
  
 

  return (
      <div>
       
      </div>
  )
}

export default AddActivityForm