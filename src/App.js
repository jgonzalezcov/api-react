import { useState, useEffect } from 'react'
import Filter from './components/Filter.jsx'
import Header from './components/Header.jsx'
import Letters from './components/Letters.jsx'
import MiApi from './components/MiApi.jsx'
import urls from './data/urls.js'
import soundcard from './assets/sound/carta.mp3'
import Order from './components/Order.jsx'
import MenuOther from './components/MenuOther.jsx'
import ComicsView from './components/ComicsView.jsx'
import SeriesView from './components/SeriesView.jsx'

function App() {
  /*******************************userSatate*****************************/
  const [info, setInfo] = useState([])
  const [infoOri, setInfoOri] = useState([])
  const [orderType, setOrderType] = useState(0)
  const [filterView, setFilterView] = useState(false)
  const [filterActiv, setFilterActiv] = useState(false)
  const [urlApi, setUrlApi] = useState(urls.vIni)
  const [checkComic, setCheckComic] = useState(false)
  const [checkSerie, setCheckSerie] = useState(false)
  const [checkEvent, setCheckEvent] = useState(false)
  const [checkImg, setCheckImg] = useState(false)
  const [activeOrder, setActiveOrder] = useState(false)
  const [details, setDetails] = useState(0)
  const [urlComic, setUrlComic] = useState(urls.vIniComic)
  const [infoComic, setInfoComic] = useState([])
  const [urlSerie, setUrlSerie] = useState(urls.vIniSerie)
  const [infoSerie, setInfoSerie] = useState([])
  const [viewMenuOder, setViewMenuOder] = useState(false)

  /*******************************userEffect*****************************/
  /*Este UserEffect se utiliza para escuchar si se hizo una nueva carga de datos y aplicar a estos nuevos datos, los filtros que exiten activos*/
  useEffect(() => {
    applyFilters()
  }, [infoOri])
  useEffect(() => {
    OrderItems()
  }, [activeOrder])

  /*******************************Funciones*****************************/

  /*Cambia el estado de la visualizacion del filtro al momento de hacer click en el boton "Filtros"*/
  const viewFilter = () => {
    setFilterView(true)
  }
  /*******************************Sonidos*****************************/
  const cartSound = new Audio(soundcard)
  /*Crea la Endpoint a consultar*/
  const functionLetters = (leter) => {
    setUrlApi(`${urls.start}${leter}${urls.end}`)
    setOrderType(0)
  }
  /*Llama al Endpoint para visualizar los Comics?*/
  const functionComic = (idSelect) => {
    setDetails(1)
    setUrlComic(`${urls.comicStart}${idSelect}${urls.comicEnd}`)
    setViewMenuOder(true)
  }
  const functionSerie = (idSelect) => {
    setDetails(2)
    setUrlSerie(`${urls.serieStart}${idSelect}${urls.serieEnd}`)
    setViewMenuOder(true)
  }

  /*Funcion de sonidos*/
  const functionSound = (soundSelect) => {
    if (soundSelect === 'card') {
      cartSound.play()
    }
  }

  /*Funcion ordenar*/
  const OrderItems = (types) => {
    console.log(types)
    if (types === 0) {
      info.sort(function (a, b) {
        return a.name.localeCompare(b.name, 'en', { numeric: true })
      })
      return
    }
    if (types === 1) {
      info.sort(function (a, b) {
        return b.name.localeCompare(a.name, 'en', { numeric: true })
      })
      return
    }
    if (types === 2) {
      info.sort((a, b) => a.comics.available - b.comics.available)
      return
    }
    if (types === 3) {
      info.sort((a, b) => b.comics.available - a.comics.available)
      return
    }
    if (types === 4) {
      info.sort((a, b) => a.series.available - b.series.available)
      return
    }
    if (types === 5) {
      info.sort((a, b) => b.series.available - a.series.available)
      return
    }
    if (types === 6) {
      info.sort((a, b) => a.events.available - b.events.available)
      return
    }
    if (types === 7) {
      info.sort((a, b) => b.events.available - a.events.available)
      return
    }
  }

  /*Funcion de filtros*/
  const applyFilters = () => {
    setFilterView(false)
    setInfo(infoOri)
    if (
      checkComic === false &&
      checkSerie === false &&
      checkEvent === false &&
      checkImg === false
    ) {
      setFilterActiv(false)
    } else {
      setFilterActiv(true)
    }
    /*Todas la combinaciones posibles de los filtros y accion a realizar*/
    if (
      checkComic === false &&
      checkSerie === false &&
      checkEvent === false &&
      checkImg === true
    ) {
      setInfo(
        info.filter(
          (el) =>
            el.thumbnail.path !==
              'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' &&
            el.thumbnail.path !==
              'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708'
        )
      )
      return
    }
    if (
      checkComic === false &&
      checkSerie === false &&
      checkEvent === true &&
      checkImg === false
    ) {
      setInfo(info.filter((el) => el.events.available > 0))
      return
    }
    if (
      checkComic === false &&
      checkSerie === false &&
      checkEvent === true &&
      checkImg === true
    ) {
      setInfo(
        info.filter(
          (el) =>
            el.events.available > 0 &&
            el.thumbnail.path !==
              'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' &&
            el.thumbnail.path !==
              'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708'
        )
      )
      return
    }
    if (
      checkComic === false &&
      checkSerie === true &&
      checkEvent === false &&
      checkImg === false
    ) {
      setInfo(info.filter((el) => el.series.available > 0))
      return
    }
    if (
      checkComic === false &&
      checkSerie === true &&
      checkEvent === false &&
      checkImg === true
    ) {
      setInfo(
        info.filter(
          (el) =>
            el.series.available > 0 &&
            el.thumbnail.path !==
              'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' &&
            el.thumbnail.path !==
              'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708'
        )
      )
      return
    }
    if (
      checkComic === false &&
      checkSerie === true &&
      checkEvent === true &&
      checkImg === false
    ) {
      setInfo(
        info.filter((el) => el.series.available > 0 && el.events.available > 0)
      )
      return
    }
    if (
      checkComic === false &&
      checkSerie === true &&
      checkEvent === true &&
      checkImg === true
    ) {
      setInfo(
        info.filter(
          (el) =>
            el.series.available > 0 &&
            el.events.available > 0 &&
            el.thumbnail.path !==
              'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' &&
            el.thumbnail.path !==
              'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708'
        )
      )
      return
    }
    if (
      checkComic === true &&
      checkSerie === false &&
      checkEvent === false &&
      checkImg === false
    ) {
      setInfo(info.filter((el) => el.comics.available > 0))
      return
    }
    if (
      checkComic === true &&
      checkSerie === false &&
      checkEvent === false &&
      checkImg === true
    ) {
      setInfo(
        info.filter(
          (el) =>
            el.comics.available > 0 &&
            el.thumbnail.path !==
              'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' &&
            el.thumbnail.path !==
              'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708'
        )
      )
      return
    }
    if (
      checkComic === true &&
      checkSerie === false &&
      checkEvent === true &&
      checkImg === false
    ) {
      setInfo(
        info.filter((el) => el.comics.available > 0 && el.events.available > 0)
      )
      return
    }
    if (
      checkComic === true &&
      checkSerie === false &&
      checkEvent === true &&
      checkImg === true
    ) {
      setInfo(
        info.filter(
          (el) =>
            el.comics.available > 0 &&
            el.events.available > 0 &&
            el.thumbnail.path !==
              'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' &&
            el.thumbnail.path !==
              'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708'
        )
      )
      return
    }
    if (
      checkComic === true &&
      checkSerie === true &&
      checkEvent === false &&
      checkImg === false
    ) {
      setInfo(
        info.filter((el) => el.comics.available > 0 && el.series.available > 0)
      )
      return
    }
    if (
      checkComic === true &&
      checkSerie === true &&
      checkEvent === false &&
      checkImg === true
    ) {
      setInfo(
        info.filter(
          (el) =>
            el.comics.available > 0 &&
            el.series.available > 0 &&
            el.thumbnail.path !==
              'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' &&
            el.thumbnail.path !==
              'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708'
        )
      )
      return
    }
    if (
      checkComic === true &&
      checkSerie === true &&
      checkEvent === true &&
      checkImg === false
    ) {
      setInfo(
        info.filter(
          (el) =>
            el.comics.available > 0 &&
            el.series.available > 0 &&
            el.events.available > 0
        )
      )
      return
    }
    if (
      checkComic === true &&
      checkSerie === true &&
      checkEvent === true &&
      checkImg === true
    ) {
      setInfo(
        info.filter(
          (el) =>
            el.comics.available > 0 &&
            el.series.available > 0 &&
            el.events.available > 0 &&
            el.thumbnail.path !==
              'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' &&
            el.thumbnail.path !==
              'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708'
        )
      )
    }
  }

  return (
    <div className="App">
      <Header
        viewFilter={viewFilter}
        filterView={filterView}
        filterActiv={filterActiv}
        viewMenuOder={viewMenuOder}
      />
      {viewMenuOder === true ? (
        <MenuOther setViewMenuOder={setViewMenuOder} details={details} />
      ) : (
        ''
      )}

      {viewMenuOder === false ? (
        <Letters functionLetters={functionLetters} />
      ) : (
        ''
      )}
      {viewMenuOder === false ? (
        <Order
          OrderItems={OrderItems}
          setActiveOrder={setActiveOrder}
          activeOrder={activeOrder}
          orderType={orderType}
          setOrderType={setOrderType}
        />
      ) : (
        ''
      )}
      {filterView === true ? (
        <Filter
          checkComic={checkComic}
          setCheckComic={setCheckComic}
          checkSerie={checkSerie}
          setCheckSerie={setCheckSerie}
          checkEvent={checkEvent}
          setCheckEvent={setCheckEvent}
          applyFilters={applyFilters}
          checkImg={checkImg}
          setCheckImg={setCheckImg}
        />
      ) : (
        ''
      )}
      {viewMenuOder === false ? (
        <MiApi
          setInfoOri={setInfoOri}
          infoOri={infoOri}
          setInfo={setInfo}
          info={info}
          urlApi={urlApi}
          functionSound={functionSound}
          checkComic={checkComic}
          applyFilters={applyFilters}
          OrderItems={OrderItems}
          setDetails={setDetails}
          orderType={orderType}
          setOrderType={setOrderType}
          setActiveOrder={setActiveOrder}
          activeOrder={activeOrder}
          functionComic={functionComic}
          functionSerie={functionSerie}
        />
      ) : (
        ''
      )}
      {details === 1 && viewMenuOder === true ? (
        <ComicsView
          setDetails={setDetails}
          urlComic={urlComic}
          setUrlComic={setUrlComic}
          infoComic={infoComic}
          setInfoComic={setInfoComic}
        />
      ) : (
        ''
      )}
      {details === 2 && viewMenuOder === true ? (
        <SeriesView
          setDetails={setDetails}
          urlSerie={urlSerie}
          setUrlSerie={setUrlSerie}
          infoSerie={infoSerie}
          setInfoSerie={setInfoSerie}
        />
      ) : (
        ''
      )}
    </div>
  )
}

export default App
