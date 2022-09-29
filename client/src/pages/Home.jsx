import React from 'react'
import { useAuth } from "../context/AuthContext";


const Home = () => {
    const { user } = useAuth()
    return (
        <div>
            <h1 className='text-center text-3xl font-bold py-8'>Home Page</h1>
        </div>
    )
}

export default Home