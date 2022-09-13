
const InfoBox = ({info}) => {
  return (
    <div class="displayInfo">

        <h2>Emergencia</h2>

        <div >

            <h4>Veterinaria: {info.name}</h4>
            <h4>Dirección: {info.city}</h4>
            <h4>Número de teléfono: {info.phone}</h4>

        </div>

        <button  >
            Ver Más Detalles
        </button>

    </div>
  )
}

export default InfoBox
