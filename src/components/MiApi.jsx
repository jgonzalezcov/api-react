import { useEffect, useState } from 'react'

/*Coexion*/
const MiApi = (props) => {
  const getInfo = async () => {
    const url = props.urlApi
    const response = await fetch(url)
    const data = await response.json()
    props.setInfoOri(data.data.results)
    props.setInfo(data.data.results)
  }

  useEffect(() => {
    getInfo()
  }, [props.urlApi])

  return (
    <div className="card-container">
      {props.info.map((e) => (
        <div key={e.id} className="card">
          <img
            className="img-card"
            src={`${e.thumbnail.path}.${e.thumbnail.extension}`}
            alt=""
          />
          <h3 className="name">Nombre: {e.name}</h3>
          <h3 className="num-comics">Comics: {e.comics.available}</h3>
          <h3 className="num-series">Series: {e.series.available}</h3>
          <h3>{console.log(e)}</h3>
        </div>
      ))}
    </div>
  )
}

export default MiApi
