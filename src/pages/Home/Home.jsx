import React from 'react';
import AddTripForm from '../../components/AddTripForm/AddTripForm'

function Home(props) {
  return (
      <div>
          <p>Hello World! I'm the Home component.</p> 
          <AddTripForm/>
      </div>
  )
}

export default Home