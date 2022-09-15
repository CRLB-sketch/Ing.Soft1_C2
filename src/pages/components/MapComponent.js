import React, { useEffect, useState, useRef } from "react";

import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent } from 'react-leaflet'
import { Icon, map } from 'leaflet'

import L from "leaflet";

const iconVet = new Icon({
  iconUrl: '/icons8-marker-a-48.png',
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
  iconSize: [48, 48],
})

const iconHouse = new Icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",    
})


const centerPosition = [14.6050635, -90.4893286]

const MapComponent = ({ vets, setSelectedVet }) => {  
  const LocationMarker = () => {
    const [position, setPosition] = useState(null)

    const map = useMap()

    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom());
        const radius = e.accuracy;
        const circle = L.circle(e.latlng, radius);
        circle.addTo(map);
      });
    }, [map])
    
    return position == null ? null : (
      <Marker position={position} icon={iconHouse}>
        <Popup>
          Tu estas aquí <br />
        </Popup>
      </Marker>
    )
  }

  const AddVet = ({ vet }) => {
    // console.log('SEE ADD VET')
    // console.log(vet)
    const positions = [vet['long'], vet['lat']]
    
    const mapRef = useRef()
    const handle = () => {
      setSelectedVet(vet)
      const {current = {} } = mapRef;
      const { leafletElement: map } = current;

      map.setCenter(positions)
      return null
    }

    return (
      <div onClick={handle}>
        <Marker position={positions} icon={iconVet}>
          <Popup>
            {vet['name']} <br />{' '}
            <button onClick={handle} className="btn-marker">
              VER MAS
            </button>
          </Popup>
        </Marker>
      </div>
    )
  }

  return (
    <>
      <MapContainer center={centerPosition} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {vets.map((vet) => (
          <AddVet vet={vet} />
        ))}
        <LocationMarker/>
      </MapContainer>
    </>
  )
}

export default MapComponent
