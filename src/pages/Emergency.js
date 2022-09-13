/**#######################################################################################
 * Universidad del Valle de Guatemala
 * Departamento de Ciencias de la Computación
 * Ingeniería de Software 1 - Sección 10
 * 
 * Me Pet & Me
 * ! Emergency: Mostrar mapa y solicitar que se atienda a la mascota
 * 
 * Integrantes:
 * Cristian Laynez
 * Elean Rivas
 * Sara Paguaga
 * Diego Ruiz
 * Javier Alvarez
 #######################################################################################*/

 import React, { useState, useEffect } from 'react'

 import '../styles/map.css'
 
 import MapComponent from './components/MapComponent'
 import Popup from './Popup' 
 
 const Emergency = () => {
   const [vets, setVets] = useState([])
   const [selectedVet, setSelectedVet] = useState({
     name: 'N/A',
     direction: 'N/A',
     phone: 'N/A',
   })

   const [seePopup, setSeePopup] = useState(false)
   
 


  const [vetsData, setVetsData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchVets = async () => {
      setLoading(true)
      const res = await fetch('http://localhost:5000/api/vets')
      const {data} = await res.json() 
      setVetsData(data)
      setLoading(false)
    }
    fetchVets()
    // console.log(vetsData)
  }, [])

 
   const SeeMaps = () => {
     return (
       <>
         <meta
           name="viewport"
           content="initial-scale=1,maximum-scale=1,user-scalable=no"
         />
         <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"></script>
         <>
 
           {selectedVet['name'] !== 'N/A' && (
             <div>ll</div>
           )}
 
           <div
             className={
               selectedVet['name'] !== 'N/A' ? 'displayMap' : 'displayMap-ext'
             }
           >
             <div
               className={
                 selectedVet['name'] !== 'N/A'
                   ? 'map-container'
                   : 'map-container-ext'
               }
             >
               {!loading ? <MapComponent vetsData={vetsData} /> : <h1>Cargando ...</h1>}
             </div>
           </div>
         </>
       </>
     )
   }
 
   return (
     <>
       {!seePopup && <SeeMaps />}
       {seePopup && <Popup vet={selectedVet} regretOriginal={setSeePopup} />}
     </>
   )
 }
 
 export default Emergency