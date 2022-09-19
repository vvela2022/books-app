import {useState, useEffect} from 'react'
import {useParams} from 'react-router'
import {Link} from 'react-router-dom'


const BookList = () => {

const [books, setBooks] = useState([])
const {id} = useParams()
const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = process.env.REACT_APP_URL + `/current/${id}.json?${API_KEY}`
console.log(BASE_URL)

const getData = async () => {
    try{
        const response = await fetch(BASE_URL)
        const data = await response.json();
        console.log(data)
        setBooks(data.results.books)
    } catch (err){
        console.log(err)
    }
}

useEffect(() => {
    getData();
}, [])

console.log(books)
if(!books) {
    return <p>Loading book information....</p>
}
    return(
        <div className='Book-list'>
            {books.map((book, idx) => {
                return(
                    <div className='Book-list-container'>
                        <Link to={`/details/${book.primary_isbn13}`}>
                        <h4>{book.title}</h4>
                        </Link>
                        <p>Author: {book.author}</p>
                        <p>NY Times Ranking: {book.rank}</p>
                        <img
                        src={book.book_image}
                        alt={book.title}
                        />
                        <p>Overview: {book.description}</p>
                       
                    </div> 
              
                )
            })}
        </div>
    )
}

export default BookList;