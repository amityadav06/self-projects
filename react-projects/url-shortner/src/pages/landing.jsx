import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState('')
  const navigate = useNavigate()

  const handleShorten = (e) => {
    e.preventDefault()
    if(longUrl){
      navigate(`/auth?createNew=${longUrl}`)
    }
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold'>
        The only URL shortner <br /> you'll ever need!👇
      </h2>
      <form onSubmit={handleShorten} className='sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2'>
        <Input 
          value={longUrl}
          onChange={(e)=> setLongUrl(e.target.value)}
          className='h-full flex-1 px-4 py-4'
          type='url'
          placeholder='Enter your long URL'
        />
        <Button className='h-full' type='submit' variant='destructive'>
          Shorten
        </Button>
      </form>
      <img src="./banner.jpeg" alt="banner" className='w-full my-11 md:px-11' />
      <Accordion type="multiple" collapsible className='w-full md:px-11'>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae doloremque magnam assumenda error suscipit aut libero doloribus ut iusto ullam?
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>How does it work?</AccordionTrigger>
          <AccordionContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quas.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it free?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>
  )
}

export default LandingPage