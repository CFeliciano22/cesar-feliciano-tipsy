import './Comments.scss'

export default function Comments (){


    return(
        <>
        <div className='comments'>
            <div className='comments__container--form'>
            <form className='comments__container--form--form'>
                <label for='name'>Name</label>
                <input type='text' name='name' />
                <label for='comment'>Leave a comment</label>
                <textarea name='comment'></textarea>
                <button className='comments__container--form--form-button' type='submit'>Submit</button>
            </form>
            </div>
        </div>
       {/* //create comments section */}
       <div className='comments__container--comments'>
              <div className='comments__container--comments--comment'>
                    <div className='comments__container--comments--comment--header'>
                        <h3 className='comments__container--comments--comment--header--name'>Name</h3>
                        <p className='comments__container--comments--comment--header--date'>Date</p>
                    </div>
                    <p className='comments__container--comments--comment--comment'>Leave a comment</p>
                </div>
                </div>
    </>
    )
}