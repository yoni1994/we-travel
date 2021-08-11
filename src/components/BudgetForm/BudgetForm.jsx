import React, {useState} from 'react';

// Styles
import styles from './BudgetForm.module.css'

// Services

function BudgetForm(props) {
  const [formData, setFormData] = useState({
    total: 0,
    travel: 0,
    lodging: 0,
    food: 0,
    activities: 0,
    misc: 0,
  })
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: parseInt(e.target.value)})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddBudget(formData)
    setFormData({
        total: 0,
        travel: 0,
        lodging: 0,
        food: 0,
        activities: 0,
        misc: 0,
    })
  }

  return (
      <div className={styles.container}>
        <h2>Set Your Budget</h2>
        <form 
           id="add-budget-form" 
           onSubmit={handleSubmit}
           className={styles.form}
        >
          <label htmlFor="budget-total">Total Budget</label>
          <input
            id="budget-cost" 
            type="number"
            name="total"
            value={formData.total}
            onChange={handleChange}
          /><label htmlFor="budget-total">Travel</label>
          <input
            id="budget-travel" 
            type="number"
            name="travel"
            value={formData.travel}
            onChange={handleChange}
          /><label htmlFor="budget-cost">Lodging</label>
          <input
            id="budget-lodging" 
            type="number"
            name="lodging"
            value={formData.lodging}
            onChange={handleChange}
          /><label htmlFor="budget-cost">Food</label>
          <input
            id="budget-food" 
            type="number"
            name="food"
            value={formData.food}
            onChange={handleChange}
          /><label htmlFor="budget-cost">Activities</label>
          <input
            id="budget-activities" 
            type="number"
            name="activities"
            value={formData.activities}
            onChange={handleChange}
          /><label htmlFor="budget-cost">misc</label>
          <input
            id="budget-misc" 
            type="number"
            name="misc"
            value={formData.misc}
            onChange={handleChange}
          />
          <button type="submit">
            Complete Budget
          </button>
        </form>
      </div>
  )
}

export default BudgetForm