import React from 'react';
import styles from './ActivityCard.module.css'
import { Link } from 'react-router-dom'


function ActivityCard(props) {
    return (
        <>
        <Link to={`/activities/${props.activity._id}`}>
            <div className={styles.container}>
                <h2>{props.activity.name}</h2>
                <p>{props.activity.notes}</p>
                {props.activity.date?.split('T')[0]}
            </div>
        </Link>
        <button
            className={styles.delete} 
            type="button"
            onClick={() => props.handleDeleteActivity(props.activity._id)}
        >
                Delete
        </button>
        </>
    )
}

export default ActivityCard;