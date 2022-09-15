/**#######################################################################################
 * Universidad del Valle de Guatemala
 * Departamento de Ciencias de la Computación
 * Ingeniería de Software 1 & 2 - Sección 10
 * 
 * Me Pet & Me
 * ! Map Vet: Mostrar mapa y solicitar que se atienda a la mascota
 * 
 * Integrantes:
 * Cristian Laynez
 * Elean Rivas
 * Sara Paguaga
 * Diego Ruiz 
 * Javier Alvarez
 #######################################################################################*/

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { MapContainer, Marker, TileLayer, Tooltip, useMap } from 'react-leaflet'
import { Icon } from 'leaflet'
import L from 'leaflet'

import '../styles/map.css'

import VetPopup from './VetPopup'
import GetVets from './functions/GetVets'

const iconVet = new Icon({
    iconUrl: '/icons8-marker-a-48.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png',
    iconSize: [48, 48],
})

const iconHouse = new Icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png',
})

const centerPosition = [14.6050635, -90.4893286]

const LocationMarker = () => {
    const [position, setPosition] = useState(null)

    const map = useMap()

    useEffect(() => {
        map.locate().on('locationfound', function (e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
            const radius = e.accuracy
            const circle = L.circle(e.latlng, radius)
            circle.addTo(map)
        })
    }, [map])

    return position == null ? null : (
        <Marker
            position={position}
            icon={iconHouse}
            eventHandlers={{
                click: (e) => {
                    map.flyTo(e.latlng, map.getZoom())
                },
            }}
        >
            <Tooltip>
                Tu estas aquí <br />
            </Tooltip>
        </Marker>
    )
}

const MapVet = () => {
    const [vets, setVets] = useState(null)
    const [seeInfo, setSeeInfo] = useState(null)
    const [seePopup, setSeePopup] = useState(false)

    // Para el Componente Dragabble
    //     const [diffX, setDiffX] = useState(0)
    //     const [diffY, setDiffY] = useState(0)
    //     const [dragging, setDragging] = useState(false)
    //     const [leftStyle, setLeftStyle] = useState(60)
    //    const [topStyle, setTopStyle] = useState(100)

    const styles = {
        dispInfo: {
            left: 60,
            top: 100,
        },
    }

    React.useEffect(() => {
        (async () => {
            const data = await GetVets()
            if (!data['success']) {
                alert(data['error'])
            } else {
                setVets(data['data'])
            }
        })()
    }, [])

    // const dragStart = (e) => {
    //     setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left)
    //     setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top)
    //     setDragging(true)

    //     e.preventDefault();
    // }

    // const dragFun = (e) => {
    //     if(dragging){
    //         var leftSty = e.screenX - diffX
    //         var topSty = e.screenY - diffY
    //         setTopStyle(topSty)
    //         setLeftStyle(leftSty)

    //         e.preventDefault();
    //         console.log('dragging')

    //     }
    // }

    // const dragEnd = () => {
    //     setDragging(false)
    // }

    const AddVet = ({ lat, long, vet }) => {
        const map = useMap()

        return (
            <Marker
                position={[lat, long]}
                icon={iconVet}
                eventHandlers={{
                    click: (e) => {
                        map.flyTo(e.latlng, map.getZoom())
                        setSeeInfo(vet)
                    },
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
                    <div
                        className="displayInfo"
                        style={styles.dispInfo}
                        // onMouseDown={dragStart}
                        // onMouseMove={dragFun}
                        // onMouseUp={dragEnd}
                    >
                        <h2>Información</h2>
                        <div className="vetInfo">
                            <h4>
                                Nombre: <p>{seeInfo['name']}</p>
                            </h4>
                            <h4>Dirección: {seeInfo['direction']['city']}</h4>
                            <h4>Número de teléfono: {seeInfo['phone']}</h4>
                        </div>
                        <button
                            className="emmBtn"
                            onClick={() => setSeePopup(true)}
                        >
                            Ver Más Detalles
                        </button>
                    </div>
                )}
            </>
        )
    }

    return (
        <>
            {seePopup && (
                <VetPopup vet={seeInfo} regretOriginal={setSeePopup} />
            )}
            {!seePopup && (
                <>
                    <SeeVetInfo />
                    <MapContainer center={centerPosition} zoom={13}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <LocationMarker />
                        {vets !== null &&
                            vets.map((vet) => (
                                <AddVet
                                    key={vet['id']}
                                    lat={vet['long']}
                                    long={vet['lat']}
                                    vet={vet}
                                />
                            ))}
                    </MapContainer>
                </>
            )}
        </>
    )
}

MapVet.propTypes = {
    lat: PropTypes.number,
    long: PropTypes.number,
    vet: PropTypes.object,
}

export default MapVet
