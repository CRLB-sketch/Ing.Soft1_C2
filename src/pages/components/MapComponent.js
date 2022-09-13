import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { Icon } from 'leaflet'
import InfoBox from './InfoBox'
import '../../styles/map.css'

import {useState, useEffect} from 'react'


const icon = new Icon({
  iconUrl: '/icons8-marker-a-48.png',
  iconSize: [48, 48],
})



const centerPosition = [14.6050635, -90.4893286]

//vets, setSelectedVet

const Map = ({vetsData}) => {
  const [displayInfo, setDisplayInfo] = useState(null)

  const markers = vetsData.map(el => {
    return <div className='paguaga' onClick={() => setDisplayInfo({name: el.name, 
                                              city: el.direction.city, 
                                              phone: el.phone})}>
           <Marker position={[el.long, el.lat]} icon={icon} />
           </div> })


  return (
    <>
      <MapContainer center={centerPosition} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
      </MapContainer>
      {displayInfo && <InfoBox info={displayInfo}/>}
      
    </>
  )
}


export default Map