import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'




const Books = () => {

const [books, setBooks] = useState([])
console.log(books)

useEffect(() => {
    const BASE_URL = process.env.REACT_APP_URL
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
        <div className='Books-Page'>
            {books.map((book,idx) => {
                return(
                    <div className='card-image'>
                         <Link to={`/booklist/${book.list_id}`} key={book.list_id}>

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

export default Books;