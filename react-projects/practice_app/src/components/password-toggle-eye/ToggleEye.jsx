import React, { useState } from 'react'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'

const ToggleEye = () => {
    const [password, setPassword] = useState(true)

    const toggleEyeFun = () => {
        setPassword(!password)
    }
  return (
    <div className="relative">
        <input 
            type={password ? 'password' : 'text'} 
            placeholder='password'
            className="pl-3 pr-12 py-2 border border-gray-300 rounded-md w-full"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
            {password ? <BsEyeSlashFill onClick={toggleEyeFun} /> : <BsEyeFill onClick={toggleEyeFun} />}
        </div>
    </div>
  )
}

export default ToggleEye