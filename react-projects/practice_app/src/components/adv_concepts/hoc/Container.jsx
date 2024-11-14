import React from 'react'
import { Counter } from './Counter'
import RedHoc from './RedHoc'

const Container = () => {
  return (
    <div className='m-4'>
        <RedHoc newHoc={Counter} />
        <Counter />
    </div>
  )
}

export default Container