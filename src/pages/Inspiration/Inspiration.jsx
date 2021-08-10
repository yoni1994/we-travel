import React from 'react';

// Styles
import styles from './Inspiration.module.css'

// Components
import ImageCard from '../../components/ImageCard/ImageCard';

// Services

function Inspiration(){
    return (
        <div className={styles.container}>

            <h1>Inspiration</h1>
            <ImageCard/>

        </div>
    )
}

export default Inspiration