import React from 'react';

const List = (props) => {

    //props
    const people = props.people;

    //state

    //function

    //style

    return (
        <>
            {
                people.map((person) => {
                    return (
                        <article id={person.id} className="person">
                            <img src={person.image} alt={person.name} />
                            <div>
                                <h4>{person.name}</h4>
                                <p>{person.age}</p>
                            </div>
                        </article>
                    );
                })
            }
        </>
    );
}

export default List;