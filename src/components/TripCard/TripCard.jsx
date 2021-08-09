import React from 'react';
import styles from './TripCard.module.css'
import { NavLink } from 'react-router-dom'


function Card(props) {
    return (
        <NavLink to={`/trips/${props.trip._id}`}>
            <div className={styles.container}>
                <h2>{props.trip.name}</h2>
                <p>{props.trip.notes}</p>
                {props.trip.date}
            </div>
        </NavLink>

    )
}

export default Card;