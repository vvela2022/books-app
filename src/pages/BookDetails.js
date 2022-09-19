// import {useState, useEffect} from 'react'
// import {useParams} from 'react-router'


// const BookDetails = (props) => {
// const [details, setDetails] = useState(null)
// // console.log(details)

// const {id} = useParams()
// const API_KEY = process.env.REACT_APP_API_KEY
// const URL = `https://api.nytimes.com/svc/books/v3/reviews/${id}.json?${API_KEY}`

// // const URL = process.env.REACT_APP_URL + `/current/${id}.json?${API_KEY}`
// console.log(URL)

// const getData = async () => {
//    try {
//         const response = await fetch(URL);
//         const data = await response.json();
//         console.log(data)
//         setDetails(data.results)
//    } catch (err) {
//     console.log(err)
//    }   
// } 

// useEffect(()=> {
//     getData();
// }, [])

// console.log(details)
// if(!details) {
//     return <p>Loading book details...</p>
// } 
//     return(
//     <div className='reviews-container'>
//         {details.map((review) => {
//             return(
//                 <div className='review-content'>
//                 <h1>Reviews for: {review.book_title}</h1>
//                 <p>{review.summary}</p>
//                 {/* <a href={review.buy_links[0].url}><p>{review.buy_links[0].name}</p></a> */}
//                 </div>
//             )
//         })}
          
//     </div>
//     )
// }

// export default BookDetails