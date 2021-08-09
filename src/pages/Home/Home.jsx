import React from 'react';
import AddTripForm from '../../components/AddTripForm/AddTripForm'
import Trip from '../../pages/Trips/Trips'

function Home(props) {
  return (
      <div>
          <p>Hello World! I'm the Home component.</p> 
          <AddTripForm/>
          <Trip/>
      </div>
  )
}

export default Home