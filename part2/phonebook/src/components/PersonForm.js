import React from 'react';

export const PersonForm = ({
  name,
  number,
  nameHandler,
  numberHandler,
  addHandler,
}) => {
  return (
    <div>
      <form>
        <div>
          name: <input value={name} onChange={nameHandler} />
          <br />
          number: <input value={number} onChange={numberHandler} />
        </div>
        <div>
          <button type="submit" onClick={addHandler}>
            add
          </button>
        </div>
      </form>
    </div>
  );
};
