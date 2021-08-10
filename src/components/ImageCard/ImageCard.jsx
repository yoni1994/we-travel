import React from 'react';

import styles from './ImageCard.module.css'

import testImage from '../../assets/images/test/la-so-vk4vjTNVrTg-unsplash.jpg'



function ImageCard(){
    return (
        <div className={styles.card}>
            <div className={styles.imageBanner}></div>
            <div className={styles.cardHeader}>
                <h2>Italy</h2>
            </div>
            <div className={styles.cardBody}>
                <p>Italy is a beautiful country.</p>
            </div>
            
            
        </div>
    )
}

export default ImageCard