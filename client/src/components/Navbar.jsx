import React from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from '../context/AuthContext';

function SignIn() {
	return (
		<Link to='/signin'>Sign in</Link>
	)
}

function SignedIn() {
	const {logOut} = useAuth()

	return (
		<button onClick={logOut}>Logout</button>
	)
}

function Navbar() {
	const {user} = useAuth();

	return (
		<div className='flex justify-between bg-gray-200 w-full p-4'>
			<Link to="/">dashboard</Link>
			{user?.displayName ? <SignedIn/> : <SignIn/>}
		</div>
	);
};

export default Navbar;
