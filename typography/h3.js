import React from 'react';

const H3 = ({
  children,
  classes = '',
  style,
  center,
}) => (
  <h3 style={style} className={`${center && 'text-center max-w'} text-xl leading-7 font-medium text-gray-900 ${classes}`}>
    {children}
  </h3>
)

export default H3;
