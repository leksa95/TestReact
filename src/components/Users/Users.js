// Core
import React from 'react';
import PropTypes from 'prop-types';

// Components
import UserItem from "./UserItem/UserItem";
import PerfectScrollbar from 'react-perfect-scrollbar'

// Style
import './Users.scss'
import 'react-perfect-scrollbar/dist/css/styles.css';

function Users(props) {
    const {data, isOpen} = props;
    const usersList = data.map(item => <UserItem key={item.id} {...item} />);

    return (
        <PerfectScrollbar style={{width: 'max-content', height: '300px', boxShadow: '0px 0px 8px #ccc'}}>
            <ul className={isOpen ? 'user-list user-list--open' : 'user-list'}>
                {usersList}
            </ul>
        </PerfectScrollbar>
    )
}

Users.propTypes = {
    data: PropTypes.array,
    isOpen: PropTypes.bool
};

export default Users;