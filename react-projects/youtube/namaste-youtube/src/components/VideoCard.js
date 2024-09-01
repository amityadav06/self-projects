import React, { useEffect } from 'react'

export const VideoCard = ({info}) => {
    // console.log(info);
    const {snippet} = info;
    const {channelTitle, title, thumbnails} = snippet;

  return (
    <div className='p-2 pb-0 m-1 w-72 h-full shadow-lg'>
        <img className='rounded-xl' src={thumbnails.medium.url} alt={title} />
        <ul>
            <li className='font-bold my-1'>{title}</li>
            <li>{channelTitle}</li>
        </ul>
    </div>
  )
}

export const AdVideoCard = ({info}) => {
    return(
        <div className='p-2 m-2 border border-red-900'>
            <VideoCard info={info} />
        </div>
    )
}
