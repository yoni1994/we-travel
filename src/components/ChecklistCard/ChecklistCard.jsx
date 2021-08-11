import React from 'react';
import styles from './ChecklistCard.module.css'
import { Link } from 'react-router-dom'


function ChecklistCard(props) {
  return (
      <>
      <Link to={`/checklists/${props.checklist._id}`}>
          <div className={styles.container}>
              <h2>{props.checklist.name}</h2>
              <p>{props.checklist.items}</p>
          </div>
      </Link>
      <button
            className={styles.delete} 
            type="button"
            onClick={() => props.handleDeleteChecklist(props.checklist._id)}
        >
                Delete
        </button>
      </>
  )
}

export default ChecklistCard;