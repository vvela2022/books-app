import {Routes, Route} from 'react-router-dom'
import Books from '../pages/Books'
import Show from '../pages/Show'

const Main = (props) => {
    return(
        <main>
            <Routes>
                <Route path='/' element={<Books />}/>
                <Route path='/booklist/:id' element={<Show />}/>
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