import React from 'react';

const AuthIconButton = ({
  children,
  classes = '',
  style,
  href,
  icon,
  copy,
  fullWidth,
  disabled,
  onClick
}) => (
  <div>
    <span className={`${fullWidth && 'w-full'} inline-flex rounded-md shadow-sm`}>
      <button
        onClick={onClick}
        disabled={disabled}
        type="button"
        style={style}
        className={`${fullWidth && 'w-full'} inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out ${classes}`}
        aria-label={copy}>
          {icon}
          <span className="text-gray-700">{copy}</span>
      </button>
    </span>
  </div>
)

export default AuthIconButton;
