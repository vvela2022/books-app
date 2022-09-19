import {useState, useEffect} from 'react'
import {useParams} from 'react-router'


const BookList = () => {

const [books, setBooks] = useState([])
const {id} = useParams()
const API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = process.env.REACT_APP_URL + `/current/${id}.json?${API_KEY}`
// const BASE_URL = `http://api.nytimes.com/svc/books/v3/lists/current/${id}.json?api-key=kZKvKTZo9L930Fka6HRCZkxoTk6DK3wQ`
console.log(BASE_URL)

const getData = async () => {
    try{
        const response = await fetch(BASE_URL)
        const data = await response.json();
        console.log(data)
        setBooks(data)
    } catch (err){
        console.log(err)
    }
}

useEffect(() => {
    getData();
}, [])

console.log(books)
    return(
        <div className='Book-list'>
            <h1>Book List Page</h1>
        </div>
    )
}

export default BookList;