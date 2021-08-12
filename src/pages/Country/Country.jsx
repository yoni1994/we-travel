import React from 'react';
import styles from './Country.module.css'
import { useParams } from 'react-router-dom'


import countryPics from '../../assets/data/countryPics';


function Country() {
  const { id } = useParams()
    const currentCountry = countryPics.filter(countryPic => countryPic.alpha3Code === id)[0]

  return (
    <div className={styles.container}>
        <h1>{currentCountry.country}</h1>
        <h3>Check out {currentCountry.country}'s beautiful landsape!</h3>
        <img src={currentCountry.pics.landscape} alt="" className={styles.countryPics} />
        <h3>Visit {currentCountry.country}'s famous landmarks!</h3>
        <img src={currentCountry.pics.structures} alt="" className={styles.countryPics} />
        <h3>Also be sure to try out {currentCountry.country}'s exquisite cuisine!</h3>
        <img src={currentCountry.pics.food} alt="" className={styles.countryPics} />
    </div>
  )
}

export default Country