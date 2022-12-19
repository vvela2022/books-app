const Image = (props) => {
    return(
        <div className = 'image-container'>
            {props.book.books.map((img) => {
                return(
                    <img className= "preview-image" src={img.book_image} alt={img.title}/>
                )
})}
        </div>
        
    )
}

export default Image

