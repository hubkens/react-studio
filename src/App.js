import "./App.css";
import { BakeryItem } from "./components/BakeryItem";
import { CartItem } from "./components/CartItem";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState(Array(bakeryData.length).fill(0))

  const handleClick = (ind) => {
    const temp = [...cart]
    temp[ind] = cart[ind] + 1;
    setCart(temp)
  }


  return (
    <div className="App">
      <h1>Kenny's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
        <div className="items-container">
          {bakeryData.map((item, index) => // TODO: map bakeryData to BakeryItem components
            <BakeryItem // replace with BakeryItem component
              
              index={index}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              click={(index) => handleClick(index)}
          />
        )}
      </div>
    
    <div className="cart-container">
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
          {cart.map((count, index) =>
            <CartItem 
              
              count={count}
              name={bakeryData[index].name}
            />
          )}
        <h3 className="total">
          Total: $
          {(cart.reduce((prev, curr, index) => {
            return prev + curr * bakeryData[index].price
          }, 0)).toFixed(2)}
        </h3>
      </div>
    </div>
  );
}


export default App;
