import './Signup.scss'
import Happyhour from '../../assets/images/signup.png'
import { Link } from 'react-router-dom';

export default function Signup (){
    return(
        <div className='signup'>
        <div className='signup__form-container'>
            <form className='signup__form'>
                <h3 className='signup__title'>Sign Up</h3>
                <label for='name'>Name</label>
                <input type='text' name='name'/>
                <label for='email'>Email</label>
                <input type='email' name='email' />
                <label for='password'>Password</label>
                <input type='password' name='password' />
                <button className='signup__form-button' type='submit'>Sign Up</button>
                <p className='signup__form--login'>Already have account? <Link to='/sign-in'>Sign In</Link></p>
            </form>
        </div>
        <div className='signup__header'>
            <h1 className='signup__header--title'> Tipsy</h1>
            <img className='signup__header--img' src={Happyhour} alt='martini'/>
            <p className='signup__header--slogan'>Unwind in 3..2..1.. </p>
            
        </div>
        </div>
    )
}