import React from 'react'
import { USER_ICON } from '../constant/constant'

export const Comment = ({data}) => {
    const {name, text, replies} = data
  return (
    <div className='flex bg-gray-100 shadow-md my-3 p-2 rounded-lg'>
        <img
            className='w-12 h-12 rounded-full'
            src={USER_ICON}
            alt='user'
        />
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}
