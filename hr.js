import React from 'react';

const Hr = ({
  lineStyle,
  copyStyle,
  lineClasses = '',
  copyClasses = '',
  copy,
}) => (
  <div className="relative">
    <div className="absolute inset-0 flex items-center">
      <div style={lineStyle} className={`${lineClasses} w-full border-t border-gray-300`}></div>
    </div>
    {copy && (
      <div className="relative flex justify-center text-sm leading-5">
        <span style={copyStyle} className={`${copyClasses} px-2 bg-white text-gray-500`}>
          OR
        </span>
      </div>
    )}
  </div>
)

export default Hr;
