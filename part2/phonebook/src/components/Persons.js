import React from 'react';
import { Person } from './Person';

export const Persons = ({ filterTerm, persons, deleteHandler }) => {
  const personsToDisplay = filterTerm
    ? persons.filter((person) =>
        person.name.toLocaleLowerCase().includes(filterTerm)
      )
    : persons;
  return (
    <>
      {personsToDisplay.map((person) => (
        <Person
          key={person.id}
          id={person.id}
          name={person.name}
          number={person.number}
          deleteHandler={deleteHandler}
        />
      ))}
    </>
  );
};
