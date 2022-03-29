import './Rating.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMartiniGlassEmpty } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Rating(){

    const [rating, setRating] = useState(null);

    return(
        <div>
        {[...Array(5)].map((martini, i)=>{
            const ratingScore = i + 1;
            return(
                <label>
                <input 
                className="radio" 
                type='radio' 
                name='rating' 
                value={ratingScore}
                onClick={() => setRating(ratingScore)}
                />
                <FontAwesomeIcon icon={faMartiniGlassEmpty} color={ratingScore <= rating ? "#ffc107" : "#e4e5e9"} />
                </label>  
            );
        })}
        </div>
    )
}