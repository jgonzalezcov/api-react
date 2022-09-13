import { useEffect } from 'react'

/*Coexion*/

const MiApi = (props) => {
  try {
    useEffect(() => {
      getInfo()
    }, [props.urlApi])
  } catch (e) {
    alert('Mensaje del Servidor: No se pudo establecer la conexión')
  }
  const getInfo = async () => {
    const url = props.urlApi
    const response = await fetch(url)
    const data = await response.json()
    // Guardar estado del orden para luego aca ordenar la respuesta de data antes de asignar a setInfoOri y setInfo
    props.setInfoOri(data.data.results)
    props.setInfo(data.data.results)
  }

  return (
    <div className="card-container">
      {console.log(props.info)}
      {props.info.map((e) => (
        <div
          key={e.id}
          className="flip-container"
          onClick={() => props.functionSound('card')}
        >
          <div className="card card-efect">
            <div className="back">
              <img
                className="img-card"
                src={`${e.thumbnail.path}.${e.thumbnail.extension}`}
                alt=""
              />
              <h3 className="name">Nombre: {e.name}</h3>
              <h3 className="num-comics">Comics: {e.comics.available}</h3>
              <h3 className="num-series">Series: {e.series.available}</h3>
              <h3 className="num-series">Eventos: {e.events.available}</h3>
            </div>
            <div className="front">
              <img
                className="img-card2"
                src={`${e.thumbnail.path}.${e.thumbnail.extension}`}
                alt=""
              />
              <h3 className="name2">Nombre: {e.name}</h3>
              {e.comics.available > 0 ? (
                <button
                  className="formIn card-button"
                  onClick={() => props.functionComic(e.id)}
                >
                  Comics
                </button>
              ) : (
                ''
              )}
              {e.series.available > 0 ? (
                <button
                  className="formIn card-button"
                  onClick={() => props.functionSerie(e.id)}
                >
                  Series
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MiApi
