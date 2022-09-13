import stateOrder from '../data/stateOrder.js'

const Order = (props) => {
  const imgButton = require.context('../assets/img/', true)
  const selectState = stateOrder[props.orderType]
  return (
    <div className="order-container">
      <h3>Ordernar por:</h3>
      <div
        className={selectState.nombre}
        onClick={() =>
          props.orderType === 0
            ? (props.OrderItems(1),
              props.setOrderType(1),
              props.setActiveOrder(props.orderType))
            : (props.OrderItems(0),
              props.setOrderType(0),
              props.setActiveOrder(props.orderType))
        }
      >
        <img
          className="button-order"
          src={imgButton(selectState.nombreSrc)}
          alt="boton ordenar"
        />
        <h3 className="text-filter">Nombre</h3>
      </div>
      <div
        className={selectState.comic}
        onClick={() =>
          props.orderType === 2
            ? (props.OrderItems(3),
              props.setOrderType(3),
              props.setActiveOrder(props.orderType))
            : (props.OrderItems(2),
              props.setOrderType(2),
              props.setActiveOrder(props.orderType))
        }
      >
        <img
          className="button-order"
          src={imgButton(selectState.comicSrc)}
          alt="boton ordenar"
        />
        <h3 className="text-filter">Comics</h3>
      </div>
      <div
        className={selectState.serie}
        onClick={() =>
          props.orderType === 4
            ? (props.OrderItems(5),
              props.setOrderType(5),
              props.setActiveOrder(props.orderType))
            : (props.OrderItems(4),
              props.setOrderType(4),
              props.setActiveOrder(props.orderType))
        }
      >
        <img
          className="button-order"
          src={imgButton(selectState.serieSrc)}
          alt="boton ordenar"
        />
        <h3 className="text-filter">Series</h3>
      </div>
      <div
        className={selectState.evento}
        onClick={() =>
          props.orderType === 6
            ? (props.OrderItems(7),
              props.setOrderType(7),
              props.setActiveOrder(props.orderType))
            : (props.OrderItems(6),
              props.setOrderType(6),
              props.setActiveOrder(props.orderType))
        }
      >
        <img
          className="button-order"
          src={imgButton(selectState.eventoSrc)}
          alt="boton ordenar"
        />
        <h3 className="text-filter">Eventos</h3>
      </div>
    </div>
  )
}

export default Order
