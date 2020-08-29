import React from 'react';

const H4 = ({
  children,
  classes = '',
  style,
  center,
}) => (
  <h4 style={style} className={`${center && 'text-center max-w'} text-lg leading-6 font-medium text-gray-900 ${classes}`}>
    {children}
  </h4>
)

export default H4;
