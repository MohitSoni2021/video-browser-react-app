import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import VideoDetailCardComponent from './VideoDetailCard'
import axios from "axios";
import { CirclesWithBar } from 'react-loader-spinner';

const MainPlaygroundComponent = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [videoDetails, setVideoDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const API_KEY = "AIzaSyDO2qMZdlpyEUkZ9nthdmGho9Q_6hZem3o";


    const searchVideos = async () => {
    
    
    
        if (!searchQuery) return;
    
        setLoading(true);
        setError(null);
    
        try {
          // First, search for videos based on the query
          const searchResponse = await axios.get(
            `https://www.googleapis.com/youtube/v3/search`, {
              params: {
                part: "snippet",
                q: searchQuery,
                type: "video",
                maxResults: 20,
                key: API_KEY,
              },
            }
          );
    
          // Extract video IDs from the search results
          const videoIds = searchResponse.data.items.map(item => item.id.videoId);
    
          // Now, fetch detailed information about the videos using the video IDs
          const videosResponse = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos`, {
              params: {
                part: "snippet,statistics,contentDetails",
                id: videoIds.join(","),
                key: API_KEY,
              },
            }
          );
    
          // Set the video details in the state
          setVideoDetails(videosResponse.data.items);
          console.log(videosResponse.data.items)
        } catch (err) {
          setError("Something went wrong while fetching video details.");
          console.error(err);
        } finally {
          setLoading(false);
        }
    
    
        
      };



 useEffect(()=>{
    setSearchQuery("latest");
    searchVideos();
    setSearchQuery("")
 }, [])


  return (
    <div className='bg-gray-700 w-full flex flex-col gap-7 '>

        <div className="flex justify-center p-2 bg-gray-800">
            <div className="flex text-white bg-gray-600 items-center p-3 rounded-lg">
                <input type="text" name="" className='bg-transparent outline-none min-w-80' id="" 
                    value={searchQuery}
                    onChange={(e)=>{setSearchQuery(e.target.value)}}
                />
                <BiSearch className='text-2xl cursor-pointer'
                    onClick={searchVideos}
                />
            </div>
        </div>

        <div className="p-3 overflow-y-scroll h-full flex flex-wrap gap-5 justify-center">
            <div className=' flex-wrap flex gap-5 justify-center'>
                {
                    videoDetails.map((video, i)=>{
                        return(
                            <VideoDetailCardComponent 
                                key={i}
                                thumbnailImage={video.snippet.thumbnails.standard.url}
                                title={video.snippet.localized.title}
                                channelName={video.snippet.channelTitle}
                                viewCount={video.statistics.viewCount}
                                viewId={video.id}
                                etag={video.etag}
                            />
                        )
                    })
                }

                {
                    (loading)?
                    <CirclesWithBar
                        height="100"
                        width="100"
                        color="#4fa94d"
                        outerCircleColor="#4fa94d"
                        innerCircleColor="#4fa94d"
                        barColor="#4fa94d"
                        ariaLabel="circles-with-bar-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                    :
                    ""
                }
            </div>
        </div>
      
    </div>
  )
}

export default MainPlaygroundComponent
