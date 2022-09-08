import { useState } from 'react'
import Filter from './components/Filter.jsx'
import Header from './components/Header.jsx'
import Letters from './components/Letters.jsx'
import MiApi from './components/MiApi.jsx'
import urls from './data/urls.js'

function App() {
  /*******************************userSatate*****************************/
  const [info, setInfo] = useState([])
  const [infoOri, setInfoOri] = useState([])
  const [filterView, setFilterView] = useState(false)
  const [imgFilter, setImgFilter] = useState('all')
  const [urlApi, setUrlApi] = useState(urls.vIni)

  /*******************************Funciones*****************************/
  /*Cambia el estado de la visualizacion del filtro al momento de hacer click en el boton "Filtros"*/
  const viewFilter = () => {
    filterView === false ? setFilterView(true) : setFilterView(false)
  }
  /**/
  const functionLetters = (leter) => {
    setUrlApi(`${urls.start}${leter}${urls.end}`)
  }
  return (
    <div className="App">
      <Header viewFilter={viewFilter} filterView={filterView} />
      <Letters functionLetters={functionLetters} />
      {filterView === true ? (
        <Filter setImgFilter={setImgFilter} imgFilter={imgFilter} />
      ) : (
        ''
      )}
      <MiApi
        setInfoOri={setInfoOri}
        infoOri={infoOri}
        setInfo={setInfo}
        info={info}
        urlApi={urlApi}
      />
    </div>
  )
}

export default App
