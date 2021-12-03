import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";
import './Map.css';


function Map(id) {
    return (
        <div id={id}>
            <MapContainer center={[-15.77972, -48.92972]} zoom={4.2}scrollWheelZoom={true}>
               <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer>
        </div>
    )
};

export default Map;
