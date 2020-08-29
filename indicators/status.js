import React from 'react';

const Status = ({ color }) => {
  return (
    <span aria-label="Status" className={`h-4 w-4 bg-${color}-100 rounded-full flex items-center justify-center`}>
      <span className={`h-2 w-2 bg-${color}-400 rounded-full`}></span>
    </span>
  )
}

export default Status;
