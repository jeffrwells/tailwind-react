import React from 'react';

const H1 = ({
  children,
  classes = '',
  style,
  center,
}) => (
  <h1 style={style} className={`${center && 'text-center max-w'} text-5xl leading-12 font-extrabold text-gray-900 ${classes}`}>
    {children}
  </h1>
)

export default H1;
