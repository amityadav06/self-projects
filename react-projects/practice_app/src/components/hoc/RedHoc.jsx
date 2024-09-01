import React from 'react'

const RedHoc = (props) => {
  return (
    <>
        <div className='bg-red-400'>
            <props.newHoc />
        </div>
        <div className='bg-yellow-300'>
            <props.newHoc />
        </div>
    </>
  )
}

export default RedHoc