import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'



const Books = () => {

const [books, setBooks] = useState([])
console.log(books)

useEffect(() => {
    const BASE_URL = 'https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=kZKvKTZo9L930Fka6HRCZkxoTk6DK3wQ'
    console.log(BASE_URL)
    fetch(BASE_URL)
    .then((res) => res.json())
    .then((json) => {
        setBooks(json)
        console.log(books)
    })
    .catch(console.error)  
}, [])

console.log(books)

    return(
        <div className='Books-Page'>
            <h1>This is the Books page</h1>
        </div>
    )
}

export default Books;