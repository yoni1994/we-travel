import React from 'react';
import styles from './ChecklistCard.module.css'
import { Link } from 'react-router-dom'


function ChecklistCard(props) {
  return (
      <>
      <Link to={`/checklists/${props.checklists._id}`}>
          <div className={styles.container}>
              <h2>{props.checklist.checklistName}</h2>
              <p>{props.checklist.items}</p>
          </div>
      </Link>
      </>
  )
}

export default ChecklistCard;