// https://stackoverflow.com/questions/35150044/leaflet-how-to-set-center-map-when-click-marker

import React, { useEffect, useState } from "react";

import { MapContainer, Marker, Popup, TileLayer, Tooltip, useMap, useMapEvents } from 'react-leaflet'
import { Icon } from 'leaflet'

import L from "leaflet";

import GetVets from "./functions/GetVets";

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

const MapVet = () => {
    const [vets, setVets] = useState(null)
    const [seeInfo, setSeeInfo] =  useState(null)

    const styles = {
        dispInfo: {
            left: 60,
            top: 100
        }
    }

    React.useEffect(() => {
        ;(async () => {
          const data = await GetVets()
          if (!data['success']) {
            alert(data['error'])
          } else {
            setVets(data['data'])
          }
        })()
      }, [])

    const LocationMarker = () => {
        const [position, setPosition] = useState(null)

        const map = useMap()
    
        useEffect(() => {        
            map.locate().on("locationfound", function (e) {
                setPosition(e.latlng)
                // if(seeInfo === null){
                //     map.flyTo(e.latlng, map.getZoom());
                //     const radius = e.accuracy;
                //     const circle = L.circle(e.latlng, radius);
                //     circle.addTo(map);
                // }
            });            
        }, [map])
        
        return position == null ? null : (
            <Marker 
                position={position} 
                icon={iconHouse}  
                eventHandlers={{
                    click: (e) => {
                        map.flyTo(e.latlng, map.getZoom());
                        setSeeInfo(null)
                    }
                }}              
            >
            <Tooltip>
              Tu estas aquí <br />
            </Tooltip>
          </Marker>
        )
    }

    const AddVet = ({lat, long, vet}) => {
        const map = useMap()

        return(
            <Marker 
                position={[lat, long]} 
                icon={iconVet}
                eventHandlers={{
                    click: (e) => {
                        map.flyTo(e.latlng, map.getZoom());
                        setSeeInfo(vet)
                    }
                }}
            >
                <Tooltip>
                    {vet['name']} <br />
                </Tooltip>
            </Marker>
        )
    }

    const SeeVetInfo = () => {
        return (
            <>
            {seeInfo !== null && (
                <div class="displayInfo" style={styles.dispInfo}>
                    <h2>Información</h2>
                    <div class="vetInfo">
                        <h4>
                            Nombre: <p>{seeInfo['name']}</p>
                        </h4>
                        <h4>
                            Dirección:
                        </h4>
                        <h4>
                            Número de teléfono:
                        </h4>
                    </div>
                    <button class="emmBtn">
                        Ver Más Detalles
                    </button>
                </div>
            )}            
            </>
        )
    }

    return(
        <>
            <SeeVetInfo/>
            <MapContainer center={centerPosition} zoom={13}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker/>
                {vets !== null && vets.map((vet) => (
                    <AddVet lat={vet['long']} long={vet['lat']} vet={vet}/>
                ))}
            </MapContainer>        
        </>
    )
}

export default MapVet