import React from 'react';
import { Link } from 'react-router-dom'


import styles from './ImageCard.module.css'


import countryPics from '../../assets/data/countryPics';



function ImageCard(){
    return (
        <Link to={`/inspirations/${countryPics.alpha3code}`}>
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
        </Link>
    )
}

export default ImageCard