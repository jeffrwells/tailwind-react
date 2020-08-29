import React from 'react';

const A = ({
  children,
  classes = '',
  style,
  href
}) => (
  <a href={href} style={style} className={`font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150 ${classes}`}>
    {children}
  </a>
)

export default A;
