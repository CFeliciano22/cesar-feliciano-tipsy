import { Link } from 'react-router-dom'
import './Footer.scss'
import Facebook from '../../assets/Icons/icon-facebook.png'
import Twitter from '../../assets/Icons/icon-twitter.png'
import Instagram from '../../assets/Icons/icon-instagram.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'



export default function Footer(){

    return(
        <div className='footer'>
        <div className='footer__links'>
            <a href='https://facebook.com/'><img className='footer__links--icons' src={Facebook} alt='facebook icon'/></a>
            <a href='https://twitter.com/'><img className='footer__links--icons' src={Twitter} alt='twitter icon'/></a>
            <a href='https://instagram.com/'><img className='footer__links--icons' src={Instagram} alt='instagram icon'/></a>
        </div>
        <div className='footer__contact'>
        <p className='footer__contact--info'><FontAwesomeIcon icon={faPhone} color='#4682B4'/> 305.777.7777</p>
        <p className='footer__contact--info'><FontAwesomeIcon icon={faMailBulk} color='#4682B4'/> Cesar@Tipsy.com</p>
        </div>
        </div>
    )
}