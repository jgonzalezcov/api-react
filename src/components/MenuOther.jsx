import React from 'react'

const MenuOther = (props) => {
  return (
    <div className="other-header">
      <h2 className="title-other">
        {props.details === 1
          ? 'Lista de Comics'
          : props.details === 2
          ? 'Lista de Series'
          : 'Sin info'}
      </h2>
      <button
        className="bt-header-other"
        onClick={() => props.setViewMenuOder(false)}
      >
        Cerrar
      </button>
    </div>
  )
}

export default MenuOther
