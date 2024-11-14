import React, { useState } from 'react'
import OtpInputForm from './OtpInputForm'
import './otp.css'

const OTPContainer = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [showOtp, setShowOtp] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const regex = /[^0-9]/g;
        if(phoneNumber.length < 10 || regex.test(phoneNumber)){
            alert('Invalid Phone Number')
            return;
        }
        setShowOtp(true)
    }

    const handleOtpSubmit = (otp) => {
        console.log('OTP sent successfully')
    }

  return (
    <div className='otp-container'>
        <h2>Login with Phone</h2>
        {!showOtp ? <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                maxLength={10}
                placeholder='Enter phone number'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button type='submit'>Send OTP</button>
        </form>
        :
        <div>
            <h2>Enter OTP sent to {phoneNumber}</h2>
            <OtpInputForm
                length={4}
                onOtpSubmit={handleOtpSubmit}
            />
        </div>    
    }
    </div>
  )
}

export default OTPContainer