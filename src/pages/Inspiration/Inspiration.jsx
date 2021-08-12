import React, { useState, useEffect } from 'react';

// Styles
import styles from './Inspiration.module.css'

// Components
import ImageCard from '../../components/ImageCard/ImageCard';

// Services
import * as inspirationService from '../../services/inspirationService'

function Inspiration(){
    const [backgroundImage, setBackgroundImage] = useState('')

    useEffect(() => {
       inspirationService.index()
        .then(unsplashImage => setBackgroundImage(unsplashImage))
    }, []);

    console.log("backgroundImage", backgroundImage);

    return (
        <div className={styles.container}>

            <ImageCard/>

        </div>
    )
}

export default Inspiration