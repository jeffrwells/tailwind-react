import React from 'react';

const H2 = ({
  children,
  classes = '',
  style,
  center,
}) => (
  <h2 style={style} className={`${center && 'text-center max-w'} text-3xl leading-9 font-bold text-gray-900 ${classes}`}>
    {children}
  </h2>
)

export default H2;
