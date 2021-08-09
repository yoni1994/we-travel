import React from 'react';
import styles from './TripCard.module.css'
import { NavLink } from 'react-router-dom'


function TripCard(props) {
    return (
        
            <div className={styles.container}>
                <h2>{props.trip.name}</h2>
                <p>{props.trip.notes}</p>
                {props.trip.date}
            </div>
        

    )
}

export default TripCard;