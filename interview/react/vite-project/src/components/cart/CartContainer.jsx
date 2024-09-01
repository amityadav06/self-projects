import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems'
import { useDispatch } from 'react-redux';
import { clearCart } from '../../features/cart/cartSlice'

const CartContainer = () => {
    const {total, amount, cartItems} = useSelector((store) => store.cart)
    const dispatch = useDispatch()
  return (
    <section className='cart'>
        <header>
            <h2>Your bag</h2>
        </header>
        <div>
            {cartItems.map((item) => {
                return <CartItems key={item.id} data={item} />
            })}
        </div>
        <footer>
            <br />
            <div className="cart-total">
                <h4>
                    total <span>{total.toFixed(2)}</span>
                </h4>
            </div>
            <button 
                onClick={() => dispatch(clearCart())}
                className="btn"
            >
                Clear cart
            </button>
        </footer>
    </section>
  )
}

export default CartContainer