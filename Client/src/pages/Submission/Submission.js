import './Submission.scss'
import Rating from '../../Components/Rating/Rating';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
// make axios post request to server to create a new submission

const url = 'http://localhost:5000/restaurants/';


export default class Submission extends Component {
    
        state = {
            submit: false
        }
    
    
        submitEvent = (e) =>{
            e.preventDefault();
            const name = e.target.name.value;
            const display_phone = e.target.phone.value;
            const happyhour = e.target.times.value;
            if(name && display_phone && happyhour){
                alert('Restaurant was uploaded successfully!');
                axios.post(url, {name, display_phone, happyhour})
                this.setState({submit:true})
            }else {
                alert('Please fill out details!')
            }
        }
        
        render(){
            if ( this.state.submit){
                return <Redirect to='/'/>;
            }
     
    return(
        <div className='submission-container'>
        <Header/>
        <div className='submission'>
            <form className='submission__form' onSubmit={this.submitEvent}>
                <h3 className='submission__title'>Restaurant Submissions</h3>
                <label for='name'>Restaurant Name </label>
                <input type='text' name='name' />
                <label for='times'>Happy hour Times</label>
                <input type='text' name='times' />
                <label for='address'>Address </label>
                <input type='text' name='address' />
                <label for='phone'>Phone</label>
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
        }}
