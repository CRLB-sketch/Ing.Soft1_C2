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

 import React, { useState } from 'react'

 import '../styles/map.css'
 
 import MapComponent from './components/MapComponent'
 import Popup from './Popup'
 
 import GetVets from './functions/GetVets'
 
 const Emergency = () => {
   const [vets, setVets] = useState([])
   const [selectedVet, setSelectedVet] = useState({
     name: 'N/A',
     direction: 'N/A',
     phone: 'N/A',
   })
   const [loaded, setLoaded] = useState(false)
   const [seePopup, setSeePopup] = useState(false)
   const [diffX, setDiffX] = useState(0)
   const [diffY, setDiffY] = useState(0)
   const [dragging, setDragging] = useState(false)
   const [leftStyle, setLeftStyle] = useState(0)
   const [topStyle, setTopStyle] = useState(0)

   const styles = {
    dispInfo: {
      left: leftStyle,
      top: topStyle
    }
  }
 
   React.useEffect(() => {
     ;(async () => {
       const data = await GetVets()
       if (!data['success']) {
         alert(data['error'])
       } else {
         setVets(data['data'])
         setLoaded(true)
       }
     })()
   }, [])

   const dragStart = (e) => {
    setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left)
    setDiffX(e.screenY - e.currentTarget.getBoundingClientRect().top)  
    setDragging(true)
   }

   const dragFun = (e) => {
    if(dragging){
      var leftSty = e.screenX - diffX
      var topSty = e.screenY - diffY
      setTopStyle(topSty)
      setLeftStyle(leftSty)
    }
   }

   const dragEnd = (e) => {
    setDragging(false)
   }
 
   const SeeMaps = () => {
     return (
       <>
         <meta
           name="viewport"
           content="initial-scale=1,maximum-scale=1,user-scalable=no"
         />
         <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.js"></script>
         <>
           <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
           <meta
             name="viewport"
             content="width=device-width, initial-scale=1.0"
           ></meta>
 
           {selectedVet['name'] !== 'N/A' && (
             <div class="displayInfo" style={styles.dispInfo} onMouseDown={dragStart} onMouseMove={dragFun} onMouseUp={dragEnd}>
               <h2>Emergencia</h2>
               <div class="vetInfo">
                 <h4>Veterinaria: {selectedVet['name']}</h4>
                 <h4>Dirección: {selectedVet['direction']['city']}</h4>
                 <h4>Número de teléfono: {selectedVet['phone']}</h4>
               </div>
               <button class="emBtn" onClick={() => setSeePopup(true)}>
                 Ver Más Detalles
               </button>
             </div>
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
               {!loaded && <h1>Cargando...</h1>}
               {loaded && (
                 <MapComponent vets={vets} setSelectedVet={setSelectedVet} />
               )}
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