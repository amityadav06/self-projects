import { useEffect, useState } from "react";


const [comment, setComment] = useState([]);
const [showShimmer, setShowShimmer] = useState(true)


useEffect(() => {
    fetchComment();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
},[])

const handleScroll = () => {
    // window.scrollY - how much we have scrolled the document
    // window.innerHeight - height of page which is visible to us
    // document.body.scrollHeight = total height of the web page
    if(window.scrollY + window.innerHeight >= document.body.scrollHeight){
        fetchComment()
    }
}


const fetchComment = async () => {
    setShowShimmer(true)
    const res = await fetch('url');
    const data = await res.json();
    setShowShimmer(false)
    setComment((prev) => [...prev, ...data]);
}