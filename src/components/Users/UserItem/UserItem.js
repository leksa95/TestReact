// Core
import React from 'react';
import PropTypes from 'prop-types';

function UserItem(props) {
    const {id, firstName, lastName, dob} = props;

    return (
        <li className='user-list__item' id={id}>
            <p>Full name: {firstName} {lastName}</p>
            <p>DoB: {new Date(dob).toDateString()}</p>
        </li>
    )
}

UserItem.propTypes = {
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    dob: PropTypes.string
};

export default UserItem;