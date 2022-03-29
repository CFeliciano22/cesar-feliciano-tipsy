import './Signin.scss'
import { Link } from 'react-router-dom'
import Martini from '../../assets/images/happyhour.png'
export default function Signin(){
    return(
        <div className='login'>
        <div className='login__header'>
            <h1 className='login__header--title'> Tipsy</h1>
            <img className='login__header--img' src={Martini} alt='martini'/>
            <p className='login__header--slogan'>Cold drinks, Great food, Good vibes</p>
            
        </div>
        <div className='login__form-container'>
            <form className='login__form'>
                <h3 className='login__title'>Sign In</h3>
                <label for='email'>Email</label>
                <input type='email' name='email' />
                <label for='password'>Password</label>
                <input type='password' name='password' />
                <button className='login__form-button' type='submit'>Sign In</button>
                <p className='login__form--signup'>Dont have account? <Link to='/sign-up'>Sign Up</Link></p>
            </form>
           
        </div>
        </div>
    )
}