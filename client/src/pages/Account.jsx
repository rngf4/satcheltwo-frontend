import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useGetClasses, useGetUser } from "../services/api";

function Account() {
    const { logOut, user } = useAuth();

    return (<div className='w-[300px] m-auto'>
        <h1 className='text-center text-2xl font-bold pt-12'>Account</h1>
        <div>
            <p>Welcome, {user?.displayName}</p>
        </div>
        <div>
            {/*classes ? classes.map(classData => {
                return <div key={classData?._id}>{classData?.name}</div>
            }) : <div>loading</div>*/}
        </div>
        <button onClick={logOut} className='border py-2 px-5 mt-10'>
            Logout
        </button>
    </div>);

};

export default Account;
