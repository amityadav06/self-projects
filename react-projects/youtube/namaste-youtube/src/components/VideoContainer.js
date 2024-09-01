import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY } from '../constant/constant'
import { AdVideoCard, VideoCard } from './VideoCard'
import { Link } from 'react-router-dom'

export const VideoContainer = () => {
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    getVideos()
  }, [])

  const getVideos = async () =>{
    const response = await fetch(YOUTUBE_API_KEY);
    const data = await response.json();
    // console.log(data);
    setVideos(data?.items)
  }

  return (
    <div className='flex flex-wrap gap-3'>
     {videos[13] &&  <AdVideoCard info={videos[13]} />}
      {videos.map((video) => {
        return <Link key={video.id} to={'/watch?v='+video.id}>
                <VideoCard info={video} />
              </Link>
      })}
    </div> 
  )
}
