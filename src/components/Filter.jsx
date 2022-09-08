import React from 'react'

const Filter = (props) => {
  return (
    <div className="container-filter">
      <select
        value={props.imgFilter}
        className="filter-img"
        onChange={(e) => props.setImgFilter(e.target.value)}
      >
        <option value="all">Todas</option>
        <option value="img">Con Imagenes</option>
      </select>

      <button className="button-acept" onClick={() => props.applyFilters()}>
        Aplicar filtros
      </button>
    </div>
  )
}

export default Filter
