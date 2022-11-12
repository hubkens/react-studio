export const CartItem = ({count, name}) => {
    return (
      <>
        {count ? (
          <div className="cart-item">
            <b>{name}</b>: 
            <p>{count}</p>
          </div>
        ) : <></>}
      </>
    )
  }