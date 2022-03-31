import React, { Component } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import {Icon} from 'leaflet';
import './Maps.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Featured from '../Featured/Featured';


const Url = "http://localhost:5000/restaurants/";

export default class Maps extends Component {
    state = {
        restaurants: [],
        currentRestaurant: {}
    }

    getRestaurantbyId = (id) => {
        axios
            .get (`${Url}${id}`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    currentRest: response.data
                })
            })
            .catch(err => console.log(err))
    }
    componentDidMount(){
        axios.get(Url).then((response) =>{
            console.log(response.data)
            this.setState({
                restaurants: response.data,
                
            })
            const restaurantId = this.props.match.params.id || response.data[0].id
            this.getRestaurantbyId(restaurantId);
        })
    }

    componentDidUpdate(prevProps,prevState){
        const restaurantId =  this.props.match.params.id || this.state.restaurants[0].id 
        console.log(restaurantId)
        if (prevState.currentRestaurant && prevState.currentRestaurant.id !== restaurantId){
            this.getRestaurantbyId(restaurantId)
        }
    }


    render(){
        if(this.state.restaurants === []){
            return "Loading..."
        }
    return(
        <div>
        <MapContainer className='map__container' center={[25.987219, -80.153206]} zoom={14}>
            <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
        {this.state.restaurants.map(res =>(
            <Marker key={res.id} position={[
                res.coordinates.latitude,
                res.coordinates.longitude
                ]} >
                <Popup position={[
                res.coordinates.latitude,
                res.coordinates.longitude
                ]}>
                <h1 className='active__name'>{res.name} {res.price}</h1>
                <p className='active__address'>{res.location.display_address}</p>
                <p className='active__phone'>{res.display_phone}</p>
                <Link to='/featured'>Happy Hour</Link>
                <p className='active__rating'>Restaurant rating: {res.rating}</p>
                
                </Popup>
 
            </Marker>
        ))}

        </MapContainer>

        </div>
        
    )
}
}