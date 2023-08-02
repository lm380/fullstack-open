import React from 'react';

export const Filter = ({ filterTerm, filterHandler }) => {
  return (
    <div>
      filter shown with: <input value={filterTerm} onChange={filterHandler} />
    </div>
  );
};
