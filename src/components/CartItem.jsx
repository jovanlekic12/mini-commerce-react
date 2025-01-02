import { useDispatch } from "react-redux";
import { increase, decrease } from "../feature/cartSlice";
function CartItem(props) {
  const { id, name, description, price, amount } = props;
  const dispatch = useDispatch();
  return (
    <li className="menu__list__item">
      <div className="item__div">
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{price}$</p>
      </div>
      <div className="item__div__quantity">
        <div className="amount__div">
          <button
            className="amount__btn"
            onClick={() => dispatch(decrease({ id }))}
          >
            -
          </button>
          <h2>{amount}</h2>
          <button
            className="amount__btn"
            onClick={() => dispatch(increase({ id }))}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
