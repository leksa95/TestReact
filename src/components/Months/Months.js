// Core
import React, {useEffect, useState} from 'react';

// Components
import MonthsItem from "./MonthsItem/MonthsItem";

// Style
import monthData from "./monthData";

function Months() {
    const [usersData, setUsersData] = useState([]);
    usersData.forEach((item) => {
        const date = new Date(item.dob);
        const month = date.getMonth();
        monthData[month].data.push(item);
    });
    const monthsItems = monthData.map(item => <MonthsItem key={item.id} {...item} />);

    useEffect(() => {
        fetch('https://yalantis-react-school.herokuapp.com/api/task0/users')
            .then(res => res.json())
            .then(res => {
                setUsersData(res);
            }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <ul className='month-list'>
            {usersData.length > 0 ? monthsItems : 'Loading...'}
        </ul>
    )
}

export default Months;