import React from 'react'

const Filter = (props) => {
  return (
    <div className="container-filter">
      <div className="container-selections">
        <h3 className="title-filter">CONTENGA</h3>
        <div className="container-checkbox">
          <input
            className="checkbox-select"
            type="checkbox"
            defaultChecked={props.checkComic}
            onChange={() => props.setCheckComic(!props.checkComic)}
          />
          <label className="checkbox-img" htmlFor="checkbox">
            Comics{' '}
          </label>
          <img src="" alt="" />
        </div>
        <div className="container-checkbox">
          <input
            className="checkbox-select"
            type="checkbox"
            value={props.checkSerie}
            defaultChecked={props.checkSerie}
            onChange={() => props.setCheckSerie(!props.checkSerie)}
          />
          <label className="checkbox-img" htmlFor="checkbox">
            Series{' '}
          </label>
        </div>

        <div className="container-checkbox">
          <input
            className="checkbox-select"
            type="checkbox"
            defaultChecked={props.checkEvent}
            onChange={() => props.setCheckEvent(!props.checkEvent)}
          />
          <label className="checkbox-img" htmlFor="checkbox">
            Eventos{' '}
          </label>
        </div>

        <div className="container-checkbox">
          <input
            className="checkbox-select"
            type="checkbox"
            defaultChecked={props.checkImg}
            onChange={() => props.setCheckImg(!props.checkImg)}
          />
          <label className="checkbox-img" htmlFor="checkbox">
            imagen{' '}
          </label>
        </div>
      </div>

      <div className="container-button-filter">
        <button
          className="button-acept-filter"
          onClick={() => props.applyFilters()}
        >
          Aplicar filtros
        </button>
      </div>
    </div>
  )
}

export default Filter
