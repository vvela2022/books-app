import {Routes, Route} from 'react-router-dom'
import Books from '../pages/ReviewList'
import Show from '../pages/BookList'
import BookDetails from '../pages/BookDetails'

const Main = (props) => {
    return(
        <main>
            <Routes>
                <Route path='/' element={<Books />}/>
                <Route path='/lists/:id' element={<Show />}/>
                <Route path='/details/:isbn' element={<BookDetails />}/>
            </Routes>
        </main>
    )


};

export default Main;




//console.log(props.bookData.results.books) this is how to access book data
//  const findBook = props.bookData.results.books
//  console.log(findBook)
 
//     return(
//         <main>
//             {findBook.map((books, idx) => {
//                return(
//                     <Book img={books.book_image}/>
//               ) 
//             })}
//         </main>
  
//     )