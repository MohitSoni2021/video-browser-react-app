import React from 'react'
import { NavLink } from 'react-router-dom'

const VideoDetailCardComponent = ({thumbnailImage, title, channelName, viewCount, viewId, etag}) => {
  return (
    <NavLink to={`/video/${viewId}`}>

        <div className='max-w-96 p-2 rounded-lg bg-gray-600 flex flex-col gap-2 cursor-pointer hover:scale-105 transition-all duration-150'>
            <div className=" max-w-96 rounded-md overflow-hidden relative">
                <img src={thumbnailImage} alt="" />
                <span className='bg-gray-800 absolute bottom-1 shadow-inner shadow-white/30 opacity-90 right-1 text-white text-sm p-1 rounded-md'>34:40</span>
            </div>
            <div className="flex flex-col">
                <h1 className="line-clamp-2 text-white">
                    {title}
                </h1>
                <div className="text-gray-400 text-sm">
                    {channelName}
                </div>
                <div className="text-gray-400 text-sm">
                    View : {viewCount}
                </div>
            </div>
        </div>

    </NavLink>
  )
}

export default VideoDetailCardComponent
