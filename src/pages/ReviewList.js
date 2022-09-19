import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'




const ReviewList = () => {

const [books, setBooks] = useState([])
console.log(books)

useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const BASE_URL = process.env.REACT_APP_URL + `/overview.json?${API_KEY}`
    console.log(BASE_URL)
    fetch(BASE_URL)
    .then((res) => res.json())
    .then((json) => {
        setBooks(json.results.lists)
        console.log(books)
    })
    .catch(console.error)  
},[])

console.log(books)
if(!books) {
    return <p>Loading book information...</p>
}
    return(
        <div className='ReviewList-Page'>
            {books.map((book,idx) => {
                return(
                    <div className='review-list'>
                         <Link to={`/lists/${book.list_name_encoded}`} key={book.list_name_encoded}>

                        {/* <img
                            src={book.books.book_image}
                            alt={book.books.title}
                        /> */}
                       
                        {book.display_name}
                        </Link>
                    </div>
                    
                   
                )
            })}
        </div>
    )
}

export default ReviewList;