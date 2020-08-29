import React from 'react';

const P = ({
  children,
  classes = '',
  style,
  href,
  center
}) => (
  <p style={style} className={`${center && 'text-center max-w'} text-sm leading-5 text-gray-600 ${classes}`}>
    {children}
  </p>
)

export default P;
