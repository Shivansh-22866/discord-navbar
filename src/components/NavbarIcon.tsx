import React from 'react'

function NavbarIcon({icon, text = 'tooltip 💡'}: any) {
  return (
    <div className='sidebar-icon group'>
        {icon}

        <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
    </div>
  )
}

export default NavbarIcon