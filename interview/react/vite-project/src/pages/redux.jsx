import React, { useEffect } from 'react'
import { getCartItems } from '../features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import CartContainer from '../components/cart/CartContainer'
import { calculateTotals } from '../features/cart/cartSlice'

const ReduxPage = () => {
    const {cartItems, isLoading} = useSelector((store) => store.cart )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(calculateTotals())
    }, [cartItems])

    useEffect(() => {
        dispatch(getCartItems())
    }, [])
    
  return (
    <div>
        <CartContainer />
    </div>
  )
}

export default ReduxPage