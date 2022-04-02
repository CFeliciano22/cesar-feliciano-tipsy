import './Featured.scss'
import Rating from '../Rating/Rating'
import Etaru1 from '../../assets/images/etaru1.jpeg'
import Etaru2 from '../../assets/images/etaru2.jpeg'
import Etaru3 from '../../assets/images/etaru3.jpeg'
import Etaru4 from '../../assets/images/etaru4.jpeg'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Comments from '../Comments/Comments'

export default function Featured(){

    return(
        <div className='featured-page'>
         <Header/>
        <div className='featured'>
        <h1 className='featured__restaurant-name'>Etaru</h1>
        <div className='featured-container'>
                <div className='featured__restaurant'>
                <p className='featured__restaurant--content'>111 S Surf Road</p>
                <p className='featured__restaurant--content'>Hallandale, FL 33009</p>
                <p className='featured__restaurant--content'>954.271.3222</p>
                <br></br>
                <p className='featured__restaurant--content'>Leave Rating...</p>
                <p className='featured__restaurant--content'>Drinks<Rating/></p>
                <p className='featured__restaurant--content'>Food<Rating/></p>
                <p className='featured__restaurant--content'>Vibes<Rating/></p>
                <Comments/>
            </div>
            <div className='featured__content'>
                <div className='featured__images-container'>
                <div>
                    <img className='featured__images' src={Etaru1} alt='etaru'/>
                    <img className='featured__images' src={Etaru2} alt='etaru2'/>
                </div>
                    <img className='featured__images' src={Etaru3} alt='etaru3'/>
                    <img className='featured__images' src={Etaru4} alt='etaru4'/>
                </div>
                <div className='featured__happyhour'>
                <h2 className='featured__happyhour--title'>Happy Hour</h2>
                <p className='featured__restaurant--content'>Everyday</p>
                <p className='featured__restaurant--content'>4pm-7pm only at the bar </p>
                </div>
                <div>
                    <h2>Menu</h2>
                    <h3>Signature Cocktails $8</h3>
                    <p>Rita Okinawa - (Spicy margarita)</p>
                    <p>Lychee blossom - (Lychee martini)</p>
                    <p>ETARU tiki tai - (ETARU mai tai)</p>
                    <p>Umi Old Fashioned - (Japanese old fashion)</p>
                    <br></br>
                    <h3>House Pours $7</h3>
                    <p>Tito’s vodka, Oxley gin, Bacardi white rum,</p>
                    <p>Cazadores tequila, Dewar’s whisky, Jim beam bourbon</p>
                    <br></br>
                    <h3>Bar Snacks $6</h3>
                    <p>Edamame with sea salt or spicy with chili and sesame (v)</p>
                    <p>Robata chicken wings, sweet chili, sesame and lime</p>
                    <p>Japanese fried chicken with yuzu kosho mayo</p>
                    <p>Fried pork dumplings with mushrooms and truffle</p>
                    <p>Chirashi ceviche, corn, cilantro, red onion with sudachi dressing</p>
                    <p>ETARU tostada chef’s choice</p>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
        </div>
    )
}