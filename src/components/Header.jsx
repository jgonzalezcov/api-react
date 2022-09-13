import React from 'react'
import logo from '../assets/img/marvel.png'

const Header = (props) => {
  return (
    <header>
      <img className="logo-header" src={logo} alt="Logo" />
      <div className="container-funnel">
        {props.filterActiv === true ? (
          <h3 className="text-funnel">Visualización filtrada</h3>
        ) : (
          ''
        )}
      </div>
      <div className="container-header-button">
        {props.filterView === false && props.viewMenuOder === false ? (
          <button
            className="formIn header-button"
            onClick={() => props.viewFilter()}
          >
            Ver filtros
          </button>
        ) : (
          ''
        )}
      </div>
    </header>
  )
}

export default Header
