import React, { useEffect } from 'react';

const useClickOutside = (ref, callback) => {

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback(event);
    }
  }

  useEffect(() => {
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  })
}

export default useClickOutside;
