import React from 'react';

// Styles
import styles from './Inspiration.module.css'

// Components
import ImageCard from '../../components/ImageCard/ImageCard';

// Services

function Inspiration(){
    return (
        <div className={styles.container}>

            <ImageCard/>

        </div>
    )
}

export default Inspiration