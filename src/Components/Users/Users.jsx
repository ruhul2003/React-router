import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {

    const users = useLoaderData();
    console.log(users);
    return (
        <div className='items-center text-center mt-10'>
            <h1 className='text-5xl font-bold mb-10'>This is user page</h1>
            <div className='flex flex-col gap-4  items-center border-2 border-indigo-600'>
                {
                    users.map(user => (
                        <div key={user.id} className='border-2 mt-5 border-green-600 w-fit rounded-lg p-4'>
                            <User user={user}></User>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Users;