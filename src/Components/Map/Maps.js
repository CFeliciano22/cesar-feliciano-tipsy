import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import {Icon} from 'leaflet';
import './Maps.scss'


export default function Maps(){
    return(
        <MapContainer className='map__container' center={[25.987219, -80.153206]} zoom={14}>
            <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
        </MapContainer>
    )
}