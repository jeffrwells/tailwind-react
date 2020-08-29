import React from 'react';

const Grid = ({
  classes = '',
  children,
  columns = 1,
  gap = 1
}) => (
  <div className={`grid grid-cols-${columns} gap-${gap} ${classes}`}>
    {children}
  </div>
)

export default Grid;
