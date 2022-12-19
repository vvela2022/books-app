import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import List from "../components/List"
import Image from "../components/Image"




const ReviewList = () => {

const [books, setBooks] = useState([])
// console.log(books)

useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const BASE_URL = process.env.REACT_APP_URL + `/overview.json?${API_KEY}`
    // console.log(BASE_URL)
    fetch(BASE_URL)
    .then((res) => res.json())
    .then((json) => {
        setBooks(json.results.lists)
        // console.log(books)
    })
    .catch(console.error)
    // eslint-disable-next-line  
},[])

// console.log(books)
if(!books) {
    return <p>Loading book information...</p>
}
    return(
        <>
        <List books={books}/>
        </>
    )
}

export default ReviewList;