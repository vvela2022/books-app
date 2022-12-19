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

