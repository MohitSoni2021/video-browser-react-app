import React from 'react'
import SidebarComponent from './Sidebar/Sidebar'
import MainPlaygroundComponent from './MainGround/MainPlayground'

const PlaygroundComponent = () => {
  return (
    <div className='flex h-screen'>
        <SidebarComponent />
        <MainPlaygroundComponent />
      
    </div>
  )
}

export default PlaygroundComponent
