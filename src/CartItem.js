function CartItem({cardItem,removeFromCart}){
    return( 
    <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">{cardItem.title}</div>
      {cardItem.price}
    </div>
    <button onClick={() => removeFromCart(cardItem)} class="badge bg-primary rounded-pill">X</button>
  </li> 
    );
}
export default CartItem