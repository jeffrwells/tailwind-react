import React from 'react';

const Copy = ({
  children,
  classes = '',
  style,
  href,
  center
}) => (
  <p style={style} className={`${center && 'text-center max-w'} text-md leading-5 text-gray-500 mb-4 ${classes}`}>
    {children}
  </p>
)

export default Copy;
