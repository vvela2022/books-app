import {useState, useEffect} from 'react'
import {useParams} from 'react-router'


const BookDetails = () => {
const [details, setDetails] = useState(null)
// console.log(details)

const {isbn} = useParams()
// const API_KEY = process.env.REACT_APP_API_KEY
const URL = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`

// const URL = process.env.REACT_APP_URL + `/current/${id}.json?${API_KEY}`
console.log(URL)

const getData = async () => {
   try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data)
        setDetails(data[`ISBN:${isbn}`])
   } catch (err) {
    console.log(err)
   }   
} 

useEffect(()=> {
    getData();
}, [])

console.log(details)
if(!details) {
    return <p>Loading book details...</p>
} 
    return(
    <div className='reviews-container'>
        <h1>Title: {details.title}</h1>
        {/* <a href={review.buy_links[0].url}><p>{review.buy_links[0].name}</p></a> */}
    </div>
    )
}

export default BookDetails