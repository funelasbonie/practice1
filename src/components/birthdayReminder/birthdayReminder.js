import React, { useState } from 'react';
import data from './data';
import List from './list';

const BirthdayReminder = () => {

    //props

    //state
    const [people, setPeople] = useState(data);

    //function
    const clearBtn = () => {
        setPeople([])
    }

    //styles

    return (
        <>
            <div className={"container"}>
                <h3>{people.length} birthdays today</h3>
                <List people={people} />
                <button onClick={clearBtn}>Clear</button>
            </div>
        </>
    );
}

export default BirthdayReminder;