import { useEffect } from 'react'

const EventsView = (props) => {
  try {
    useEffect(() => {
      getInfo()
    }, [props.urlEvent])
  } catch (e) {
    alert('Mensaje del Servidor: No se pudo establecer la conexión')
  }
  const getInfo = async () => {
    const url = props.urlEvent
    const response = await fetch(url)
    const data = await response.json()
    // Guardar estado del orden para luego aca ordenar la respuesta de data antes de asignar a setInfoOri y setInfo
    props.setInfoEvent(data.data.results)
  }

  return (
    <div className="card-container-others">
      {console.log(props.infoEvent)}
      {props.infoEvent.map((e) => (
        <div key={e.id} className="bg-card">
          <div className="card-others">
            <div className="container-img-others">
              <img
                className="img-card-others"
                src={`${e.thumbnail.path}.${e.thumbnail.extension}`}
                alt=""
              />
            </div>
            <div className="title-others">
              <h3>Titulo: {e.title}</h3>
            </div>
            <h3 className="description-others">Descripción: {e.description}</h3>
            <h3 className="price-others-print">Numero de capitulos:</h3>
            <a
              className="link-others"
              href="hola"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pagina Oficial
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EventsView
