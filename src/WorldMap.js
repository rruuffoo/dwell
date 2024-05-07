import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import placeholder from "./assets/placeholder.png";
import "./WorldMap.css";

const mapCenter = [40.377975257845826, 49.85441812273204];
const markerPosition = [40.377975257845826, 49.85441812273204];
const customIcon = L.icon({
  iconUrl: placeholder,
  iconSize: [30, 30],
});

export default class WorldMap extends Component {
  render() {
    return (
      <MapContainer className='react-map' center={mapCenter} zoom={13} style={{ height: '400px'}} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={markerPosition} icon={customIcon}> {/* Добавление маркера */}
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
}

