export const BakeryItem = ({index, name, description, price, image, click}) => {

    return (
      <div className="bakery-item">
        <img alt={description} className="bakery-image" src={image}/>
        <div className="item-info">
          <h3>
            {name}
          </h3>
          <i className="price">${price}</i>
          <div className="item-description">
            <p>{description}</p>
          </div>
          
          <button className="add-button" onClick={() => click(index)}>Add to Cart</button>
        </div>
      </div>
    )
  }