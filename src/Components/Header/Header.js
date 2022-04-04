import './Header.scss'
import { NavLink, Link} from 'react-router-dom';


export default function Header (){
    return(
        <nav className='nav'>
        <Link to='/'><img className='nav__image' src={require('../../assets/images/tipsy-logo.jpeg')} alt='logo'/></Link>
            
        <div className='nav__menu'>
            <NavLink className='nav__link' to='/'>Home</NavLink>
            <NavLink className='nav__link' to='/featured'>Featured</NavLink>
            <NavLink className='nav__link' to='/submission'>Submissions</NavLink>
            <NavLink className='nav__link' to='/contact'>Contact</NavLink>
            {/* <p>Welcome, Cesar your points balance is 0.00</p> */}
            {/* <Link className='nav__button' to='/signin'><button className='nav-button'>Sign In</button></Link> */}
            <Link className='nav__button' to='/signin'><button className='nav-button'>Sign Out</button></Link>
        </div>  
        </nav>
    )
}