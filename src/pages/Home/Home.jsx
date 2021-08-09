import React from 'react';
import AddTripForm from '../../components/AddTripForm/AddTripForm'
import AddActivityForm from '../../components/AddActivityForm/AddActivityForm'


function Home(props) {
  return (
      <div>
          <p>Hello World! I'm the Home component.</p> 
          <AddTripForm/>
          <AddActivityForm/>
      </div>
  )
}

export default Home