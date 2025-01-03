import { useDispatch } from "react-redux";
import { increase, decrease } from "../feature/cartSlice";
import Button from "./ui/Button";
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
          <Button type="amount" onClick={() => dispatch(decrease({ id }))}>
            -
          </Button>
          <h2>{amount}</h2>
          <Button type="amount" onClick={() => dispatch(increase({ id }))}>
            +
          </Button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
