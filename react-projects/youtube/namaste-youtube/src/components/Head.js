import React, { useEffect, useState } from 'react'
import {MENU_ICON, YOUTUBE_LOGO, USER_ICON, YOUTUBE_SEARCH_API} from '../constant/constant'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { cacheResults } from '../utils/searchSlice'

export const Head = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false)
    const searchCache = useSelector((store) => store.search)
    const dispatch = useDispatch()

    useEffect(()=>{
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSuggestions(searchCache[searchQuery])
            }else{
                getSearchSuggestions()
            }
        }, 200);

        return () => {
            clearTimeout(timer)
        }
    }, [searchQuery])

    const getSearchSuggestions = async() => {
        const response = await fetch(YOUTUBE_SEARCH_API+searchQuery)
        const data = await response.json()
        setSuggestions(data[1])

        // update cache
        dispatch(cacheResults({
            [searchQuery] : data[1]
        }))

    }

    const toggleMenuHandler = () =>{
        dispatch(toggleMenu())
    }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
            <img onClick={() => toggleMenuHandler()} className='h-9 cursor-pointer' alt='menu-icon' src={MENU_ICON} />
            <a href='/'>
                <img className='h-8 mx-2' alt='youtube-logo' src={YOUTUBE_LOGO} />
            </a>
        </div>
        <div className='col-span-10 px-10'>
            <div>
                <input 
                    className='input w-1/2 border border-gray-400 py-2 px-4 rounded-l-full' 
                    type='text'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestion(true)}
                    onBlur={() => setShowSuggestion(false)}
                />
                <button className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>Search</button>
            </div>
            {showSuggestion &&  <div className='fixed py-2 px-2 bg-white w-[31.5rem] shadow-lg rounded-lg border border-gray-100'>
                <ul>
                    {
                        suggestions?.map((item) => {
                            return(
                                <li className='flex gap-2 pl-1 items-center py-1 shadow-sm hover:bg-gray-200' key={item}>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 50 50">
                                        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                                    </svg>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>}
        </div>
        <div className='col-span-1'>
            <img className='h-8' alt='user-icon' src={USER_ICON} />
        </div>
    </div>
  )
}
