import React, { useEffect, useRef, useState } from 'react'

const OtpInputForm = ({ length, onOtpSubmit }) => {
    const [otp, setOtp] = useState(new Array(length).fill(''))
    const inputRefs = useRef([])

    const handleChange = (index, e) => {
        const value = e.target.value;

        if(isNaN(value)) return;
        const newOtp = [...otp];
        // allow only one input
        newOtp[index] = value.substring(value.length - 1)
        setOtp(newOtp)
        // onSubmitOtp trigger
        const combineOtp = newOtp.join('')
        if(combineOtp.length === length){
            onOtpSubmit(combineOtp)
        }

        // move to next input if current input is field
        if(value && index < length - 1 && inputRefs.current[index + 1]){
            inputRefs.current[index + 1].focus()
        }
    }

    // const handleClick = () => {
    //     // optional
    //     if(index > 0 && !otp[index - 1]){
    //         inputRefs.current[otp.indexOf('')].focus()
    //     }
    // }

    const handleKeyDown = (index, e) => {
        if(e.key === 'Backspace' && !otp[index] && index > 0 && inputRefs.current[index - 1]){
            inputRefs.current[index - 1].focus()
        }
    }

    useEffect(() => {
        inputRefs.current[0].focus()
    },[])

  return (
    <div className='otp-input-container'>
        {otp.map((value, index) => {
            return(
                <input
                    key={index}
                    type='texts'
                    value={value}
                    ref={(input) => inputRefs.current[index] = input}
                    onChange={(e) => handleChange(index,e)}
                    // onClick={() => handleClick(index)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className='otp-input'
                />
            )
        })}
    </div>
  )
}

export default OtpInputForm