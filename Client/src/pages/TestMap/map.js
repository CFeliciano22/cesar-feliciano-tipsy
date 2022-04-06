import React, { Component, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import {Icon} from 'leaflet';
import './map.scss';
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
    }
   
    componentDidMount(){
        axios.get(Url).then((response) =>{
            console.log(response.data)
            this.setState({
                restaurants: response.data,
                
            })
            
        })
    }


    render(){
        if(this.state.restaurants === []){
            return "Loading..."
        }
        const prov = OpenStreetMapProvider();
        const GeoSearchControlElement = SearchControl;
        

    return(
        <div className='map'>
        <Header/>
        <MapContainer className='map__container--map' center={[25.987219, -80.153206]} zoom={14}>
            <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
        {this.state.restaurants.map(res =>(
            <Link to={`/map/${res.id}`} ><Marker key={res.id} position={[
                res.coordinates.latitude,
                res.coordinates.longitude
                ]} icon={martini}>
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
        <Footer/>
        </div>
    )
}
}