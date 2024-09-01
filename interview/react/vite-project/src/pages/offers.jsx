import React, { useEffect, useState } from 'react'

const LIMIT = 10;
const OffersPage = () => {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [text, setText] = useState('')

  useEffect(()=> {
    fetchProducts()
  }, [currentPage])


  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${currentPage * LIMIT}&select=title,price,images`);
    const resJson = await res.json();
    // console.log(resJson);
    setProducts(resJson.products)
    setTotalPages(Math.floor(resJson.total / LIMIT))
  }

  return (
    <>
    <input type='text' placeholder='search' value={text} onChange={(e) => setText(e.target.value)} />
    
      <div className='product-wrapper'>
        {
          products.filter((val) => {
            if(text === ''){
              return val;
            }else if(val.title.toLowerCase().includes(text.toLowerCase())){
              return val;
            }
          }).map((item) => {
            return(
              <div key={item.id}>
                <img className='product-img' src={item.images[0]} alt='images' />
                <p>{item.title}</p>
              </div>
            )
          })
        }
      </div>
      <button onClick={() => setCurrentPage((currentPage) => currentPage - 1)}>prev</button>
      {
        [...Array(totalPages).keys()].map((_, index) => {
          return(
              <button key={index} onClick={() => setCurrentPage(index)}>{index + 1}</button>
          )
        })
      }
      <button onClick={() => setCurrentPage((currentPage) => currentPage + 1)}>next</button>
      </>
  )
}

export default OffersPage