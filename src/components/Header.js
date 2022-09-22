import Nav from "./Nav";

const Header = () => {
    return(
    <div className='Header'>
        <div className='header-main'>
            <div className= 'content-main'>
                <h1>Books2Read</h1>
                <p>A place to browse the NY times best-seller lists and decide what to read next. </p>
            </div>
        </div>
        <Nav />
    </div>
  
    )
};

export default Header;