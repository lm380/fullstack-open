import { useState, useEffect } from 'react';
import { Filter } from './components/Filter';
import { PersonForm } from './components/PersonForm';
import { Persons } from './components/Persons';
import personService from './services/PersonService';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterTerm, setFilterTerm] = useState('');
  const [addedMessage, setAddedMessage] = useState('');

  useEffect(() => {
    personService.getPersons().then((response) => {
      setPersons(response);
    });
  }, []);

  const showAddedMessage = (name) => {
    setAddedMessage(`Added ${name}`);
    setTimeout(() => {
      setAddedMessage('');
    }, 5000);
  };

  const addHandler = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`);
      return;
    }
    personService.createPerson(newPerson).then((response) => {
      setPersons([...persons, response]);
      showAddedMessage(response.name);
      setNewName('');
      setNewNumber('');
    });
  };

  const nameInputHandler = (event) => setNewName(event.target.value);
  const numberInputHandler = (event) => setNewNumber(event.target.value);

  const filterHandler = (event) => setFilterTerm(event.target.value);

  const deleteHandler = (name, id) => {
    const isDelete = window.confirm(`Are you sure you want to delete ${name}?`);
    if (!isDelete) return;
    personService.deletePerson(id).then(() => {
      const newPersons = persons.filter((person) => person.id !== id);
      setPersons(newPersons);
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={addedMessage} />
      <Filter filterTerm={filterTerm} filterHandler={filterHandler} />
      <PersonForm
        name={newName}
        nameHandler={nameInputHandler}
        number={newNumber}
        numberHandler={numberInputHandler}
        addHandler={addHandler}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filterTerm={filterTerm}
        deleteHandler={deleteHandler}
      />
    </div>
  );
};

export default App;
