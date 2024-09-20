import React, { useEffect, useState } from 'react'

const ProductsList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchItem, setSearchItem] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [categoryFilter, setCategoryFilter] = useState('All')

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const resJson = await response.json();
                console.log(resJson);
                setProducts(resJson)
            } catch (error) {
                setError('Unable to fetch products')
            }finally{
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    const categories = [
        ...new Set(products.map((product) => product.category)),
        'All'
    ]

    const filteredProducts = products
        .filter((product) => {
            product.title.toLowerCase().includes(searchItem.toLowerCase()) && categoryFilter === 'All' || categoryFilter === product.category
        }).sort((a, b) => {
            sortOrder === 'asc' ? a.price - b.price : b.price - a.price
        })


  return (
    <div>
        <h3>Product List</h3>

        <input
            placeholder='Search Products'
            type='search'
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
        />

        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            {categories.map((category) => {
                return (
                    <option value={category} key={category}>{category}</option>
                )
            })}
        </select>

        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value='asc'>Sort by Price (LOw to high)</option>
            <option value="desc">Sort by Price (High to low)</option>
        </select>

        {
            products.map((product) => {
                return (
                    <div key={product.id} className="product-card">
                        <h2>{product.title}</h2>
                        <p>Price: ${product.price}</p>
                        <img
                            src={product.image}
                            alt={product.title}
                            style={{ width: "100px" }}
                        />
                    </div>
                )
            })
        }
    </div>
  )
}

export default ProductsList