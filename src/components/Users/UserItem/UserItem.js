// Core
import React from 'react';

function UserItem(props) {
    const {id, firstName, lastName, dob} = props;

    return (
        <li className='user-list__item' id={id}>
            <p>Full name: {firstName} {lastName}</p>
            <p>DoB: {new Date(dob).toDateString()}</p>
        </li>
    )
}

export default UserItem;