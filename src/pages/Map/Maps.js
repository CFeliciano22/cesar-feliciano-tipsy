import React, { Component, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import {Icon} from 'leaflet';
import './Maps.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { SearchControl, OpenStreetMapProvider } from 'react-leaflet-geosearch';

const martini = new Icon({
    iconUrl: require('../../assets/Icons/new-martini.jpeg'),
    iconSize: [40, 40]
})

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
                    currentRestaurant: response.data
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

    // handleClick=(id)=>{
    // //   window.location.href="/map/"+id
    //    this.props.history.push(`/map/${id}`)
    // // console.log(`/maps/${id}`)
    // // return <Redirect push to={`/map/${id}`}/>
    // }
  

    
    render(){
        if(this.state.restaurants === [] || this.state.currentRestaurant.location === undefined){
            return "Loading..."
        }
        const prov = OpenStreetMapProvider();
        const GeoSearchControlElement = SearchControl;

    return(
        <div className='map'>
        <Header/>
        <MapContainer className='map__container' center={[25.987219, -80.153206]} zoom={14}>
            <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
        {this.state.restaurants.map(res =>(
            <Link to={`/map/${res.id}`} ><Marker key={res.id} position={[
                res.coordinates.latitude,
                res.coordinates.longitude
                ]} icon={martini} >
                {/* eventHandlers={{
                     click: ()=>{
                         this.handleClick(res.id)
                     }
                     }} */}
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
 
            </Marker></Link>
        ))}
        <GeoSearchControlElement
          provider={prov}
          showMarker={false}
          showPopup={false}
          maxMarkers={3}
          retainZoomLevel={false}
          animateZoom={true}
          autoClose={false}
          searchLabel={"Enter address, please"}
          keepResult={true}
          popupFormat={({ query, result }) => result.label}
        />
        </MapContainer>
        <div className='restaurant'>
        <div className='restaurant-card'>
        <div>
        <img className='restaurant-card__image' src={this.state.currentRestaurant.image_url} alt='yelp img'/>
        </div>
        <div>
        
        <h2 className='restaurant-card__name'>{this.state.currentRestaurant.name}</h2>
        <p className='restaurant-card__address'>{this.state.currentRestaurant.location.display_address}</p> 
        <p className='restaurant-card__phone'>{this.state.currentRestaurant.display_phone}</p>
        <p className='restaurant-card__hh'>Happy Hour .... {this.state.currentRestaurant.happyhour}</p>
        <p className='restaurant-card__rating'>Overall rating: {this.state.currentRestaurant.rating}</p>
        </div>
        </div>
        </div>
        <Footer/>
        </div>
    )
}
}