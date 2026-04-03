import React , {use} from 'react';

const Users2 = ({userPromise}) => {
    const users = use(userPromise);
    console.log(' Users2 suspense' , users);
    return (
        <div>
            
        </div>
    );
};

export default Users2;