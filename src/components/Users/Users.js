// Core
import React from 'react';

// Components
import UserItem from "./UserItem/UserItem";

// Style
import './Users.scss'

function Users(props) {
    const {data, isOpen} = props;
    const usersList = data.map(item => <UserItem key={item.id} {...item} />);

    return (
        <ul className={isOpen ? 'user-list user-list--open' : 'user-list'}>
            {usersList}
        </ul>
    )
}

export default Users;