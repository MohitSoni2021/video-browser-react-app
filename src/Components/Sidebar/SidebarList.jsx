import React from 'react'

const SidebarListComponent = ({icons, title, bg}) => {
  return (
    <div className={`flex gap-3 p-2 w-full ${bg} items-center text-lg hover:bg-gray-950 cursor-pointer`}>
      {icons}{title}
    </div>
  )
}

export default SidebarListComponent
