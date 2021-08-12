import React from 'react';

import styles from './ImageCard.module.css'

import testImage from '../../assets/images/test/la-so-vk4vjTNVrTg-unsplash.jpg'

import countryPics from '../../assets/data/countryPics';



function ImageCard(){
    return (
        <div className={styles.container}>
            {countryPics.map((countryPic, i) => (
                <div className={styles.card}>
                        <div className={styles.imageBanner}>
                            <img src={countryPic.pics.structures} alt="" className={styles.imageBanner}/>
                        </div>
                        <div className={styles.cardHeader}>
                            <h3>{countryPic.country}</h3>
                        </div>
                        <div className={styles.cardBody}>
                            <button>Travel Here</button>
                        </div>
                </div>
            ))}
        </div>
    )
}

export default ImageCard