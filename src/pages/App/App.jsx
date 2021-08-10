import React, { useState } from 'react'
import { Route, Redirect, useHistory, Switch } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import Signup from '../Signup/Signup'
import Login from '../Login/Login'
import Landing from '../Landing/Landing'
import Users from '../Users/Users'
import * as authService from '../../services/authService'
import Home from '../Home/Home'
import Trips from '../Trips/Trips'
import Trip from '../Trip/Trip'
import Activities from '../Activities/Activities'
import Activity from '../Activity/Activity'
import Inspiration from '../Inspiration/Inspiration'

const App = () => {
	const history = useHistory()
	const [user, setUser] = useState(authService.getUser())

	const handleLogout = () => {
		authService.logout()
		setUser(null)
		history.push('/')
	}

	const handleSignupOrLogin = () => {
		setUser(authService.getUser())
	}

	return (
			<div>
			<NavBar user={user} handleLogout={handleLogout}/>
			
			<Route exact path='/'>
				<Landing user={user} />
			</Route>
			<Route exact path='/signup'>
				{user ? 
					<Redirect to='/' /> : 
					<Signup handleSignupOrLogin={handleSignupOrLogin}/>
				}
			</Route>
			<Route exact path='/login'>
				{user ? 
					<Redirect to='/' /> : 
					<Login handleSignupOrLogin={handleSignupOrLogin}/>
				}
			</Route>
			<Route exact path='/users'>
				{user ? <Users /> : <Redirect to='/login' />}
			</Route>
			<Route exact path='/home'>
				{user ? <Home /> : <Redirect to='/login'/>}
			</Route>
			<Route exact path='/trips'>
				{user ? <Trips user={user} /> : <Redirect to='/login'/>}
			</Route>

			<Route exact path='/trips/:id'>
				{user ? <Trip user={user} /> : <Redirect to='/login'/>}
			</Route>
			<Route exact path='/activities'>
				{user ? <Activities user={user} /> : <Redirect to='/login'/>}
			</Route>
			<Route exact path='/activities/:id'>
				{user ? <Activity user={user} /> : <Redirect to='/login'/>}
			</Route>
			<Route exact path='/inspiration'>
				{user ? <Inspiration user={user} /> : <Redirect to='/login'/>}
			</Route>
		
		</div>
	)
}

export default App
