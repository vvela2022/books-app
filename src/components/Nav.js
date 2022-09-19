import {Link} from 'react-router-dom'

const Nav = () => {
    return(
    <div className='Nav'>
        <Link to={'/'}>
            <p>Home</p>
        </Link> 
       
    </div>
   )
};

export default Nav;