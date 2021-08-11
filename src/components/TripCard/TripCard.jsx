import React from 'react';
import styles from './TripCard.module.css'
import { Link } from 'react-router-dom'

import dateFormat from 'dateformat'


function TripCard(props) {
    
    return (
        <>
        <Link to={`/trips/${props.trip._id}`}>
            <div className={styles.container}>
                <h2>{props.trip.name}</h2>
                <p>{props.trip.notes}</p>
                {dateFormat(props.trip.date, "mediumDate", true)}
            </div>
        </Link>
        <button 
            type="button"
            onClick={() => props.handleDeleteTrip(props.trip._id)}
        >
                Delete Trip
        </button>
        </>
    )
}

export default TripCard;