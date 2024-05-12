import React, { useEffect } from 'react';

const useOnClickOutside = (ref, handler) => {
  useEffect((event) => {
    const listener = (event) => {
      console.log('ref', ref.current);
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler();
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchStart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchStart', listener);
    };
  });

  return <div></div>;
};

export default useOnClickOutside;
