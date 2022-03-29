import './Header.scss'
import { Link } from 'react-router-dom';


export default function Header (){
    return(
        <nav>
            <h1>Tipsy</h1>
            <img src='' alt=''/>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/featured'><li>Featured</li></Link>
                <Link to='/submissions'><li>Submissions</li></Link>
                <Link to='about-us'><li>About Us</li></Link>
                <Link to='contact-us'><li>Contact Us</li></Link>
            </ul>
                
                <button type='submit'> Log in</button>
                <button type='submit'>Sign up</button>
           
        </nav>
    )
}