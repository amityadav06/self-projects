import React from 'react'
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {removeItem, increase, decrease} from '../../features/cart/cartSlice'

const CartItems = (data) => {    
    const {id, img, title, price, amount } = data?.data
    const dispatch = useDispatch()

  return (
    <article className='cart-item'>
        <img src={img} alt={title} />
        <div>
            <h4>{title}</h4>
            <h4>{price * amount}</h4>
            <button onClick={() => dispatch(removeItem(id))}>
                remove
            </button>
        </div>
        <div>
            <button
                className='amount-btn'
                onClick={()=> {
                    dispatch(increase(id))
                }}
            >
                <FaChevronUp />
            </button>
            <p>{amount}</p>
            <button
                className='amount-btn'
                onClick={() => {
                    if(amount === 1){
                        dispatch(removeItem(id))
                        return;
                    }else{
                        dispatch(decrease(id))
                    }
                }}
            >
                <FaChevronDown />
            </button>
        </div>
    </article>
  )
}

export default CartItems