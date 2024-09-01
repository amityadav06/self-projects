import React, { useEffect, useState } from 'react'
// import { getProducts } from '../features/product/productSlice'
// import { useDispatch, useSelector } from 'react-redux'

const url = 'https://dummyjson.com/products'
const ProductsPage = () => {
  // const dispatch = useDispatch()
  // const {isLoading, products} = useSelector((store) => store.product)
  // console.log(isLoading, products);
  const [products, setProducts] = useState([])
  
 const getProducts = async () => {
      try {
          const res = await fetch(url);
          const resJson = await res.json();
          // console.log(resJson);
          setProducts((prev) => [...prev, ...resJson.products])
          
      } catch (error) {
          console.log(error);
      }
  }


  useEffect(() => {
    // dispatch(getProducts())  
    getProducts()
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if(window.scrollY + window.innerHeight >= document.body.scrollHeight){
      // dispatch(getProducts())
      getProducts()
    }
  }

  return (
    <div className='product-wrapper'>
      {
        products.map((item) => {
          return(
            <div key={item.id}>
              <img className='product-img' src={item.images[0]} alt='images' />
            </div>
          )
        })
      }
    </div>
  )
}

export default ProductsPage