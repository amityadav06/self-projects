import React from 'react'

export const Comment = ({data}) => {
  return (
    <div>
        {data?.map((item, index) => {
            return (
                <div key={index} className='mt-4'>
                    <div className='mb-4'>
                        <div className="flex gap-2 mb-1">
                            <img src='https://shorturl.at/jPK7Q' alt='user-img' />
                            <div className='p-2 '>{item.user}</div>
                        </div>
                        <p className='ml-16'>{item.comment}</p>
                    </div>
                    <div className=' border-l-2 border-black ml-8 pl-4'>
                        {item?.replies && <Comment data={item?.replies}/>}
                    </div>
                </div>
            )     
        })}
    </div>
  )
}
