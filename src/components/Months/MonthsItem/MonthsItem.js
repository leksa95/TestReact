// Core
import React, {useState} from 'react';

// Components
import Users from "../../Users/Users";

function MonthsItem(props) {
    const {title, data} = props;
    const [isOpen, setIsOpen] = useState(false);
    const color = getColor(data);

    const usersToggle = () => {
        setIsOpen(!isOpen);
    };

    function getColor(data) {
        const countUsers = data.length;
        if (countUsers <= 2) {
            return '#fafbfc';
        } else if (countUsers >= 3 && countUsers <= 6) {
            return '#f1f8ff';
        } else if (countUsers >= 7 && countUsers <= 10) {
            return '#e6ffed';
        } else {
            return '#ffeef0';
        }
    }

    return (
        <li className='month-list__item' onMouseEnter={usersToggle} onMouseLeave={usersToggle}
            style={{backgroundColor: color}}>
            <span className="title">{title}</span>
            <Users data={data} isOpen={isOpen}/>
        </li>
    )
}

export default MonthsItem;