import React, { useEffect, useState } from 'react'
import Accordion from './Accordion'

const pract = () => {
    const [data, setData] = useState([])
    const [showItem, setShowItem] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        const response = await fetch("https://dummyjson.com/users");
        const jsonData = await response.json();
        console.log(jsonData.users);
        setData(jsonData.users)
    }

  return (
    <div>
        {data.map((item, index) => {
            return (
                <Accordion
                    data={item}
                    key={data.id}
                    showItem={index === currentIndex ? true : false}
                    setCurrentIndex={() => setCurrentIndex(index)}
                />
            )
        })}
    </div>
  )
}

export default pract