import './Comments.scss'

export default function Comments (){
    return(
        <div className='comments'>
            <div className='comments__container--form'>
            <form className='comments__container--form--form'>
                <label for='name'>Name</label>
                <input type='text' name='name' />
                <label for='comment'>Comment</label>
                <textarea name='comment'></textarea>
                <button className='comments__container--form--form-button' type='submit'>Submit</button>
            </form>
            </div>
        </div>
       
    )
}