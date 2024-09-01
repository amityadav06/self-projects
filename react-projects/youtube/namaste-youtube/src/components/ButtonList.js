import React from 'react'
import { Button } from './Button'

export const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name={'All'}/>
      <Button name={'Live'}/>
      <Button name={'Trading'}/>
      <Button name={'Comedy'}/>
      <Button name={'Cooking'}/>
      <Button name={'Entertainment'}/>
      <Button name={'Sports'}/>
      <Button name={'Forest'}/>
    </div>
  )
}
