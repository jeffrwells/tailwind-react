import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import useClickOutside from '../utils/use-click-outside'

const TextMenuDropdownWithTrigger = ({ trigger, items }) => {
  const [visible, setVisible] = useState(false);
  const dropdownRef = useRef(null);

  const handleTriggerClick = (e) => {
    setVisible(visibility => !visibility);
  }

  const onClose = (e) => {
    setVisible(false);
  }

  const handleItemClick = (item) => {
    item.onClick();
    if (!item.keepOpenOnClick) {
      setVisible(false);
    }
  }

  useClickOutside(dropdownRef, onClose);

  return (
    <div ref={dropdownRef} className="relative my-auto">
      <div className='cursor-pointer' onClick={handleTriggerClick}>
        {trigger}
      </div>
      {visible &&
        (<div className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-md shadow-lg">
          <div className="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
            {items.map((item, i) => {
              if(item.routerLink) {
                return (
                  <Link to={item.routerLink}>
                    <a key={i} className="block cursor-pointer px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">{item.label}</a>
                  </Link>
                )
              }

              if (item.onClick) {
                return <a onClick={() => handleItemClick(item)} key={i} className="block cursor-pointer px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">{item.label}</a>
              }

              return <a target='_blank' href={item.href} key={i} className="block cursor-pointer px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">{item.label}</a>
            }
          )}
          </div>
        </div>
      )}
    </div>
  );

}

export default TextMenuDropdownWithTrigger;
