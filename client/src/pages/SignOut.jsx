import {useAuth} from "../context/AuthContext";
import {Navigate} from 'react-router-dom';

export default function SignOut() {
	const {logOut} = useAuth()
	if (logOut) {
		logOut()
	}
	return (<>
		{logOut ? (<Navigate to="/"/>) : (<div>Logging Out</div>)}
		</>
	)
}