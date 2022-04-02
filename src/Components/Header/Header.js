import './Header.scss'
import { NavLink, Link} from 'react-router-dom';


export default function Header (){
    return(
        <nav className='nav'>
            <h1 className='nav__title'>Tipsy</h1>
        <div className='nav__menu'>
            <NavLink className='nav__link' to='/'>Home</NavLink>
            <NavLink className='nav__link' to='/featured'>Featured</NavLink>
            <NavLink className='nav__link' to='/submission'>Submissions</NavLink>
            <NavLink className='nav__link' to='/contact'>Contact</NavLink>
            <Link className='nav__button' to='/signin'><button className='nav-button'>Sign In</button></Link>
            <Link className='nav__button' to='/signup'><button className='nav-button'>Sign Up</button></Link>
        </div>  
        </nav>
    )
}