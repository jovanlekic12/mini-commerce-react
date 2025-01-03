import { useSelector } from "react-redux";
import Navbar from "./navbar";
import { useNavigate } from "react-router";
import { selectTotalPrice } from "../feature/cartSlice";
import CartItem from "./CartItem";
import Button from "./ui/Button";
function Cart() {
  const { cartItems } = useSelector((store) => store.cart);
  const navigate = useNavigate();
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <main className="main__container">
      <Navbar></Navbar>
      {cartItems.length === 0 ? (
        <div className="empty__cart__div">
          <h1 className="empty__cart">YOUR CART IS EMPTY...</h1>
          <button onClick={() => navigate("/")} className="btn primary__btn">
            Back to products
          </button>
          <div className="total__price__div">
            <h1>Total Price:</h1>
            <p>{totalPrice.toFixed(2)}$</p>
          </div>
        </div>
      ) : (
        <>
          <ul className="cart__list">
            {cartItems.map((item) => {
              return <CartItem {...item} key={item.id}></CartItem>;
            })}
          </ul>
          <Button onClick={() => navigate("/")} type="primary">
            Back to products
          </Button>
          <div className="total__price__div">
            <h1>Total Price:</h1>
            <p>{totalPrice.toFixed(2)}$</p>
          </div>
        </>
      )}
    </main>
  );
}

export default Cart;
