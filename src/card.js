function Card({item,cartItems,handleAddToCart}){
    return <div className="col-lg-4 ml-5 mt-2 mb-2">
    <div class="card" style={{width: '18rem'}}>
      <img src="https://picsum.photos/100/50" class="card-img-top" alt="..."/>
        <div class="card-body" >
          <h5 class="card-title">{item.title}</h5>
          <p className="card-text">{item.price}</p>
          <button disabled={cartItems.some((obj) => obj.id === item.id)} onClick={() =>{handleAddToCart(item)}} href="#" class="btn btn-primary">add to cart</button>
        </div>
    </div>
  </div>
}
export default Card;