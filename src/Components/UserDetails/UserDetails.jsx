import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    console.log(user);
    return (
        <div className='items-center '>
            <h1 className='text-center text-4xl font-bold mt-10'>User Details Here</h1>
            <div className='items-center mt-10 p-5 w-fit mx-auto border-2 border-indigo-600 rounded-lg'>
            
            <h2>{user.name}</h2>
            <p>Website: {user.website}</p>
            
        </div>
        </div>
    );
};

export default UserDetails;