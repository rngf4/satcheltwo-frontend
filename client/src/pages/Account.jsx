import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useGetClasses, useGetUser } from "../services/api";

const Account = () => {
    const { logOut, user } = useAuth();
    const userData = useGetUser();
    const classes = useGetClasses()

    return (<div className='w-[300px] m-auto'>
        <h1 className='text-center text-2xl font-bold pt-12'>Account</h1>
        <div>
            <p>Welcome, {user?.displayName} @ level: {userData?.level} </p>
        </div>
        <div>
            <h1>Your classes are listed below</h1>
            {classes ? classes.map(classData => {
                return <div key={classData?._id}>{classData?.name}</div>
            }) : <div>loading</div>}
        </div>
        <button onClick={logOut} className='border py-2 px-5 mt-10'>
            Logout
        </button>
    </div>);

};

export default Account;
