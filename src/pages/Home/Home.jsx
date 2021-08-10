import React from 'react';
import AddTripForm from '../../components/AddTripForm/AddTripForm'
import Trips from '../../pages/Trips/Trips'
import AddActivityForm from '../../components/AddActivityForm/AddActivityForm'
import AddChecklistForm from '../../components/AddChecklistForm/AddChecklistForm';


function Home(props) {
  return (
      <div>
          <p>Hello World! I'm the Home component.</p> 
          <AddTripForm/>
          <Trips/>
          <AddActivityForm/>
          <AddChecklistForm />
      </div>
  )
}

export default Home