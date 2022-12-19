import BookList from "../pages/BookList";
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Image from './Image'
import ListName from './ListName'

const List = (props) => {
    return(
        <div className='ReviewList-Page'>
            {props.books.map((book,idx) => {
                return(
                    <div className = 'review-list'>
                        <ListName book={book}/>
                        <Image book={book}/>
                    </div>
                )
            })}
        </div>
   )
};



export default List;

