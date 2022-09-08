import React from 'react'
import logo from '../assets/img/marvel.png'
import funnel from '../assets/img/embudomarvel.png'

const Header = (props) => {
  return (
    <header>
      <img className="logo-header" src={logo} alt="Logo" />
      <div className="container-funnel">
        <img className="funnel" src={funnel} alt="Funnel" />
        <h3 className="text-funnel">Filtro activo</h3>
      </div>
      <button
        className="formIn header-button"
        onClick={() => props.viewFilter()}
      >
        {props.filterView === true ? 'Ocultar filtros' : 'Ver filtros'}
      </button>
    </header>
  )
}

export default Header
