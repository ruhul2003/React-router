import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {

    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h1>This is user page</h1>
        </div>
    );
};

export default Users;