import React from 'react'
import { useParams } from 'react-router-dom'

const VideoDetailPage = () => {

    const { videoId } = useParams()

  return (
    <div className='p-5'>
      <iframe 
        className='w-8/12 aspect-video rounded-xl'
       src={`https://www.youtube.com/embed/${videoId}?si=ZZvD8-x-vYgZIOjP`}
       title="YouTube video player" 
       frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
       allowFullScreen>

       </iframe>
    </div>
  )
}

export default VideoDetailPage
