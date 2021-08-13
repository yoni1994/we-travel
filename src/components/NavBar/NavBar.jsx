import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
	const [openOrClosed, setOpenOrClosed] = useState(false)

	const handleToggle = () => {
		setOpenOrClosed(!openOrClosed)
	}

	return (
		<>
		<nav>
			<i 
			  onClick={handleToggle}
			  className={`fas fa-bars ${styles.toggle}`}>
		    </i>
				<NavLink to="/home"><i 
			  className={`fas fa-plane-departure ${styles.toggle}`}>
		    </i></NavLink>
				<NavLink to="/trips"><i 
			  className={`fas fa-passport ${styles.toggle}`}>
		    </i></NavLink>
				</nav>
			{openOrClosed &&
				<div className={styles.navDark}>
				{user ? (
					<>
					<NavLink to="/home">Home</NavLink>
					<NavLink to="/trips">Trips</NavLink>
					<NavLink to='' onClick={handleLogout}>Log out</NavLink>
					</>
				) : (
					<>	
					<NavLink to="/login">Log In</NavLink>
					<NavLink to="/users">Users</NavLink>
					<NavLink to="/signup">Sign Up</NavLink>
					</>
				)}
				</div>
            }
						</>
	)
}

export default NavBar
