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
                        <img className='preview-image'src={book.books[0].book_image} alt={book.books[0].title}/>
                        <img className='preview-image'src={book.books[1].book_image} alt={book.books[1].title}/>
                        <img className='preview-image'src={book.books[2].book_image} alt={book.books[2].title}/>
                        <img className='preview-image'src={book.books[3].book_image} alt={book.books[3].title}/>
                        <img className='preview-image'src={book.books[4].book_image} alt={book.books[4].title}/>
                    </div>
                    
                   
                )
            })}
        </div>
    )
}

export default ReviewList;