import BookList from "../pages/BookList";
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Image from './Image'

const List = (props) => {
    return(
        <div className='ReviewList-Page'>
            <h3>NY Times Best Seller Lists</h3>
            {props.books.map((book,idx) => {
                return(
                    <div className = 'reviewList'>
                        <div className='list-name'>
                        <h4>{book.display_name}</h4>
                        <Link to={`/lists/${book.list_name_encoded}`} key={book.list_name_encoded}>
                        <h4>View Full List</h4>
                        </Link>
                     </div>
                     <Image book={book}/>
                    </div>
                )
            })}
        </div>
   )
};



export default List;

