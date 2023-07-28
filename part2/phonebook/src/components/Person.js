import React from 'react';

export const Person = ({ name, number, id, deleteHandler }) => {
  return (
    <p>
      {name} {number}{' '}
      <button
        onClick={() => {
          deleteHandler(name, id);
        }}
      >
        delete
      </button>
    </p>
  );
};
