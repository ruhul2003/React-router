import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const {id, name, email, phone } = user;
    return (
        <div>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`} className="btn btn-soft btn-primary">
                Details
            </Link>
        </div>
    );
};

export default User;