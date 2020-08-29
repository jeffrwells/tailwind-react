import React from 'react';

const Error = ({
  children,
  classes = '',
  style,
  center
}) => (
  <p style={style} className={`${center && 'text-center max-w'} text-red-700 text-sm ${classes}`}>
    {children}
  </p>
)

export default Error;
