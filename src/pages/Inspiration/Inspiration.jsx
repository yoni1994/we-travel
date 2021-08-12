import React, { useState, useEffect } from 'react';

// Styles
import styles from './Inspiration.module.css'

// Components
import ImageCard from '../../components/ImageCard/ImageCard';

// Services
import * as inspirationService from '../../services/inspirationService'

function Inspiration(){
    const [backgroundImageObj, setBackgroundImageObj] = useState('')

    useEffect(() => {
       inspirationService.index()
        .then(unsplashImageObj => setBackgroundImageObj(unsplashImageObj))
    }, []);

    console.log("backgroundImage", backgroundImageObj);

    return (
        <div className={styles.container}>
            <img src={backgroundImageObj.response?.urls.regular} alt={backgroundImageObj.response?.alt_description} />
            <p>{backgroundImageObj.response?.description}</p>
            <ImageCard/>
        </div>
    )
}

export default Inspiration