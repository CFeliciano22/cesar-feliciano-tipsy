import './Submission.scss'
import Rating from '../Rating/Rating';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
export default function Submission(){
    return(
        <div className='submission-container'>
        <Header/>
        <div className='submission'>
            <form className='submission__form'>
                <h3 className='submission__title'>Restaurant Submissions</h3>
                <label for='name'>Restaurant Name </label>
                <input type='text' name='name' />
                <label for='times'>Happy hour Times</label>
                <input type='text' name='times' />
                <label for='address'>Address </label>
                <input type='text' name='address' />
                <label for='times'>Phone</label>
                <input type='text' name='phone' />
                <div className='submission__rating-container'>
                <p className='submission__rating'>Drinks<Rating/></p>
                <p className='submission__rating'>Food<Rating/></p>
                <p className='submission__rating'>Vibes<Rating/></p>
                </div>
                <button className='submission__form-button' type='submit'>Submit</button>
            </form>
        </div>
        <Footer/>
        </div>
    )
}