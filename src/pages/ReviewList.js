import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'




const ReviewList = () => {

const [books, setBooks] = useState([])
// console.log(books)

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
    // eslint-disable-next-line  
},[])

console.log(books)
if(!books) {
    return <p>Loading book information...</p>
}
    return(
        <div className='ReviewList-Page'>
            <h3>NY Times Best Seller Lists</h3>
            {books.map((book,idx) => {
                return(
                    <div className='review-list'>
                        <div className='list-name'>
                        <h4>{book.display_name}</h4>
                         <Link to={`/lists/${book.list_name_encoded}`} key={book.list_name_encoded}>
                        <h4>View Full List</h4>
                        </Link>
                        
                        </div>
                        <div className='image-container'>
                            {book.books.map((img) => {
                                return (
                                    <img className='preview-image'src={img.book_image} alt={img.title}/>
                                )
                            })} 
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ReviewList;