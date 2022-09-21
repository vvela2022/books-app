import {useState, useEffect} from 'react'
import {useParams} from 'react-router'



const BookList = () => {
    const [books, setBooks] = useState([])
    const {id} = useParams()

useEffect(() => {
    const getData = async () => {
        try{
          
            const API_KEY = process.env.REACT_APP_API_KEY
            const BASE_URL = process.env.REACT_APP_URL + `/current/${id}.json?${API_KEY}`
            console.log(BASE_URL)
            const response = await fetch(BASE_URL)
            const data = await response.json();
            console.log(data)
            setBooks(data.results.books)
        } catch (err){
            console.log(err)
        }
    }
    getData()
    // eslint-disable-next-line
}, [])

console.log(books)

if(!books) {
    return <p>Loading book information....</p>
}
    return(
        <div className='Book-list-page'>
            {books.map((book, idx) => {
                return(
                    <div className='Book-list-container'>
                         <div class='main-image-container'>
                                <h4>{`#${book.rank} ${book.title}`}</h4>
                            <img
                            src={book.book_image}
                            alt={book.title}
                            />
                        </div>
                       
                        <div className='information'>
                            <p><span>Title:</span> {book.title}</p>
                            <p><span>Author:</span> {book.author}</p>
                            <p><span>Publisher:</span> {book.publisher}</p>
                            <p><span>NY Times Ranking: </span>{book.rank}</p>
                            <p><span>Weeks on this list:</span> {book.weeks_on_list}</p>
                            <p><span>Overview: </span>{book.description}</p>
                            <div className='buy-container'>
                                <p>Buy Here:</p>
                                <ul> 
                                    <a href={book.buy_links[0].url}>
                                    <li>{book.buy_links[0].name} |</li>
                                    </a> 
                                    <a href={book.buy_links[1].url}>
                                    <li>{book.buy_links[1].name} |</li>
                                    </a> 
                                    <a href={book.buy_links[2].url}>
                                    <li>{book.buy_links[2].name}</li>
                                    </a> 
                                </ul>
                            </div>
                        </div>
                    </div> 
              
                )
                
            })}
        </div>
    )
}

export default BookList;