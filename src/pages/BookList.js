import {useState, useEffect} from 'react'
import {useParams} from 'react-router'


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
                    <div>
                    <img
                    src={book.book_image}
                    alt={book.title}
                    />
                    </div> 
              
                )
            })}
        </div>
    )
}

export default BookList;