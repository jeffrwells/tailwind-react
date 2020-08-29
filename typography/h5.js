import React from 'react';

const H5 = ({
  children,
  classes = '',
  style,
  center,
}) => (
  <h5 style={style} className={`${center && 'text-center max-w'} text-md leading-6 text-gray-600 ${classes}`}>
    {children}
  </h5>
)

export default H5;
