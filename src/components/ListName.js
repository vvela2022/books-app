import {Link} from 'react-router-dom'

const ListName = (props) => {
    return(
        <div className='list-name'>
            <h4>{props.book.display_name}</h4>
            <Link to={`/lists/${props.book.list_name_encoded}`} key={props.book.list_name_encoded}>
                <h4>View Full List</h4>
            </Link>
        </div>
    )
}

export default ListName

