import {Routes, Route} from 'react-router-dom'
import Books from '../pages/ReviewList'
import Show from '../pages/BookList'


const Main = () => {
    return(
        <main>
            <Routes>
                <Route path='/' element={<Books />}/>
                <Route path='/lists/:id' element={<Show />}/>
            </Routes>
        </main>
    )


};

export default Main;



