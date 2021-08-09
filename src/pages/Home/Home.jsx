import React from 'react';
import AddTripForm from '../../components/AddTripForm/AddTripForm'
import Trips from '../../pages/Trips/Trips'
import Trip from '../../pages/Trip/Trip'
import AddActivityForm from '../../components/AddActivityForm/AddActivityForm'


function Home(props) {
  return (
      <div>
          <p>Hello World! I'm the Home component.</p> 
          <AddTripForm/>
          <Trips/>
          <AddActivityForm/>
      </div>
  )
}

export default Home