import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Input } from './ui/input'
import { Button } from './ui/button'
import { BeatLoader } from 'react-spinners'
import Error from './Error'
import useFetch from '@/hooks/use-fetch'
import { signUp } from '@/db/apiAuth'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { UrlState } from '@/context'
  
const Signup = () => {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        profile_pic: null
    })
    const {data, loading, error, fn: fnSignup } = useFetch(signUp, formData);
    const { fetchUser } = UrlState()
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const longLink = searchParams.get('createNew');

    useEffect(()=> {
        if(error === null && data){
            navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ''}`)
            fetchUser();
        }
    },[loading, error])

    const handleInputChange = (e) => {
        const {name, value, files} = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: files ? files[0] : value,
        }))
    }


    const handleSignup = async () => {
        setErrors([])
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required("Name is required"),
                email: Yup.string().email('Invalid Email').required("Email is required"),
                password: Yup.string().min(6, 'Password must be at least 6 characters').required("Password is required"),
                profile_pic: Yup.mixed().required("Profile Picture is required"),
            })
            await schema.validate(formData, {abortEarly: false})
            await fnSignup();
        } catch (e) {
            const newError = {};

            e?.inner?.forEach((err)=> {
                newError[err.path] = err.message;
            });
            setErrors(newError)
        }
    }

  return (
    <Card>
        <CardHeader>
            <CardTitle>Signup</CardTitle>
            <CardDescription>
                Create a new account if you haven't yet.
            </CardDescription>
            {error && <Error message={error.message} />}
        </CardHeader>
        <CardContent className='space-y-2'>
            <div className='space-y-1'>
                <Input onChange={handleInputChange} name='name' type='name' placeholder='Enter Name' />
                {errors.name && <Error message={errors.name} />}
            </div>
            <div className='space-y-1'>
                <Input onChange={handleInputChange} name='email' type='email' placeholder='Enter Email' />
                {errors.email && <Error message={errors.email} />}
            </div>
            <div className='space-y-1'>
                <Input onChange={handleInputChange} name='password' type='password' placeholder='Enter password' />
                {errors.password && <Error message={errors.password} />}
            </div>
            <div className='space-y-1'>
                <Input onChange={handleInputChange} name='profile_pic' type='file' accept='image/*' />
                {errors.profile_pic && <Error message={errors.profile_pic} />}
            </div>
        </CardContent>
        <CardFooter>
            <Button onClick={handleSignup}>
                {loading ? <BeatLoader size={10} color='#36d7b7' /> : 'Create Account'}
            </Button>
        </CardFooter>
    </Card>

  )
}

export default Signup