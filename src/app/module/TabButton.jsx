import React from 'react'

const TabButton = ({active, selectTab, children}) => {
  const buttonClass = active ? 'border-b-2 border-[#23467a] font-semibold' : 'font-normal'
    return (
    <span className='cursor-pointer' onClick={selectTab}>
        <p className={`font-semibold ${buttonClass}`}>
            {children}
        </p>
    </span>
  )
}

export default TabButton