import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './card';
import CartItem from './CartItem';
import { useState } from 'react';
function App() {
  const [products,setProduct] = useState([
    {
      id:1,
      title: "imac",
      price: 10000
    },
    {
      id:2,
      title: "imac",
      price: 10000
    },
    {
      id:3,
      title: "imac",
      price: 10000
    },
    {
      id:4,
      title: "imac",
      price: 10000
    },
    {
      id:5,
      title: "imac",
      price: 10000
    },
    {
      id:6,
      title: "imac",
      price: 10000
    },
    {
      id:7,
      title: "imac",
      price: 10000
    },
    {
      id:8,
      title: "imac",
      price: 10000
    },
    {
      id:9,
      title: "imac",
      price: 10000
    },
  ])
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0)
  let addToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price)
  };
  let removeFromCart = (item) => {
   let index =cart.findIndex((obj) => obj.id === item.id)
   cart.splice(index,1);
   setCart([...cart])
   setTotal(total-item.price)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10">
          <div className="row">
            {
              products.map((item) => {
                return <Card item={item} cartItems={cart} handleAddToCart={addToCart}></Card>

              })
            }
          </div>
        </div>
        <div className="col-lg-2 mt-3">
          {
            cart.length === 0 ?
              <div>no items in cart</div> : <div className="row">
                <ol class="list-group list-group-numbered">
                  {
                    cart.map((cardItem) => {
                      return <CartItem cardItem={cardItem} removeFromCart={removeFromCart}></CartItem>;
                    })
                  }

                </ol>
                <h3>total-{total}</h3>
              </div>
          } 
        </div>
      </div>
    </div>
  );
}

export default App;
