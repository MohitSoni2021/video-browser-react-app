import React from 'react'
import SidebarListComponent from './SidebarList'
import { IoIosArrowDown, IoMdHome } from "react-icons/io";
import { MdOutlineExplore, MdSubscriptions, MdVideoLibrary, MdWatchLater } from 'react-icons/md';
import { SiYoutubeshorts } from 'react-icons/si';
import { FaHistory } from 'react-icons/fa';
import { AiFillVideoCamera } from 'react-icons/ai';
import { BiSolidLike } from 'react-icons/bi';

const SidebarComponent = () => {
  return (
    <div className='h-full w-fit min-w-[200px] flex flex-col gap-4 shadow-lg shadow-white bg-gray-800 text-white'>
      <div className="flex justify-center bg-white">
        <img src="https://t3.ftcdn.net/jpg/03/00/38/90/240_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg" className='h-16' alt="" />
      </div>

      <div className="">
        <SidebarListComponent 
        icons={<IoMdHome className='text-2xl' />}
        title={"Home"}
        />
        <SidebarListComponent 
        icons={<MdOutlineExplore className='text-2xl' />}
        title={"Explore"}
        />
        <SidebarListComponent 
        icons={<SiYoutubeshorts className='text-2xl' />}
        title={"Shorts"}
        />
        <SidebarListComponent 
        icons={<MdSubscriptions className='text-2xl' />}
        title={"Subscriptions"}
        />
      </div>


      <div className="border-t-2 border-gray-200">
        <SidebarListComponent 
        icons={<MdVideoLibrary  className='text-2xl' />}
        title={"Library"}
        />
        <SidebarListComponent 
        icons={<FaHistory className='text-2xl' />}
        title={"History"}
        />
        <SidebarListComponent 
        icons={<AiFillVideoCamera className='text-2xl' />}
        title={"Your Video"}
        />
        <SidebarListComponent 
        icons={<MdWatchLater className='text-2xl' />}
        title={"Watch later"}
        />
        <SidebarListComponent 
        icons={<BiSolidLike className='text-2xl' />}
        title={"Liked Videos"}
        />
        <SidebarListComponent 
        icons={<IoIosArrowDown className='text-2xl' />}
        title={"Show More"}
        />
      </div>

    </div>
  )
}

export default SidebarComponent
