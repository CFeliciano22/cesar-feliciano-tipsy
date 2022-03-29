import './Featured.scss'
import Rating from '../Rating/Rating'

export default function Featured(){

    return(
        <div>
            <div>
                <h1>Etaru</h1>
                <p>111 S Surf Road</p>
                <p>Hallandale, FL 33009</p>
                <p>954.271.3222</p>
                <br></br>
                <p>Leave Rating...</p>
                <p className='submission__rating'>Drinks<Rating/></p>
                <p className='submission__rating'>Food<Rating/></p>
                <p className='submission__rating'>Vibes<Rating/></p>
            </div>
            <div>
                <div>
                    <img/>
                    <img/>
                    <img/>
                    <img/>
                </div>
                <h2>Happy Hour</h2>
                <p>Everyday</p>
                <p>4pm-7pm only at the bar </p>
                <p>Menu</p>
            </div>
        </div>
    )
}