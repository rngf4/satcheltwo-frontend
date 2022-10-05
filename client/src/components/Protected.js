import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Protected({ children, level }) {
    const { user, userData } = useAuth();

    useEffect(() => {
        if (!user) {
            return <Navigate to='/' />;
        }
        if (level && (userData?.level >= level)) {
            return children
        } else {
            return <>Loading</>;
        }
    }, [userData])
};

export default Protected;
