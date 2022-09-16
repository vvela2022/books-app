import Book from './Book'

const Main = (props) => {
//  console.log(props.bookData.results.books) this is how to access book data
 const findBook = props.bookData.results.books
 console.log(findBook)
 
    return(
        <main>
            {findBook.map((books, idx) => {
               return(
                    <Book img={books.book_image}/>
              ) 
            })}
        </main>
  
    )
};

export default Main;